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
export class LatestNewsComponent implements OnInit{
  currentDuration: string;
  previousDuration: string = '';
  popularNewsList: NewsData[] = [];
  

  constructor(private api: ApiService, public loadingService: LoadingService){
    this.currentDuration = '30'
  }

  ngOnInit(): void {
    // this.fetchData(this.currentDuration)
  }

   async fetchData(duration: string){
    this.loadingService.show();
    try {
        const data: any = await this.api.getMostPopular(duration);
        this.setPopularNewsList(data.results);
    } 
    catch (error) { 
      console.log('Cannot fetch api,' + error)
    }
    this.loadingService.hide();
  }

   setPopularNewsList(bulkData: any){
    this.popularNewsList = [];
    bulkData.forEach((element : any) => {
      this.popularNewsList.push(element as NewsData);
    });
   }

   onChangeDuration(e: any){
    this.currentDuration = e.target.value;

    this.fetchData(this.currentDuration)
   }
}
