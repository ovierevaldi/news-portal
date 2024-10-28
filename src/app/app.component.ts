import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewsSmallComponent } from "./components/news-small/news-small.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewsSmallComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'news-portal';
}
