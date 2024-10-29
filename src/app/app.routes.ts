import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchResultPageComponent } from './search-result-page/search-result-page.component';
import { NewsDetailPageComponent } from './news-detail-page/news-detail-page.component';

export const routes: Routes = [
    {path: 'search/:keyword', component: SearchResultPageComponent},
    {path: 'news-detail/:id', component: NewsDetailPageComponent},
];
