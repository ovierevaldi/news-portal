import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable, retryWhen, throttleTime } from 'rxjs';
import { LocalCacheService } from './local-cache.service';
import { getMostPopularURL } from '../../lib/helper';

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

  getMostPopular(duration: string){
    return new Promise((resolve, reject) =>{
      const url = getMostPopularURL(duration)
      this.http.get(url)
      .subscribe(
        (response: any) => {
          resolve(response)
        },
        (error: any) => {
          reject(error); // Reject the promise with the error
        }
      )
    })
  }

  searchFeed(keyword: string, page: number = 1): Observable<any>{
    return this.http.get(environment.API_URL + `/svc/search/v2/articlesearch.json?q=${keyword}&page=${page}&api-key=${environment.api_keys}`)
  }

  getSections(): Observable<any>{
    return this.http.get<any>(environment.API_URL + `/svc/news/v3/content/section-list.json?api-key=${environment.api_keys}`)
  }
}
