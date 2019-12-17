import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prestation } from 'src/app/shared/models/prestation';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {
  private pCollection$: Observable<Prestation[]>;
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    this.collection = this.http.get<Prestation[]>(`${this.urlApi}/prestations`).pipe(
      map((tab) => {
        return tab.map((obj) => {
          return new Prestation(obj);
        });
      })
    );
    }

public get collection(): Observable<Prestation[]> {
return this.pCollection$;
}

public set collection(col: Observable<Prestation[]>) {
this.pCollection$ = col;
}

}
