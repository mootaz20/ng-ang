import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
    @Input()
    all:number = 0;

    @Input()
    inSocket:number = 0;
    
    @Input()
    outOfSocket:number = 0;

    @Output()
    selectedRadioButtonChanged: EventEmitter<string> = new EventEmitter<string>();

    selecteRadioButton: string = 'all';
    onSelectedRadioChanged(){
      this.selectedRadioButtonChanged.emit(this.selecteRadioButton);
    }
}