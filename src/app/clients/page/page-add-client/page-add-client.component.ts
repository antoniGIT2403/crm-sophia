import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../../prestations/services/clients.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/shared/models/client';

@Component({
    selector: 'app-page-add-client',
    templateUrl: './page-add-client.component.html',
    styleUrls: ['./page-add-client.component.scss']
})
export class PageAddClientComponent implements OnInit {

    title: string;
    subtitle: string;
    public init = new Client();

    constructor(private cs: ClientsService, private route: ActivatedRoute, private router: Router) { }



    ngOnInit() {

        this.route.data.subscribe((data) => {

            this.title = data.title;
            this.subtitle = data.subtitle;
            console.log(data);
        })

    }

    addItem(item: any){
      this.cs.add(item).subscribe((data) => {
          this.router.navigate(['clients']);
      });

          }


}






