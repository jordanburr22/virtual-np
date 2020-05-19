import { Component } from '@angular/core';
import { VisitService } from 'src/app/services/visit.service';

@Component({
    selector: 'app-preview-visit',
    templateUrl: './preview-visit.component.html',
    styleUrls: ['/preview-visit.component.scss']
})
export class PreviewVisitComponent {

    constructor(private visitService: VisitService) {}

    ngOnInit() {
    }

}