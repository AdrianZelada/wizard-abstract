import { Component, OnInit, OnDestroy } from '@angular/core';
import { WizardAbstractComponent } from '../types/cp.abstract';
import { Observable,of } from 'rxjs';

@Component({
  selector: 'app-cp1',
  templateUrl: './cp1.component.html',
  styleUrls: ['./cp1.component.css']
})
export class Cp1Component extends WizardAbstractComponent implements OnInit,OnDestroy {

  constructor() { 
    super()
    console.log('constructor cp1');    
  }

  ngOnInit() {
    console.log('ngOnInit cp1');    
  }

  ngOnDestroy(){
    console.log('ngOnDestroy cp1');    
  }
  
  cp :string = 'cp1';

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
