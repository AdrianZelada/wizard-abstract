import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WizardAbstractComponent } from '../types/cp.abstract';

@Component({
  selector: 'app-cp5',
  templateUrl: './cp5.component.html',
  styleUrls: ['./cp5.component.css']
})
export class Cp5Component extends WizardAbstractComponent implements OnInit, OnDestroy {

  constructor() { 
    super();
    console.log('constructor cp5');    
  }

  ngOnInit() {
    console.log('ngOnInit cp5');    
  }

  ngOnDestroy(){
    console.log('ngOnDestroy cp5');    
  }

  cp :string = 'cp5';

  initial(data?: any){
    console.log(this.cp);  
    console.log("initial");    
    console.log("initial",data);    
    
  }

  valid(data?: any): Observable<any>{
    console.log(this.cp);     
    console.log("valid");    
    
    return of('valid');
  };

  getData(data?: any){
    console.log(this.cp); 
    console.log("getData");    

    return this.cp;
  };

  save(data?: any): Observable<any>{
    console.log(this.cp);    
    console.log("save");    

    return of(this.cp);
  };

  destroy(data?: any): Observable<any>{
    console.log(this.cp);
    console.log("destroy");    

    return of('destroy');
  };
}
