import { Component, Input } from '@angular/core';
import { NewsSmallComponent } from "../news-small/news-small.component";
import { ApiService } from '../../services/api.service';
import { NewsData } from '../../../../types/news.model';
import { LocalCacheService } from '../../services/local-cache.service';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-latest-news',
  standalone: true,
  imports: [NewsSmallComponent],
  templateUrl: './latest-news.component.html',
  styleUrl: './latest-news.component.css'
})
export class LatestNewsComponent {
  // Default, change on the app component
  @Input() duration: number = 7;

  popularNewsList: NewsData[] = [];

  constructor(private api: ApiService, private localCache: LocalCacheService){
    
    const url: string = environment.API_URL + `/svc/mostpopular/v2/viewed/${this.duration}.json?api-key=${environment.api_keys}`;

    // // Check if cache exsist, get from cache
    // if(this.localCache.getData(url) != null){
    //   console.log('has cache')
    //   this.setPopularNewsList(this.localCache.getData(url));
    // }
    // // else get from API
    // else{
    //   console.log('no cache')
    //   this.api.getMostPopular(7).then((data: any) => {
    //     this.setPopularNewsList(data.results);
    //     this.localCache.setData(url, data.results)
    //   })
    // }
    if(this.localCache.getData(url) != null){
      console.log('has cache')
      this.setPopularNewsList(this.localCache.getData(url));
    }
    else{
      this.api.getMostPopular(7).then((data: any) => {
        this.setPopularNewsList(data.results);
        this.localCache.setData(url, data.results)
      })
    }
   }

   setPopularNewsList(bulkData: any[]){
    bulkData.forEach(element => {
      this.popularNewsList.push(element as NewsData);
    });
   }
}
