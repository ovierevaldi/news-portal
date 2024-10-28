import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { 
    this.fetch()
  }

  fetch(){
    this.http.get('https://jsonplaceholder.typicode.com/todos/1')
    .subscribe((response) => {
      console.log(response)
    })
  }
}
