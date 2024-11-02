import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { NewsSmallComponent } from "./components/news-small/news-small.component";
import { ApiService } from './services/api.service';
import { LatestNewsComponent } from "./components/popular-news/popular-news.component";
import { LocalCacheService } from './services/local-cache.service';
import { NewestNewsComponent } from "./components/newest-news/newest-news.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { MoreFeedsComponent } from "./more-feeds/more-feeds.component";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewsSmallComponent, LatestNewsComponent, NewestNewsComponent, HeaderComponent, FooterComponent, CarouselComponent, MoreFeedsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'news-portal';
  data: any = {};
  hideDashboard: boolean = false;

  // Clear temp local storage
  @HostListener('window:beforeunload', ['$event'])
    clearLocalStorage(event: Event): void {
    // Clear the localStorage
    localStorage.clear();
  }
  
  constructor(private api: ApiService, private localCache: LocalCacheService, private router: Router){
    
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if(event.urlAfterRedirects !== '/'){
          this.hideDashboard = true;
        }
        else
          this.hideDashboard = false;
      }
    });
  }

  goToMoreFeeds(){
    this.router.navigateByUrl('/',)
    .then(() => this.router.navigate(['/more-feeds/' ]))
  }
}
