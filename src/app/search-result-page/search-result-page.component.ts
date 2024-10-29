import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsSmallComponent } from "../components/news-small/news-small.component";
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-search-result-page',
  standalone: true,
  imports: [NewsSmallComponent],
  templateUrl: './search-result-page.component.html'
})
export class SearchResultPageComponent implements OnInit {
  constructor(private route: ActivatedRoute, public loadingService: LoadingService){}

  keyword: string = '';

  ngOnInit(): void {
    this.loadingService.show();
    this.keyword = this.route.snapshot.paramMap.get('keyword') ?? this.keyword;

    this.loadingService.hide();
  }
}
