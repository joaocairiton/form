import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

 private data = [
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
  ];

  getData() {
    return this.data;
  }

  addData(item: { 
    id: number;
    tarefa: string;
    inicio: string;
    fim: string;
    saldo: string;
    extra: string;
    atividade: string;
    comentario: string;
   }) {
    this.data.push(item);
  }

  removeData(id: number) {
    const index = this.data.findIndex(item => item.id === id);
    if (index !== -1) {
      this.data.splice(index, 1);
    }
  }
}