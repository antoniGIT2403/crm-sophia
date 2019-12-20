import { Component, OnInit } from '@angular/core';
import { PrestationsService } from 'src/app/prestations/services/prestations.service';
import { Subject } from 'rxjs';
import { Prestation } from '../../models/prestation';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  firstPresta$: Subject<Prestation> = new Subject();
  constructor(private ps: PrestationsService) { }

  ngOnInit() {
   this.firstPresta$ = this.ps.firstPresta$;
  }

}
