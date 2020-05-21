import { Component, OnInit } from '@angular/core';
import { VisitService } from 'src/app/services/visit.service';
import { ToastrService } from 'ngx-toastr';
import { Visit } from 'src/app/models/visit.model';
@Component({
    selector: 'app-preview-visit',
    templateUrl: './preview-visit.component.html',
    styleUrls: ['/preview-visit.component.scss']
})
export class PreviewVisitComponent {

    visit: Visit;

    constructor(private visitService: VisitService, private toastrService: ToastrService) {}

    ngOnInit() {
        this.visit = this.visitService.visit;
    }

    onSubmit() {
        this.toastrService.success('Your request was recorded and sent to a nurse practioner', '');
        this.visitService.clearVisit();
    }

}
