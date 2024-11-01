import { Component } from '@angular/core';
import { CarouselComponent } from "../carousel/carousel.component";

@Component({
  selector: 'app-newest-news',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './newest-news.component.html'
})
export class NewestNewsComponent {

}
