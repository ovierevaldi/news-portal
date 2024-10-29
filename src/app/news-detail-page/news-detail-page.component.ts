import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-news-detail-page',
  standalone: true,
  imports: [],
  templateUrl: './news-detail-page.component.html'
})
export class NewsDetailPageComponent implements OnInit{
  constructor(private route: ActivatedRoute, public loadingService: LoadingService){}

  id: string = '';

  ngOnInit(): void {
    this.loadingService.show();
    this.id = this.route.snapshot.paramMap.get('id') ?? this.id;

    this.loadingService.hide();
  }
}
