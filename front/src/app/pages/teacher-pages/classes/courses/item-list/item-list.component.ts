import { Component } from '@angular/core';
import { SelectedItemService } from 'src/app/services/selected-item-service.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {
  items = [
    {
      title: 'Chapitre 1 Introduction au réseau',
      description: 'Ce cours est le premier chapitre qu\'on a vu la dernière fois',
      numberFiles: '5',
      date: '05 juin 2023'
    },
    {
      title: 'Chapitre 1 Introduction au réseau',
      description: 'Ce cours est le premier chapitre qu\'on a vu la dernière fois',
      numberFiles: '5',
      date: '05 juin 2023'
    },
    {
      title: 'Chapitre 1 Introduction au réseau',
      description: 'Ce cours est le premier chapitre qu\'on a vu la dernière fois',
      numberFiles: '5',
      date: '05 juin 2023'
    },
    {
      title: 'Chapitre 1 Introduction au réseau',
      description: 'Ce cours est le premier chapitre qu\'on a vu la dernière fois',
      numberFiles: '5',
      date: '05 juin 2023'
    },
    {
      title: 'Chapitre 1 Introduction au réseau',
      description: 'Ce cours est le premier chapitre qu\'on a vu la dernière fois',
      numberFiles: '5',
      date: '05 juin 2023'
    },
    {
      title: 'Chapitre 1 Introduction au réseau',
      description: 'Ce cours est le premier chapitre qu\'on a vu la dernière fois',
      numberFiles: '5',
      date: '05 juin 2023'
    },
    {
      title: 'Chapitre 1 Introduction au réseau',
      description: 'Ce cours est le premier chapitre qu\'on a vu la dernière fois',
      numberFiles: '5',
      date: '05 juin 2023'
    }
  ];
  showOptions: boolean = false;
  selected:boolean = false;
  constructor(private selectedItemService: SelectedItemService) {}

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }

  onItemClick(item: any) {
    this.selected = !this.selected;
    this.selectedItemService.setSelectedItem(item);
  }
}
