import { Component, OnInit } from '@angular/core';
import { VersionService } from 'src/app/shared/services/version.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footer: string;
  public version: number;
  public faCoffee = faCoffee;
  constructor(public vs: VersionService) { }

  ngOnInit() {

    this.version = this.vs.version;
    this.footer = 'm2i formation';
  }

}

