import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footer:string;
  constructor() { }

  ngOnInit() {
    this.footer="m2i formation"
  }

}
