import { Component, Input } from '@angular/core';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/services/course.service';
import { SelectedItemService } from 'src/app/services/selected-item-service.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {
  @Input() classe: any;
  courses?:any;
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
  selectedClass:any;
  selectedItem: any = null;
  constructor(private selectedItemService: SelectedItemService,private sharedDataService:SharedDataService,private courseService:CourseService) {
    this.selectedClass = this.sharedDataService.getSelectedClass(); // Récupérez la valeur depuis le service
     console.log("claaaassse f item list",this.selectedClass);
  }

  toggleOptions(item:any) {
    this.showOptions = !this.showOptions;
    this.selectedItem = item;
  }

  onItemClick(item: any) {
    this.selected = !this.selected;
    this.selectedItemService.setSelectedItem(item);
  }

  ngOnInit(){
    this.courseService.getAllCourses(this.selectedClass.idClass).subscribe({
      next:(Response)=>{
        this.courses = Response;
        console.log(this.courses[0])
      },
      error:(error)=> console.log(error)
    });


   
  }

  formatDate(dateStr: string): string {
    return dateStr.split("T")[0];
  }

}
