import { Patient } from './patient.model';
import { Symptom } from './symptom.model';

export class Visit {
  public patient: Patient;
  public timeDateCreated: Date;
  public timeDateOfVisit: Date;
  public type: string;
  public symptoms: Symptom[];
  public phone: string;
  public visitemail: string;
  public timesAvailable: string; // TODO will change
  constructor() {
    this.symptoms = [];
  }

  addSymptom(symptom: Symptom) {
    this.symptoms.push(symptom);
  }

}
