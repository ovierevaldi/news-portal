import { Component } from '@angular/core';
import { NewsSmallComponent } from "../news-small/news-small.component";
import { ApiService } from '../../services/api.service';
import { NewsData } from '../../../../types/news.model';

@Component({
  selector: 'app-latest-news',
  standalone: true,
  imports: [NewsSmallComponent],
  templateUrl: './latest-news.component.html',
  styleUrl: './latest-news.component.css'
})
export class LatestNewsComponent {
  popularNewsList: NewsData[] = [];

  constructor(private api: ApiService){
    this.api.getMostPopular(7).then((data: any) => {
      this.setPopularNewsList(data.results)
    })
   }

   setPopularNewsList(bulkData: any[]){
    bulkData.forEach(element => {
      this.popularNewsList.push(element as NewsData);
    });
   }
}
