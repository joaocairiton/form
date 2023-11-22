import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './view/lista/lista.component';
import { CadastroComponent } from './view/cadastro/cadastro.component';
import { LancamentoPipe } from './view/lista/lancamento.pipe';
import { FormsModule } from '@angular/forms';
import { CustomPaginatorComponent } from './shared/custom-paginator/custom-paginator.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    CadastroComponent,
    LancamentoPipe,
    CustomPaginatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent ]
})
export class AppModule { }
