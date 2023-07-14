import { Component, EventEmitter, OnInit, Output, Signal, signal } from '@angular/core';
import {BookserviceService} from '../bookservice.service';
import { FormBuilder, FormGroup } from '@angular/forms';

type Cardcontent = {
  title:string
}


@Component({
  selector: 'app-book1',
  templateUrl: './book1.component.html',
  styleUrls: ['./book1.component.css'],
  
})
export class Book1Component implements OnInit {

 
 
  books:any=[];
  test:any=[]
  result:any =[]
  _searchText:string = '';

  
  constructor(private apiservice:BookserviceService){}


  ngOnInit(){
    this.getAllBookDetails();
    // this.filteredBooksData = this.result;
    // this.onSeachChangeText()
   

    
  }

  onSeachTextEnter(searchValue: string){
    this._searchText = searchValue;
    console.log(this._searchText)
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

 
  // transform(value: any): any {
  //   if (!value) return value;
  //   return value.filter((v:any) => 
  //   v.name.toLowerCase().indexOf(value.toLowerCase()) > -1 || 
  //   v.size.toLowerCase().indexOf(value.toLowerCase()) > -1)

  // }


  // filterCountries(searchTerm: string) {
  //   if(this.result.length == 0 || this.searchText===''){
  //     return this.result
  //   }else{
  //     return this.result.filter((book1:any) =>{
  //      return book1.toLowerCase() === searchTerm.toLowerCase()
  //     })
  //   }
    // this.result = searchTerm.trim().toLocaleLowerCase();
    // console.log("result",this.result)
    // const filterValue = searchTerm;
    // this.result.filter = filterValue.trim().toLowerCase();
  // }

  // searchKey(data: string) {
  //   this.searchText = data;
  //   console.log('result isssssssss',this.searchKey)
  //   this.search();
  // }

  // search() {
  //   console.log('dataaaaaaaaaaaaaa')
  //   this.filteredBooksData = this.searchText === ""? this.result : this.result.filter((element: { name: string; }) => {
  //     return element.name.toLowerCase() == this.searchText.toLowerCase();
      
  //   });
  // }

}
