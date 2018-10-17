import { Component,ViewChild, AfterViewInit } from '@angular/core';
import { Cp1Component } from './cp1/cp1.component';
import { Cp2Component } from './cp2/cp2.component';
import { Cp3Component } from './cp3/cp3.component';
import { Cp4Component } from './cp4/cp4.component';
import { Cp5Component } from './cp5/cp5.component';
import { WizardService } from './wizard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'flow-wizard';

  @ViewChild(Cp1Component) cp1:Cp1Component;
  @ViewChild(Cp2Component) cp2:Cp2Component;
  @ViewChild(Cp3Component) cp3:Cp3Component;
  @ViewChild(Cp4Component) cp4:Cp4Component;
  @ViewChild(Cp5Component) cp5:Cp5Component;

  constructor(private wizardService:WizardService){

  }

  ngAfterViewInit(){
    this.wizardService.addStep(this.cp1);
    this.wizardService.addStep(this.cp2);
    this.wizardService.addStep(this.cp3);
    this.wizardService.addStep(this.cp4);
    this.wizardService.addStep(this.cp5);

    this.wizardService.initStep(0,'hola');
  }


  onStepNext(e,d){
    console.log('nxt');    
    console.log(e);    
    console.log(d);    
    this.wizardService.next();
  }
  onComplete(e,d){
    console.log('cple');    
    console.log(e);    
    console.log(d);    
    this.wizardService.save([2,3,4]).subscribe((data:any)=>{
      console.log("results results ..... data");
      console.log(data);
      
    })

  }
}
