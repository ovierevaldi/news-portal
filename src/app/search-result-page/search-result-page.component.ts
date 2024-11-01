import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsSmallComponent } from "../components/news-small/news-small.component";
import { LoadingService } from '../services/loading.service';
import { ApiService } from '../services/api.service';
import { PaginationComponent } from "../components/pagination/pagination.component";

@Component({
  selector: 'app-search-result-page',
  standalone: true,
  imports: [NewsSmallComponent, PaginationComponent],
  templateUrl: './search-result-page.component.html'
})
export class SearchResultPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, public loadingService: LoadingService, private apiService: ApiService, private router: Router){}

  keyword: string = '';
  searchedFeeds: any[] = [];
  total_result : number = 0;
  currentSort: string = 'relevance';
  start_date: Date | null = null;
  end_date: Date | null = null;

  disableFormButton = false;

  ngOnInit(): void {
    this.keyword = this.route.snapshot.paramMap.get('keyword') ?? this.keyword;
    // this.searchFeed(this.keyword, 1);
  }

  searchFeed(keyword: string, page: number){
    const formatKeyword = keyword.replaceAll(' ', '+').trim();

    this.loadingService.show();

    this.apiService.searchFeed(formatKeyword, page)
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
    this.searchFeed(this.keyword, page + 1);
  }

  clear(){
    this.total_result = 0;
    this.searchedFeeds = [];
  }

  changeSort(e: any) {
    this.currentSort = e.target.value;
  }

  changeStartDate(event: any) {
    this.start_date = new Date(event.target.value)
    this.isValidDate(this.start_date, this.end_date)
  }

  changeEndDate(event: any) {
    this.end_date = new Date(event.target.value)
    this.isValidDate(this.start_date, this.end_date)
  }

  isValidDate(startDate: Date | null, endDate: Date | null){
    if(startDate != null && endDate != null){
      if(startDate > endDate){
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
    if(startDate != null){
      if(startDate != null && startDate > now){
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

      const query = {
        begin_date: formData.get('start_date_filter'),
        end_date: formData.get('end_date_filter'),
        sort: formData.get('sort_filter'),
      }

      console.log(query)
  }
  
  goToURL(url: string) {
    window.open(url, '_blank');
  }
}
