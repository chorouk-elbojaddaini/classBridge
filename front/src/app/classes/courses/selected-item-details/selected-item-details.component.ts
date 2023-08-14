import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SelectedItemService } from 'src/app/services/selected-item-service.service';

@Component({
  selector: 'app-selected-item-details',
  templateUrl: './selected-item-details.component.html',
  styleUrls: ['./selected-item-details.component.css'],
})
export class SelectedItemDetailsComponent implements OnInit, OnDestroy {
  selectedItem: any;
  selected : boolean = false;
  private selectedItemSubscription: Subscription | undefined;

  constructor(private selectedItemService: SelectedItemService) {}

  ngOnInit() {
    this.selectedItemSubscription = this.selectedItemService.selectedItem$.subscribe(
      (item) => {
        this.selectedItem = item;
      }
    );
  }

  ngOnDestroy() {
    if (this.selectedItemSubscription) {
      this.selectedItemSubscription.unsubscribe();
    }
  }
}
