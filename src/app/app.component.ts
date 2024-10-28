import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewsSmallComponent } from "./components/news-small/news-small.component";
import { environment } from '../environments/environment';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewsSmallComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'news-portal';

  constructor(private api: ApiService){
    console.log(environment.production);
    this.api.fetch(); 
  }
}
