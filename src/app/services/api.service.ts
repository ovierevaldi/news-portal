import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { retryWhen } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) { 
    // this.getSections();
    // this.getNewestFeed();
    // this.getMostPopular(7);
    // this.searchFeed('election')
  }

  getNewestFeed(){
    this.http.get(environment.API_URL + `/svc/news/v3/content/all/all.json?api-key=${environment.api_keys}`)
    .subscribe(response => {
      console.log(response)
      return response;
    })
  }

  getMostPopular(duration: number){
    this.http.get(environment.API_URL + `/svc/mostpopular/v2/viewed/${duration}.json?api-key=${environment.api_keys}`)
    .subscribe(response => {
      console.log(response)
      return response;
    })
  }

  searchFeed(keyword: string){
    this.http.get(environment.API_URL + `/svc/search/v2/articlesearch.json?q=${keyword}&api-key=${environment.api_keys}`)
    .subscribe(response => {
      console.log(response)
      return response;
    })
  }

  getSections(){
    console.log(environment.API_URL + `/svc/news/v3/content/section-list.json?api-key=${environment.api_keys}`)
    this.http.get(environment.API_URL + `/svc/news/v3/content/section-list.json?api-key=${environment.api_keys}`)
    .subscribe(response => {
      console.log(response)
      return response;
    })
  }
}
