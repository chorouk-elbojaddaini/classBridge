import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private selectedClass: any;

  setSelectedClass(selectedClass: any) {
    this.selectedClass = selectedClass;
  }

  getSelectedClass() {
    return this.selectedClass;
  }
}
