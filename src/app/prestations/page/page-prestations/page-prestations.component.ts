import { Component, OnInit } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { Observable } from 'rxjs';
import { PrestationsService } from '../../services/prestations.service';

export const header: string[] = [
    'Type presta' ,
       'Client' ,
       'tjmHt' ,
         'tva' ,
         'nbJours' ,
         'state' ,
         'totalHt' ,
         'totalTtc' ,
      
   ]
   

@Component({
  selector: 'app-page-prestations',
  templateUrl: './page-prestations.component.html',
  styleUrls: ['./page-prestations.component.scss']
})
export class PagePrestationsComponent implements OnInit {
    private Collection$: Observable<Prestation[]>;
    private collection: Prestation[];
    private collectionTh: string[];
  constructor(private ps: PrestationsService) { }

  ngOnInit() {
      this.ps.collection.subscribe((data) => {
          this.collection = data;
      })
      this.collectionTh = header;
  }

}
