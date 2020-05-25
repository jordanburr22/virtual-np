import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-np-patients-page',
    templateUrl: './np-patients-page.component.html',
    styleUrls: ['./np-patients-page.component.scss']
})
export class NpPatientsPageComponent implements OnInit {
    //test arr
    Users = [
        {
            "name": "Billy",
            "lastName": "Bob",
            "dateOfBirth": "1/1/1998",
            "phone": "302-555-5555",
            "lastVisit": "NaN"
        },
        {
            "name": "Ellie",
            "lastName": "Ale",
            "dateOfBirth": "2/2/1998",
            "phone": "302-555-5555",
            "lastVisit": "NaN"
        },
        {
            "name": "Joel",
            "lastName": "Holland",
            "dateOfBirth": "3/3/1998",
            "phone": "302-555-5555",
            "lastVisit": "NaN"
        },
        {
            "name": "Nicole",
            "lastName": "Nickel",
            "dateOfBirth": "4/4/1998",
            "phone": "302-555-5555",
            "lastVisit": "NaN"
        },
        {
            "name": "Timothy",
            "lastName": "Johnson",
            "dateOfBirth": "5/5/1998",
            "phone": "302-555-5555",
            "lastVisit": "NaN"
        },
        {
            "name": "Tom",
            "lastName": "Holland",
            "dateOfBirth": "6/6/1998",
            "phone": "302-555-5555",
            "lastVisit": "NaN"
        }
    ]
    constructor() {
    }

    ngOnInit() {
    }

}
