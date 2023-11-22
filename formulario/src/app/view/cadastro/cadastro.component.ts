import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Lancamentos';


/*interface Task {
  tarefa: string;
  inicio: string;
  fim: string;
  saldo: string;
  extra: string;
  atividade: string;
  comentario: string;
}*/


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  task: Task = {
    tarefa: '',
    inicio: '',
    fim: '',
    saldo: '',
    extra: '',
    atividade: '',
    comentario: '',
  };

  constructor() { }

  ngOnInit() {
  }




  submitForm() {
    // Lógica para salvar os dados na sessionStorage
    let tasks: Task[] = JSON.parse(sessionStorage.getItem('tasks')) || [];
    tasks.push(this.task);
    sessionStorage.setItem('tasks', JSON.stringify(tasks));

    // Reinicializa o objeto task para um novo lançamento
    this.task = {
      tarefa: '',
      inicio: '',
      fim: '',
      saldo: '',
      extra: '',
      atividade: '',
      comentario: '',
    };
  }

  calculateSaldo() {
    const inicio = this.convertTo24HourFormat(this.task.inicio);
    const fim = this.convertTo24HourFormat(this.task.fim);

    const startTime = new Date(`01/01/2000 ${inicio}`);
    const endTime = new Date(`01/01/2000 ${fim}`);

    let diffMillis = endTime.getTime() - startTime.getTime();
    if (diffMillis < 0) {
      // Se a hora de término for menor que a de início, adiciona um dia
      diffMillis += 24 * 60 * 60 * 1000;
    }

    const diffMinutes = Math.floor(diffMillis / (1000 * 60));
    const hours = Math.floor(diffMinutes / 60);
    const minutes = diffMinutes % 60;

    this.task.saldo = `${this.padZero(hours)}:${this.padZero(minutes)}`;
  }

  convertTo24HourFormat(time: string): string {
    const [hour, minute, period] = time.split(':');
    let hourValue = parseInt(hour, 10);

    if (period === 'PM' && hourValue !== 12) {
      hourValue += 12;
    }

    return `${this.padZero(hourValue)}:${minute}`;
  }

  padZero(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }
}