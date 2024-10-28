import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  // A BehaviorSubject to keep track of the loading state
  private loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  // Method to show the loading indicator
  show(): void {
    this.loadingSubject.next(true);
  }

  // Method to hide the loading indicator
  hide(): void {
    this.loadingSubject.next(false);
  }

  // Method to toggle the loading indicator
  toggle(): void {
    this.loadingSubject.next(!this.loadingSubject.value);
  }

  get(): boolean{
    return this.loadingSubject.getValue();
  }

}