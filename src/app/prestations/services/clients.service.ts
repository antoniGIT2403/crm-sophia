import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Client } from 'src/app/shared/models/client';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { StateClient } from 'src/app/shared/enums/state-client.enum';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private pCollection$: Observable<Client[]>;
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    this.collection = this.http.get<Client[]>(`${this.urlApi}/Clients`).pipe(
      map((tab) => {
        return tab.map((obj) => {
          return new Client(obj);
        });
      })
    );
    }

    public get collection(): Observable<Client[]> {
      return this.pCollection$;
      }

      public set collection(col: Observable<Client[]>) {
      this.pCollection$ = col;
      }

      public update(item: Client, data: StateClient){
        const obj ={...item}
        //destructuration : copy colle toute les propriété pour les mettres dans un autre obj
        obj.state = data;

        return this.http.patch(`${this.urlApi}/Clients/${item.id}`,obj);
      }

}







