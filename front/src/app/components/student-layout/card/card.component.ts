import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title:string = '';
  @Input() imagePath:string = '';
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  onButtonClick() {
    // Émettez un événement lorsque le bouton est cliqué
    this.buttonClick.emit();
  }
}
