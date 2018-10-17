import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormWizardModule} from 'angular-wizard-form';
import { Cp1Component } from './cp1/cp1.component';
import { Cp2Component } from './cp2/cp2.component';
import { Cp3Component } from './cp3/cp3.component';
import { Cp4Component } from './cp4/cp4.component';
import { Cp5Component } from './cp5/cp5.component'; 

@NgModule({
  declarations: [
    AppComponent,
    Cp1Component,
    Cp2Component,
    Cp3Component,
    Cp4Component,
    Cp5Component,
  ],
  imports: [
    BrowserModule,
    FormWizardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
