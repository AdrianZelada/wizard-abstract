import { Injectable } from '@angular/core';
import { WizardAbstractComponent } from './types/cp.abstract';
import { switchMap} from 'rxjs/operators'
import { Observable, forkJoin } from 'rxjs';

interface stepWizard{
  component : WizardAbstractComponent,
  arguments?: any,
  data?     : any
}

@Injectable({
  providedIn: 'root'
})
export class WizardService {

  wizardComponents:Array<stepWizard>=[];
  currentComponent:stepWizard;

  index:number=0;

  constructor() { }

  addStep(component:WizardAbstractComponent){
    this.wizardComponents.push({
      component:component
    })
  }

  initStep(index :number , data?:any){    
    this.index= index;    
    this.wizardComponents[this.index].arguments=data;
    this.wizardComponents[this.index].component.initial(data);    
  }

  next(){
    let data = this.wizardComponents[this.index].component.getData();
    this.wizardComponents[this.index].data = data;
    this.initStep(this.index+1,data);    
  }

  save(pool:Array<number>=[]){
    let arrayObs : Array<Observable<any>>=[]
    pool.forEach((val)=>{
      let step = this.wizardComponents[val];
      arrayObs.push(step.component.save(step.data));
    });

    return forkJoin(arrayObs);
  }
}
