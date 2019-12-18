import { Component, OnInit, OnDestroy } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { Observable, Subscription } from 'rxjs';
import { PrestationsService } from '../../services/prestations.service';
import { State } from 'src/app/shared/enums/state.enum';

export const header: string[] = [
    'Type presta' ,
       'Client' ,
       'tjmHt' ,
         'tva' ,
         'nbJours' ,
         
         'totalHt' ,
         'totalTtc' ,
         'state' ,
      
   ]
   

@Component({
  selector: 'app-page-prestations',
  templateUrl: './page-prestations.component.html',
  styleUrls: ['./page-prestations.component.scss']
})
export class PagePrestationsComponent implements OnInit {
    public Collection$: Observable<Prestation[]>;
    public collection: Prestation[];
    public collectionTh: string[];
    public obs: string[];
    public obs$: any;
    public states = State;
    private sub: Subscription;

   
  constructor(private ps: PrestationsService) { }

  ngOnInit() {
      this.ps.collection.subscribe((data) => {
          this.collection = data;
      })
      this.collectionTh = header;
    // this.sub = this.ps.obs$.subscribe((data) =>  { this.obs = data })
  }

  changeState(itemNikki: Prestation, event){
this.ps.update(itemNikki, event.target.value).subscribe((res: Prestation) => {  itemNikki.state = res.state; });
  }
  
//   ngOnDestroy(){
//       this.sub.unsubscribe();
//   }

}
