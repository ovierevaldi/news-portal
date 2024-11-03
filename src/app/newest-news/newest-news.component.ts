import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { DatePipe } from '@angular/common';
import { ApiService } from '../services/api.service';
import { LoadingService } from '../services/loading.service';
import { LoadingComponent } from '../components/loading/loading.component';
import { CarouselComponent } from '../components/carousel/carousel.component';
import { NewsData } from '../../../types/news.model';
import { getNoImage, separateFirstSentence } from '../../lib/helper';

@Component({
  selector: 'app-newest-news',
  standalone: true,
  imports: [CarouselComponent, LoadingComponent, DatePipe],
  templateUrl: './newest-news.component.html'
})

export class NewestNewsComponent {
  selectedSource: 'all' | 'nyt' = 'all'
  selectedSection: string = 'all'

  newestFeedsData: any[] = []
  currentFeed: NewsData = null;
  errorApiString: string = '';

  constructor(private router: Router, private apiService: ApiService, public loading: LoadingService){
    this.fetchNewestFeeds();
    this.currentFeed = this.newestFeedsData[0];
  }

  async fetchNewestFeeds(){
    this.loading.show();

    this.apiService.getNewestFeed(this.selectedSource, this.selectedSection)
    .subscribe({
      next: (response) => {
        this.loading.successApiState();
        this.setNewsFeed(response.results)
      },
      error: (e) => {
        this.loading.failApiState();
        this.errorApiString = 'Cannot get Api data. Please try again later.'
      },
      complete: () => {
        this.loading.hide();
      }
    }) 
  }

  setNewsFeed(datas: any){
    datas.forEach((data: any, index: number) => {
      this.newestFeedsData.push(data);
      
    });
  }

  goToDetailsNews() {
    window.open(this.currentFeed?.url)
  }
  
  getSentence(field: 'first' | 'rest', text: string | undefined){
    switch (field) {
        case 'first':
            return text ? separateFirstSentence(text).first_sentence : 'No Description'
        case 'rest':
            return text ? separateFirstSentence(text).restOfText : ''
    }
  }

  goToNews(index: number) {
    this.currentFeed = this.newestFeedsData[index];
  }

  getAllMultimediaImages(){
    const imagesUrl: string[] = [];

    this.newestFeedsData.forEach((data) => {
      if(data.multimedia[2]){
        imagesUrl.push(data.multimedia[2].url)
      }
      else{
        imagesUrl.push(getNoImage())
      }
    });
    return imagesUrl;
  }
}
