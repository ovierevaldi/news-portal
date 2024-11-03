import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { getMostPopularURL } from '../../lib/helper';
import { NewsFilter } from '../../../types/news.model';

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

  getNewestFeed(source: 'all' | 'nyt' = 'all', section: string = 'all'){
    return this.http.get<any>(environment.API_URL + `/svc/news/v3/content/${source}/${section}.json?api-key=${environment.api_keys}`)
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

  searchFeed(keyword: string, filter: NewsFilter, page: number = 1): Observable<any>{
    let strQuery = '';
    
    if(filter.begin_date){
      const day = String(filter.begin_date.getDate()).padStart(2, '0');
      const month = String(filter.begin_date.getMonth() + 1).padStart(2, '0');
      const year = filter.begin_date.getFullYear();
      strQuery += `&begin_date=${year}${month}${day}`
    }

    if(filter.end_date){
      const day = String(filter.end_date.getDate()).padStart(2, '0');
      const month = String(filter.end_date.getMonth() + 1).padStart(2, '0');
      const year = filter.end_date.getFullYear();
      strQuery += `&end_date=${year}${month}${day}`
    }

    if(filter.sort){
      strQuery += `&sort=${filter.sort}`
    }
    return this.http.get(environment.API_URL + `/svc/search/v2/articlesearch.json?q=${keyword}&page=${page}${strQuery}&api-key=${environment.api_keys}`)
  }

  getSections(): Observable<any>{
    return this.http.get<any>(environment.API_URL + `/svc/news/v3/content/section-list.json?api-key=${environment.api_keys}`)
  }
}
