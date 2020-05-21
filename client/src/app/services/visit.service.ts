import { Injectable } from '@angular/core';
import { Visit } from '../models/visit.model';
import { Symptom } from '../models/symptom.model';

@Injectable({
    providedIn: 'root'
})
export class VisitService {

    visit: Visit;
    symptoms: Symptom[] = [];

    constructor() {}

    addVisit(visit: Visit) {
        this.visit = visit;
    }

    clearVisit() {
        this.visit = null;
    }

    addSymptom(symptom: Symptom) {
        this.visit.addSymptom(symptom);
    }

}