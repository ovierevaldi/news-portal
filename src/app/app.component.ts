import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewsSmallComponent } from "./components/news-small/news-small.component";
import { ApiService } from './services/api.service';
import { LatestNewsComponent } from "./components/latest-news/latest-news.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewsSmallComponent, LatestNewsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'news-portal';
  data: any = {};

  constructor(private api: ApiService){
  }
}
