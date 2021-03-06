import { Component, OnInit } from '@angular/core';
import { SymptomsAPIService } from '../../services/symptoms-api.service';
import { Symptom } from '../../models/symptom.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { VisitService } from 'src/app/services/visit.service';

@Component({
  selector: 'app-dropdown-select',
  templateUrl: './dropdown-select.component.html',
  styleUrls: ['./dropdown-select.component.scss']
})
export class DropdownSelectComponent implements OnInit {

  private disabledBody = true;
  private disabledSubBody = true;
  private disabledSymptoms = true;
  private loading = true;

  private bodyPartsObservable: any;
  private bodyParts: string[] = [];
  private bodyIDs: number[] = [];

  private chosenBodyLocation: string;
  private chosenSubBodyLocation: string;

  private subLocationsObservable: any;
  private sublocations: string[] = [];
  private subIDs: number[] = [];

  private symptomsObservables: any[] = [];
  symptoms: Symptom[] = [];

  private tempSymptom: Symptom;
  private addedSymptoms: Symptom[] = [];
  private hiddenHeader = true;

  constructor(private myAPISvc: SymptomsAPIService, private spinner: NgxSpinnerService, private visitService: VisitService) {
    this.toggleSpinner();
    this.bodyPartsObservable = myAPISvc.getBodyLocations();
    this.bodyPartsObservable.subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        this.bodyParts.push(data[i].Name);
        this.bodyIDs.push(data[i].ID);
      }
      this.disabledBody = false;
      this.toggleSpinner();
    });
  }

  ngOnInit() {
  }

  /**
   * gets sublocations of chosen body location
   */
  getSublocations() {

    this.toggleSpinner();
    this.disabledSymptoms = true;

    // First clear sublocations and sublocation IDs
    this.sublocations = [];
    this.subIDs = [];
    this.disabledSubBody = false;

    // Find id
    let chosenbodyPartID: number;
    for (let i = 0; i < this.bodyParts.length; i++) {
      if (this.chosenBodyLocation === this.bodyParts[i]) {
        chosenbodyPartID = i;
        break;
      }
    }
    // get the observable for sublocations from the chosen body location
    this.subLocationsObservable = this.myAPISvc.getBodySublocations(this.bodyIDs[chosenbodyPartID]);
    this.subLocationsObservable.subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        this.sublocations.push(data[i].Name);
        this.subIDs.push(data[i].ID);
      }
      this.toggleSpinner();
    });
  }

  /**
   * gets sublocations symptoms depending on chosen sublocation
   */
  getSublocationSymptoms() {
    this.toggleSpinner();
    // Find id
    let chosenSubBodyPartID: number;
    for (let i = 0; i < this.sublocations.length; i++) {
      if (this.chosenSubBodyLocation === this.sublocations[i]) {
        chosenSubBodyPartID = i;
        break;
      }
    }
    this.getSymptoms(chosenSubBodyPartID);
  }

  /**
   * gets symptoms of given sublocation
   * @param chosenbodyPartID index of sublocation
   */
  getSymptoms(chosenbodyPartID: number) {

    this.disabledSymptoms = false;

    // First, clear our existing symptoms and observables
    this.symptomsObservables = [];
    this.symptoms = [];

    // get a symptoms observable for every sublocation
    let thisObservable = this.myAPISvc.getSymptoms(this.subIDs[chosenbodyPartID]);
    this.symptomsObservables.push(thisObservable);

    // loop over every observable and gets its symptoms, pushing them into the symptoms list
    thisObservable.subscribe(data => {
        for (let j = 0; j < data.length; j++) {
          this.symptoms.push(new Symptom(data[j].Name, this.chosenSubBodyLocation));
        }
        this.toggleSpinner();
    });
  }

  getBodyPart(sel: any) {
    this.chosenBodyLocation = sel;
  }

  getSubBodyPart(sel: any) {
    this.chosenSubBodyLocation = sel;
  }

  prepSymptom(sel: string) {
    this.tempSymptom = new Symptom(sel, this.chosenSubBodyLocation);
  }

  addSymptom() {
    this.addedSymptoms.push(this.tempSymptom);
    this.hiddenHeader = false;
    this.visitService.addSymptom(this.tempSymptom);
  }

  private toggleSpinner() {
    this.loading ? this.spinner.show() : this.spinner.hide();
    this.loading = !this.loading;
  }

}
