import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SelectedItemService {
  private selectedItemSubject = new BehaviorSubject<any>(null);
  selectedItem$ = this.selectedItemSubject.asObservable();
  selected :boolean = false;
  
  setSelectedItem(item: any) {
    this.selectedItemSubject.next(item);
    this.selected = !this.selected;
  }
}
