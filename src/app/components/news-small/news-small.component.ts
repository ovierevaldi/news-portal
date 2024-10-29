import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NewsData } from '../../../../types/news.model';
import { DatePipe } from '@angular/common';
import { getNoImage } from '../../../lib/helper';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-news-small',
  standalone: true,
  imports: [DatePipe, RouterLink],
  templateUrl: './news-small.component.html',
  styles: ''
})
export class NewsSmallComponent implements OnChanges {
  @Input() news: NewsData = null;

  url: string = '';

  //Set image thumbnail
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['news']) {
      const currentNews = changes['news'].currentValue;
      const media = currentNews.media;

      if(media.length > 0){
        this.setCoverImage(media[0]['media-metadata']);
      }
      else{
        this.url = getNoImage();
      }
    }
  }

  setCoverImage(mediaMetaData: any[]){
    this.url = mediaMetaData[1]['url']
  }
}
