import { Component, Input, OnInit } from '@angular/core';
import { NewsSmallComponent } from "../news-small/news-small.component";
import { ApiService } from '../../services/api.service';
import { NewsData } from '../../../../types/news.model';
import { LocalCacheService } from '../../services/local-cache.service';
import { environment } from '../../../environments/environment.development';
import { LoadingService } from '../../services/loading.service';
import { getMostPopularURL } from '../../../lib/helper';

@Component({
  selector: 'app-popular-news',
  standalone: true,
  imports: [NewsSmallComponent],
  templateUrl: './popular-news.component.html',
  styles: '',
})
export class LatestNewsComponent{
  // Default, change on the app component
  currentDuration: string = '30';
  previousDuration: string = '';
  popularNewsList: NewsData[] = [];
  

  constructor(private api: ApiService, private localCache: LocalCacheService, public loadingService: LoadingService){
    this.fetchData(this.currentDuration, this.previousDuration)
  }

   async fetchData(duration: string, prevDuration: string){
    const url: string = getMostPopularURL(duration);
    const prevUrl: string = getMostPopularURL(prevDuration);

    if(this.localCache.getData(url) === null){
      this.loadingService.show();

      await new Promise((resolve) => {
        this.api.getMostPopular(this.getDurationNumber(this.currentDuration))
        .then((data: any) => {
          this.localCache.setData(url, data.results);
          this.localCache.deleteCache(prevUrl);

          this.loadingService.hide();
          resolve;
        });
      })
    }
    // this.setPopularNewsList(this.localCache.getData(url));
  }

   setPopularNewsList(bulkData: any[]){
    this.popularNewsList = [];
    bulkData.forEach(element => {
      this.popularNewsList.push(element as NewsData);
    });
   }

   onChangeDuration(e: any){
    this.previousDuration = this.currentDuration;
    this.currentDuration = e.target.value;

    this.fetchData(this.currentDuration, this.previousDuration)
   }

  getDurationNumber(duration: string): number{
    switch (duration) {
      case 'day':
        return 1;
      case 'week':
        return 7; 
      case 'month':
        return 30;
      default:
        return 7;
    }
  }
}
