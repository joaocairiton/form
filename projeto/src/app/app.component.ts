import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  
@ViewChild('horaInicioInput', {static: true}) horaInicioInput: ElementRef;
@ViewChild('horaFimInput', {static: true}) horaFimInput: ElementRef;

myForm: FormGroup;
intervalos: string[] = [];
totalIntervalos: string = '00:00';


constructor(private fb: FormBuilder) {}

ngOnInit() {
  this.myForm = this.fb.group({
    horaInicio: ['', [Validators.required]],
    horaFim: ['', [Validators.required]],
    intervalo: [''],
    isChecked: [false]
  });

  this.focusOnInput();
}

@HostListener('document:keydown.ArrowRight', ['$event'])
onKeyDownRight(event: KeyboardEvent) {
  // Navegar para o próximo input ao pressionar a seta para baixo
  event.preventDefault();
  this.focusOnHoraFim();
}

@HostListener('document:keydown.ArrowLeft', ['$event'])
onKeyDownLeft(event: KeyboardEvent) {
  // Navegar para o próximo input ao pressionar a seta para baixo
  event.preventDefault();
  this.focusOnHoraFim();
}


focusOnInput() {
  if (this.horaInicioInput) {
    this.horaInicioInput.nativeElement.focus();
  }
}

focusOnHoraInicio() {
  if (this.horaInicioInput) {
    this.horaInicioInput.nativeElement.focus();
  }
}

focusOnHoraFim() {
  if (this.horaFimInput) {
    this.horaFimInput.nativeElement.focus();
  }
}


calcularIntervalo() {
  const horaInicio = this.myForm.get('horaInicio').value;
  const horaFim = this.myForm.get('horaFim').value;

  if (horaInicio && horaFim) {
    // Garantir que horaInicio não seja maior que horaFim
    if (this.compararHoras(horaInicio, horaFim) > 0) {
      alert('A hora de início não pode ser maior que a hora de término.');
      return;
    }

    const diff = this.calcularDiferencaHoras(horaInicio, horaFim);

    this.myForm.patchValue({
      intervalo: diff,
    });

    // Verifique se o total excede 8 horas
    if (this.somarIntervalos([...this.intervalos, diff]) > '08:00') {
      alert('Atenção: O total de horas não pode exceder 8 horas.');
    }
  }
}

adicionarIntervalo() {
  const intervalo = this.myForm.get('intervalo').value;

  // Adicione o valor do intervalo à lista de intervalos
  this.intervalos.push(intervalo);

  // Atualize o total dos intervalos
  this.totalIntervalos = this.somarIntervalos(this.intervalos);

  // Limpe o formulário
  this.myForm.reset();

  // Focar no primeiro input novamente
  this.focusOnInput();
}

compararHoras(hora1: string, hora2: string): number {
  const date1 = new Date(`2000-01-01T${hora1}`);
  const date2 = new Date(`2000-01-01T${hora2}`);

  return date1.getTime() - date2.getTime();
}

calcularDiferencaHoras(horaInicio: string, horaFim: string): string {
  const inicio = new Date(`01/01/2000 ${horaInicio}`);
  const fim = new Date(`01/01/2000 ${horaFim}`);

  let diff = fim.getTime() - inicio.getTime();
  diff = diff / 1000 / 60; // Converta para minutos

  const horas = Math.floor(diff / 60);
  const minutos = diff % 60;

  return `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`;
}

somarIntervalos(intervalos: string[]): string {
  let totalMinutos = 0;

  for (const intervalo of intervalos) {
    const [horas, minutos] = intervalo.split(':');
    totalMinutos += parseInt(horas, 10) * 60 + parseInt(minutos, 10);
  }

  const totalHoras = Math.floor(totalMinutos / 60);
  const totalMinutosRestantes = totalMinutos % 60;

  return `${totalHoras.toString().padStart(2, '0')}:${totalMinutosRestantes
    .toString()
    .padStart(2, '0')}`;
}
}

