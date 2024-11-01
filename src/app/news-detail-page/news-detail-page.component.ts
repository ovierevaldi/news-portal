import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from '../services/loading.service';
import { CarouselComponent } from "../components/carousel/carousel.component";
import { Carousel2Component } from '../components/carousel2/carousel2.component';

@Component({
  selector: 'app-news-detail-page',
  standalone: true,
  imports: [Carousel2Component],
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
