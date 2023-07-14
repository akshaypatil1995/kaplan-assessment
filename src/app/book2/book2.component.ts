import { Component } from '@angular/core';
import {BookserviceService} from '../bookservice.service';


@Component({
  selector: 'app-book1',
  templateUrl: './book2.component.html',
  styleUrls: ['./book2.component.css'],
  
})
export class Book2Component {

  books:any=[];
  test:any=[]
  result:any =[]
  _searchText:string = '';
 


  

 
  constructor(private apiservice:BookserviceService){}
  
  ngOnInit(){
    this.getAllBookDetails();
 
  }

  getAllBookDetails(){

      this.apiservice.getData().subscribe(data => {
      this.books = Object.values(data);
      for(let val of this.books){
        console.log("loop details data is:",val)
        this.test  = Array.isArray(val);
        console.log("checking array length :",this.test)
        this.result = val;
        console.log("result",this.result)
        
      }
     
  });
    
  }

  onSeachTextEnter(searchValue: string){
    this._searchText = searchValue;
    console.log(this._searchText)
  }

 

}
