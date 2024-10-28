import { Component, Input } from '@angular/core';
import { NewsData } from '../../../../types/news.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-news-small',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './news-small.component.html',
  styleUrl: './news-small.component.css'
})
export class NewsSmallComponent {
  @Input() news: NewsData = null;
}
