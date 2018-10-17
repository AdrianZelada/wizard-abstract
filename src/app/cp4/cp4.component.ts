import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WizardAbstractComponent } from '../types/cp.abstract';

@Component({
  selector: 'app-cp4',
  templateUrl: './cp4.component.html',
  styleUrls: ['./cp4.component.css']
})
export class Cp4Component extends WizardAbstractComponent implements OnInit,OnDestroy {

  constructor() { 
    super();
    console.log('constructor cp4');    
  }

  ngOnInit() {
    console.log('ngOnInit cp4');    
  }

  ngOnDestroy(){
    console.log('ngOnDestroy cp4');    
  }


  cp :string = 'cp4';

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
