import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  formulario: FormGroup;
  camposOrdenados: string[] = ['campo1', 'campo2', 'campo3', 'campo4', 'campo5', 'campo6', 'campo7', 'campo8', 'campo9', 'campo10'];
  dados: any[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      campo1: ['', Validators.required],
      campo2: ['', Validators.required],
      campo3: ['', Validators.required],
      campo4: ['', Validators.required],
      campo5: ['', Validators.required],
      campo6: ['', Validators.required],
      campo7: ['', Validators.required],
      campo8: ['', Validators.required],
      campo9: ['', Validators.required],
      campo10: ['', Validators.required],
      checkbox: [false],
    });

    // Defina o foco inicial no primeiro campo
    this.setFocusOnInput('campo1');
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
      event.preventDefault();
      this.navigateInputs(event.key);
    }
  }

  navigateInputs(key: string) {
    const currentIndex = this.camposOrdenados.indexOf(document.activeElement.id);
    let nextIndex;

    switch (key) {
      case 'ArrowUp':
        nextIndex = currentIndex - 1;
        break;
      case 'ArrowDown':
        nextIndex = currentIndex + 1;
        break;
      case 'ArrowLeft':
        nextIndex = currentIndex - 1;
        break;
      case 'ArrowRight':
        nextIndex = currentIndex + 1;
        break;
    }

    if (nextIndex >= 0 && nextIndex < this.camposOrdenados.length) {
      const nextFieldName = this.camposOrdenados[nextIndex];
      this.setFocusOnInput(nextFieldName);
    }
  }

  setFocusOnInput(fieldName: string) {
    const nextField = this.formulario.get(fieldName);
    if (nextField) {
      nextField.markAsTouched();
      nextField.markAsDirty();
      nextField.updateValueAndValidity();
      document.getElementById(fieldName).focus();
    }
  }

  onSubmit() {
    if (this.formulario.valid) {
      const formData = { ...this.formulario.value };
      this.dados.push(formData);
      console.log('Dados:', this.dados);
      this.formulario.reset();
      this.setFocusOnInput('campo1'); // Definir o foco novamente no primeiro campo após enviar
    } else {
      console.log('Formulário inválido. Por favor, preencha todos os campos.');
    }
  }
}