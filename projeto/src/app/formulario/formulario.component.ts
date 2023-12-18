import { Component, ElementRef, OnInit, Renderer2, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.css"],
})
export class FormularioComponent implements OnInit {
  formulario: FormGroup;
  isToastVisible: boolean = false;
  toastTitle: string = 'Notificação';
  toastMessage: string = 'Esta é uma notificação toast!';

  

  constructor(private fb: FormBuilder, private renderer: Renderer2) {
   
  }

  ngOnInit(): void {
    this.formulario = this.fb.group(
      {
        tarefa: ["", Validators.required],
        inicio: ['', [Validators.required, this.validarFormatoHora]],
        fim: ['', [Validators.required, this.validarFormatoHora]],
        extra: [""],
        atividade: [""],
        comentario: [""],
        saldo: [""],
      },
      { validators: this.validarInicioMenorQueFim }
    );

   
  }

 


  
  validarFormatoHora(control) {
    const pattern = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
    return pattern.test(control.value) ? null : { formatoHoraInvalido: true };
  }

  validarInicioMenorQueFim(group: FormGroup) {
    const inicio = group.get("inicio").value;
    const fim = group.get("fim").value;

    if (inicio && fim && inicio >= fim) {
      return { inicioMaiorOuIgualAoFim: true };
    }

    return null;
  }

  calcularSaldo(): void {
    const inicio = this.formulario.get("inicio").value;
    const fim = this.formulario.get("fim").value;

    const inicio24h = this.converterPara24Horas(inicio);
    const fim24h = this.converterPara24Horas(fim);

    const intervaloHoras = this.calcularIntervaloHoras(inicio24h, fim24h);
    this.formulario.patchValue({ saldo: intervaloHoras });
  }

  converterPara24Horas(hora12h: string): string {
    const [hora, minutos] = hora12h.split(":");
    let horas24h = parseInt(hora, 10);

    return `${horas24h.toString().padStart(2, "0")}:${minutos}`;
  }


  calcularIntervaloHoras(inicio: string, fim: string): string {
    const inicioDate = new Date(`2000-01-01T${inicio}`);
    const fimDate = new Date(`2000-01-01T${fim}`);

    const diffMilliseconds = Math.abs(fimDate.getTime() - inicioDate.getTime());
    const diffMinutes = Math.floor(diffMilliseconds / 60000);
    const horas = Math.floor(diffMinutes / 60);
    const minutos = diffMinutes % 60;

    return `${horas.toString().padStart(2, "0")}:${minutos
      .toString()
      .padStart(2, "0")}`;
  }

  salvarNoSessionStorage(): void {
    // Implemente a lógica para salvar no sessionStorage
  }
 
  showToast() {
    this.isToastVisible = true;
  }

  onToastClose() {
    // Executar ações quando a notificação toast for fechada
    console.log('Toast fechada!');
  }
 
}