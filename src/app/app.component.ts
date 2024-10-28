import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewsSmallComponent } from "./components/news-small/news-small.component";
import { ApiService } from './services/api.service';
import { LatestNewsComponent } from "./components/popular-news/popular-news.component";
import { LocalCacheService } from './services/local-cache.service';
import { NewestNewsComponent } from "./components/newest-news/newest-news.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewsSmallComponent, LatestNewsComponent, NewestNewsComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'news-portal';
  data: any = {};

  // Clear temp local storage
  @HostListener('window:beforeunload', ['$event'])
    clearLocalStorage(event: Event): void {
    // Clear the localStorage
    localStorage.clear();
  }
  
  constructor(private api: ApiService, private localCache: LocalCacheService){
  }
}
