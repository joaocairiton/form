import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideBarComponent } from './componente/side-bar/side-bar.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastComponent } from './componente/comum/toast/toast.component';
import { ButtonCustomComponent } from './componente/comum/button-custom/button-custom.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    FormularioComponent,
    ToastComponent,
    ButtonCustomComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
