import { Component, OnInit } from '@angular/core';
import { DropdownSelectComponent } from 'src/app/components/dropdown-select/dropdown-select.component';
import { SymptomsAPIService } from '../../services/symptoms-api.service';
import { VisitService } from 'src/app/services/visit.service';
import { Visit } from 'src/app/models/visit.model';

@Component({
  selector: 'app-visit-page',
  templateUrl: './visit-page.component.html',
  styleUrls: ['./visit-page.component.scss']
})
export class VisitPageComponent implements OnInit {


  constructor(private visitService: VisitService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    alert('form submitted. look in console for visits');
    console.log(this.visitService.getVisit());
  }

}
