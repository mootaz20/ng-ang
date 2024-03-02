import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText:string = '';
  // show:boolean = true;
  
  @ViewChild('searchInput') searchTextEl : ElementRef;

  @Output()
  setSearchText:EventEmitter<string> = new EventEmitter<string>();

  // onSearchText(){
    //   this.setSearchText.emit(this.searchText);
    // }
    // updateSearchText(valueEl: HTMLInputElement){
    updateSearchText(){
      // this.searchText = valueEl.value;
      this.searchText = this.searchTextEl.nativeElement.value;
      this.setSearchText.emit(this.searchText);
  }
}
