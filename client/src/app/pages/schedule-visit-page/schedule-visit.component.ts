import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-schedule-visit',
    templateUrl: './schedule-visit.component.html',
    styleUrls: ['/schedule-visit.component.scss']
})
export class ScheduleVisitComponent {

    private visitTypes = [
        'Phone Call',
        'Video Video'
    ];

    constructor() {}

    ngOnInit() {
    }

}