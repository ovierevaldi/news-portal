import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  keyword: string = ''

  constructor(private router: Router){}

  searchNews(e: Event){
    this.keyword = (e.target as HTMLInputElement).value;
    this.go(this.keyword)
  }

  go(keyword: string) {
    if(keyword === '')
      return

    this.router.navigateByUrl('/',)
    .then(() => this.router.navigate(['/search/' + keyword]))
  }
}
