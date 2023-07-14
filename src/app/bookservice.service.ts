import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
   
  constructor(private http:HttpClient) { }

  getData():Observable<any[]>{
    return this.http.get<any>('https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep');
    // return this.http.get<any>('https://randomuser.me/api/?results=20&inc=name,picture,id,cell&nat=in');
    
  }
}
