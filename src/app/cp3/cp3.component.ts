import { Component, OnInit, OnDestroy } from '@angular/core';
import { of, Observable } from 'rxjs';
import { WizardAbstractComponent } from '../types/cp.abstract';

@Component({
  selector: 'app-cp3',
  templateUrl: './cp3.component.html',
  styleUrls: ['./cp3.component.css']
})
export class Cp3Component extends WizardAbstractComponent implements OnInit, OnDestroy {

  constructor() { 
    super();
    console.log('constructor cp3');    
  }

  ngOnInit() {
    console.log('ngOnInit cp3');    
  }

  ngOnDestroy(){
    console.log('ngOnDestroy cp3');    
  }


  cp :string = 'cp3';

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
