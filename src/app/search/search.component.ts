import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {

  constructor(){}
  
  ngOnInit(): void{

  }

enteredSearchValue:string = '';
  
@Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSeachTextEnter() {
    this.searchTextChanged.emit(this.enteredSearchValue)
   }
}
