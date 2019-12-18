import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Client } from 'src/app/shared/models/client';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { ClientsService } from 'src/app/prestations/services/clients.service';



export const header: string[] = [
  'Profil' ,
  'Name' ,
     'Email' ,

       'State' ,


 ]
@Component({
  selector: 'app-page-clients',
  templateUrl: './page-clients.component.html',
  styleUrls: ['./page-clients.component.scss']
})
export class PageClientsComponent implements OnInit {

  public Collection$: Observable<Client[]>;
  public collection: Client[];
  public collectionTh: string[];
  public obs: string[];
  public obs$: any;
  public states = StateClient;
  private sub: Subscription;


  constructor(private cs: ClientsService) { }

  ngOnInit() {
    this.cs.collection.subscribe((data) => {
        this.collection = data;
    })
    this.collectionTh = header;
  // this.sub = this.cs.obs$.subscribe((data) =>  { this.obs = data })
  }
  changeState(itemNikki: Client, event){
    this.cs.update(itemNikki, event.target.value).subscribe((res: Client) => {  itemNikki.state = res.state; });
    }

}













