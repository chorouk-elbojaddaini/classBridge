import { Component } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {
  numbers = [1,2,3,4,5,6,7];
  showOptions: boolean = false;

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }
}
