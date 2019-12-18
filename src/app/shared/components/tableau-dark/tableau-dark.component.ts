import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tableau-dark',
  templateUrl: './tableau-dark.component.html',
  styleUrls: ['./tableau-dark.component.scss'],
  encapsulation: ViewEncapsulation.None //REVOIRRRRR  enleève shadow dom pour enlever c7 et c8

})
export class TableauDarkComponent implements OnInit {
  @Input() collectionTh;
  constructor() { }

  ngOnInit() {
  }

}
