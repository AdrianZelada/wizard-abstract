import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WizardAbstractComponent } from '../types/cp.abstract';

@Component({
  selector: 'app-cp2',
  templateUrl: './cp2.component.html',
  styleUrls: ['./cp2.component.css']
})
export class Cp2Component extends WizardAbstractComponent implements OnInit, OnDestroy {

  constructor() { 
    super();
    console.log('constructor cp2');    
  }

  ngOnInit() {
    console.log('ngOnInit cp2');    
  }

  ngOnDestroy(){
    console.log('ngOnDestroy cp2');    
  }


  cp :string = 'cp2';

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
