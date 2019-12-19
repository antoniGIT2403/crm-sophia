import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Prestation } from 'src/app/shared/models/prestation';

@Component({
    selector: 'app-page-add-prestation',
    templateUrl: './page-add-prestation.component.html',
    styleUrls: ['./page-add-prestation.component.scss']
})
export class PageAddPrestationComponent implements OnInit {

    title: string;
    subtitle: string;
    public init = new Prestation();



    constructor(private ps: PrestationsService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {

        this.route.data.subscribe((data) => {

            this.title = data.title;
            this.subtitle = data.subtitle;
            console.log(data);
        })

    }
    addItem(item: any){
        this.ps.add(item).subscribe((data) => {
            this.router.navigate(['prestations']); //rediretionclassique
         //   this.router.navigate(['prestations'], {relativeTo: this.route}); //rediretion relative
        });

    }

}
