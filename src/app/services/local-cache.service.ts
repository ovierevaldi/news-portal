import { Injectable, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalCacheService {
    constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

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
        if (isPlatformBrowser(this.platformId)) {
            localStorage.removeItem(url)
        }
    }

    clearCache(){
        if (isPlatformBrowser(this.platformId)) {
            localStorage.clear();
        }
    }
}
