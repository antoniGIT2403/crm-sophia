import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Prestation } from 'src/app/shared/models/prestation';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { State } from 'src/app/shared/enums/state.enum';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {
  private pCollection$: Observable<Prestation[]>;
  private urlApi = environment.urlApi;
  //exemple observables et unscribes()

  public obs = new Observable((observers) => { observers.next(['chris','antoni','cedric'] ) } )

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Prestation[]>(`${this.urlApi}/prestations`).pipe(
      map((tab) => {
        return tab.map((obj) => {
          return new Prestation(obj);
        });
      })
    );
    }


    // example observables and unsubscribe()
  public obs$ = new Observable((observers) => {
    observers.next(['chris', 'antony', 'cedric']);
  });
  // example observables and multicaste subscription
  public obs2$ = new Observable((observers) => {
    observers.next(Math.random());
  });
  // example observable chaud and unicast subscription
  public subject$ = new Subject();
public get collection(): Observable<Prestation[]> {
return this.pCollection$;
}

public set collection(col: Observable<Prestation[]>) {
this.pCollection$ = col;
}

public update(item: Prestation, state: State){
  const obj ={...item}
  //destructuration : copy colle toute les propriété pour les mettres dans un autre obj
  obj.state =
  state;
  return this.http.patch(`${this.urlApi}/prestations/${item.id}`,obj);
}

public add(item: Prestation){


  return this.http.post(`${this.urlApi}/prestations`,item);
}

}
