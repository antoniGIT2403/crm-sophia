import { Component, OnInit, Input , Output,EventEmitter} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-bouton',
  templateUrl: './bouton.component.html',
  styleUrls: ['./bouton.component.scss']
})
export class BoutonComponent implements OnInit {

  @Input() route: string;
  @Input() label: string;
  @Input() href: string;
  @Input() click: boolean;
  @Output() clicked: EventEmitter<any> = new EventEmitter();

  constructor(private router: RouterModule) { }

  ngOnInit() {

  }

onClick(){
  
}
}
