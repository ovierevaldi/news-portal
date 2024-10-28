import { Injectable, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalCacheService implements OnInit {
    constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

    ngOnInit(): void {
        if (isPlatformBrowser(this.platformId)) {
        console.log('a')
          // Access localStorage only if we are in the browser
          localStorage.setItem('key', 'value');
        }
        else{
            console.log('b')
        }
    }

    getData(url: string){
        if (isPlatformBrowser(this.platformId)) {
            const data = localStorage.getItem(url)
            return data ? JSON.parse(data) : null;
        }
    }

    setData(url: string, data: any){
        if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem(url, JSON.stringify(data))
        }
    }

    deleteCache(url: string){
        localStorage.removeItem(url)
    }

    clearCache(){
        localStorage.clear();
    }
}
