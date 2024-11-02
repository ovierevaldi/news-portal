import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchResultPageComponent } from './search-result-page/search-result-page.component';
import { MoreFeedsComponent } from './more-feeds/more-feeds.component';

export const routes: Routes = [
    {path: 'search/:keyword', component: SearchResultPageComponent},
    {path: 'more-feeds', component: MoreFeedsComponent},
];
