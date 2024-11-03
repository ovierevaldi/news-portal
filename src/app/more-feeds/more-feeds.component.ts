import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NewsSmallComponent } from "../components/news-small/news-small.component";
import { ApiService } from '../services/api.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { LoadingService } from '../services/loading.service';
import { LoadingComponent } from '../components/loading/loading.component';

@Component({
  selector: 'app-more-feeds',
  standalone: true,
  imports: [CommonModule, NewsSmallComponent, LoadingComponent],
  templateUrl: './more-feeds.component.html',
})
export class MoreFeedsComponent implements OnInit {
  displayCarouselBy: number = 3;
  selectedFeedSections = ['arts', 'business', 'food', 'movies', 'science', 'sports', 'technology'];

  sectionFeeds: Map<string, any> = new Map();
  currentIndexSection: Map<string, number> = new Map();
  errorApiString: string = '';

  constructor(private apiService: ApiService, private breakPointObserver: BreakpointObserver, public loadingService: LoadingService){
    this.fetchAllApi();
  }

  ngOnInit(): void {
    this.breakPointObserver.observe([
        '(min-width: 768px)',
        '(min-width: 1024px)',
      ]).subscribe((state: BreakpointState) => {
        if (state.matches) {
          if (state.breakpoints['(min-width: 1024px)']) {
                this.displayCarouselBy = 5;
            }
            else if (state.breakpoints['(min-width: 768px)']) {
                this.displayCarouselBy = 4;
            }
        }
    });
  }

  nextSlide(section: string) {
    const sectionIndex = this.currentIndexSection.get(section) ?? 0;
    if(sectionIndex < ((this.sectionFeeds.get(section).length / this.displayCarouselBy) - 1)){
        this.currentIndexSection.set(section, sectionIndex + 1);
        this.slide(this.currentIndexSection.get(section) ?? 0, section);
    }
  }

  prevSlide(section: string) {
    const sectionIndex = this.currentIndexSection.get(section) ?? 0;
    if(sectionIndex > 0){
        this.currentIndexSection.set(section, sectionIndex - 1);
        this.slide(this.currentIndexSection.get(section) ?? 0, section);
    }
  }

  slide(index: number, section: string){
    const parent = document.getElementById(`carousel-parent-${section}`);
    const children = parent?.querySelectorAll('.carousel-child');

    if(children?.length){
        children.forEach(element => {
        const child = element as HTMLElement;
        child.style.transform = `translateX(${ -index * this.displayCarouselBy * 100}%)` 
      });
    }
  }

  fetchAllApi(){
    let listSectionNews: any[] = [];
    this.loadingService.show();
    this.selectedFeedSections.forEach( async (section, index: number) => {
      this.apiService.getNewestFeed('all', section)
      .subscribe({
        next: (response) => {
        this.loadingService.successApiState();
          listSectionNews.push(response);
        },
        error: (e) => {
            this.loadingService.failApiState();
            this.errorApiString = 'Error Fetching Api, Please try again later';
            this.loadingService.hide();
        },
        complete: () => {
            if(index == this.selectedFeedSections.length -1 && this.loadingService.getApiState()){
              this.setNewsSectionData(listSectionNews)
            }
            this.loadingService.hide();
        }
      }) 
    })
  }

  setNewsSectionData(listSectionNews: any[]){
    this.selectedFeedSections.forEach((section, index) => {
      if(listSectionNews[index].results){
        this.sectionFeeds.set(section, (listSectionNews[index].results));
      }
      this.currentIndexSection.set(section, 0);
    })
  }

  getMapEntries(map: any): any[]{
    return Array.from(map.entries());
  }
}
