import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsSmallComponent } from "../components/news-small/news-small.component";
import { LoadingService } from '../services/loading.service';
import { ApiService } from '../services/api.service';
import { PaginationComponent } from "../components/pagination/pagination.component";
import { NewsFilter } from '../../../types/news.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-search-result-page',
  standalone: true,
  imports: [NewsSmallComponent, PaginationComponent, DatePipe],
  templateUrl: './search-result-page.component.html'
})
export class SearchResultPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute, 
    public loadingService: LoadingService, 
    private apiService: ApiService, 
    private router: Router)
  {}

  keyword: string = '';
  searchedFeeds: any[] = [];
  total_result : number = 0;
  currentSort: string = 'relevance';
  begin_date: Date | null = null;
  end_date: Date | null = null;
  currentFilter: NewsFilter = {begin_date: this.begin_date, end_date: this.end_date, sort: this.currentSort};

  showFilter: boolean = true;
  filter_title: string = 'Hide';
  disableFormButton = false;

  ngOnInit(): void {
    this.keyword = this.route.snapshot.paramMap.get('keyword') ?? this.keyword;
    this.searchFeed(this.keyword, this.currentFilter, 1);
  }

  async searchFeed(keyword: string, filter: NewsFilter, page: number){
    const formatKeyword = keyword.replaceAll(' ', '+').trim();

    this.loadingService.show();

    this.apiService.searchFeed(formatKeyword, filter, page)
    .subscribe({
        next: (response) => {
          this.clear();
          this.searchedFeeds = response.response.docs;
          this.total_result = response.response.meta.hits;
        },
        error: (e) => {
          this.loadingService.hide();
        },
        complete: () => {
          this.loadingService.hide();
        }
      }) 
  }

  changeNewsPage(page: number) {
  
    this.searchFeed(this.keyword, this.currentFilter, page);
  }

  clear(){
    this.total_result = 0;
    this.searchedFeeds = [];
  }

  changeSort(e: any) {
    this.currentSort = e.target.value;
  }

  changeBeginDate(event: any) {
    this.begin_date = new Date(event.target.value)
    this.isValidDate(this.begin_date, this.end_date)
  }

  changeEndDate(event: any) {
    this.end_date = new Date(event.target.value)
    this.isValidDate(this.begin_date, this.end_date)
  }

  isValidDate(beginDate: Date | null, endDate: Date | null){
    if(beginDate != null && endDate != null){
      if(beginDate > endDate){
        this.SetError('Not a valid range date');
        this.disableFormButton = true;
      }
      else{
        this.SetError('');
        this.toggleError(false)
        this.disableFormButton = false;
      }
    }

    const now = new Date(Date.now())
    if(beginDate != null){
      if(beginDate != null && beginDate > now){
        this.SetError('Start cannot be greater than today');
        this.disableFormButton = true;
      }
    }

    if(endDate != null){
      if(endDate != null && endDate > now){
        this.SetError('End Date cannot be greater than today');
        this.disableFormButton = true;
      }
    }
  }

  SetError(message: any) {
    const errorElement = document.getElementById('error-form');
    if (errorElement) {
        errorElement.innerHTML = message;
        this.toggleError(true)
    }
  }

  toggleError(show: boolean){
    const errorElement = document.getElementById('error-form');
    if (errorElement) {
      show ? errorElement.style.display = 'inline-block' : errorElement.style.display = 'none'
    }
  }

  applyNewsFilter($event: SubmitEvent) {
      $event.preventDefault();
      const form = document.getElementById('filter-news-form') as HTMLFormElement;
      const formData = new FormData(form);

      const begin_date = formData.get('begin_date_filter') ? new Date(formData.get('begin_date_filter') as string) : null;
      const end_date = formData.get('end_date_filter') ? new Date(formData.get('end_date_filter') as string) : null;
      const sort = formData.get('sort_filter') ? formData.get('sort_filter') as string : '';

      this.currentFilter = {
        begin_date: begin_date,
        end_date: end_date,
        sort: sort,
      }
      
      this.searchFeed(this.keyword, this.currentFilter, 1);
  }
  
  goToURL(url: string) {
    window.open(url, '_blank');
  }

  toggleFilterUI() {
    this.showFilter = !this.showFilter;
    
    const filterContainer = document.getElementById('filter-container');

    if(filterContainer && this.showFilter){
      filterContainer.style.maxHeight = '200px';
      filterContainer.style.overflow = 'visible';
      this.filter_title = 'Hide'
    }
    else if(filterContainer && !this.showFilter){
      filterContainer.style.maxHeight = '0px';
      filterContainer.style.overflow = 'hidden';
      this.filter_title = 'Show'
    }
  }
}
