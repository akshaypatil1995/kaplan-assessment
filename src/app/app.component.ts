import { Component } from '@angular/core';

import {BookserviceService} from '../app/bookservice.service'
// import {BookserviceService} from '../bookservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 

  books:any=[];
  test:any=[]
  obj:any=[]
  objectData:any = []
  result:any =[]
  _searchText:string = '';
  filteredBooksData:any=[]
  data:any
  book:any=[]

  get searchText(){
    return this._searchText;
  }

  set searchText(value:string){
     this._searchText = value;
     this.result = this.filterCountries(value)
  }

  constructor(private apiservice:BookserviceService){}
  
  ngOnInit(){
    this.data
    this.getAllBookDetails();
    this.filteredBooksData = this.result;
    // this.search();
    // this.filterCountries(this.data)
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
        // this.obj = this.objectData.push(this.test)
        // console.log("new array is:",this.obj)
      }
     
  });
    
  }

  change(){
    this.book[0].author=''
  }



  filterCountries(searchTerm: string) {
    if(this.result.length == 0 || this.searchText===''){
      return this.result
    }else{
      return this.result.filter((book1:any) =>{
       return book1.toLowerCase() === searchTerm.toLowerCase()
      })
    }
    // this.result = searchTerm.trim().toLocaleLowerCase();
    // console.log("result",this.result)
    // const filterValue = searchTerm;
    // this.result.filter = filterValue.trim().toLowerCase();
  }

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
