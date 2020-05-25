import { Component, OnInit } from "@angular/core";
import { VisitService } from 'src/app/services/visit.service';
import { Visit } from 'src/app/models/visit.model';

@Component({
    selector: 'app-schedule-visit',
    templateUrl: './schedule-visit.component.html',
    styleUrls: ['/schedule-visit.component.scss']
})
export class ScheduleVisitComponent {

    private visitTypes = [
        'Phone Call',
        'Video Call'
    ];
    visit = new Visit();

    constructor(private visitService: VisitService) {}

    ngOnInit() {
        this.visitService.addVisit(this.visit);
    }

}