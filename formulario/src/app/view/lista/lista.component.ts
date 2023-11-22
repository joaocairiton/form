import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Task } from "src/app/Lancamentos";


@Component({
  selector: "app-lista",
  templateUrl: "./lista.component.html",
  styleUrls: ["./lista.component.css"],
})
export class ListaComponent implements OnInit {


  //buscar: string;
  /*Lancamentos: Item [] =[

    {
      id: 1,
      tarefa: "001",
      inicio: "07:00",
      fim: "17:00",
      saldo: "10:00",
      extra: "nao",
      atividade: "dev",
      comentario: "asdfasdf",
      
    },
    {
      id: 2,
      tarefa: "002",
      inicio: "07:00",
      fim: "17:00",
      saldo: "10:00",
      extra: "nao",
      atividade: "dev",
      comentario: "asdfasdf",
      
    },
    {
      id: 3,
      tarefa: "005",
      inicio: "07:00",
      fim: "17:00",
      saldo: "10:00",
      extra: "nao",
      atividade: "dev",
      comentario: "asdfasdf",
      
    },
    {
      id: 4,
      tarefa: "012",
      inicio: "07:00",
      fim: "17:00",
      saldo: "10:00",
      extra: "nao",
      atividade: "dev",
      comentario: "asdfasdf",
      
    },
    {
      id: 5,
      tarefa: "001",
      inicio: "07:00",
      fim: "17:00",
      saldo: "10:00",
      extra: "nao",
      atividade: "compra",
      comentario: "asdfasdf",
      
    },
    {
      id: 6,
      tarefa: "001",
      inicio: "07:00",
      fim: "17:00",
      saldo: "10:00",
      extra: "nao",
      atividade: "dev",
      comentario: "asdfasdf",
      
    },
  ];*/


  constructor() {}

  ngOnInit() {
    this.loadTasksFromSessionStorage();
  }
 
  @Input() tasks: Task[];

  loadTasksFromSessionStorage() {
    const storedTasks = sessionStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
  }

  editTask(index: number) {
    // Lógica para editar a tarefa
    console.log('Editar tarefa:', this.tasks[index]);
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    sessionStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}