import { Observable } from "rxjs";

export abstract class WizardAbstractComponent {

  abstract initial(data?: any);

  abstract valid(data?: any): Observable<any>;

  abstract getData(data?: any);

  abstract save(data?: any): Observable<any>;

  abstract destroy(data?: any): Observable<any>;

}
