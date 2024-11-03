import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  // A BehaviorSubject to keep track of the loading state
  private loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private fetchApiState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  show(): void {
    this.loadingSubject.next(true);
  }

  hide(): void {
    this.loadingSubject.next(false);
  }

  toggle(): void {
    this.loadingSubject.next(!this.loadingSubject.value);
  }

  getState(): boolean{
    return this.loadingSubject.getValue();
  }

  successApiState(): void {
    this.fetchApiState.next(true);
  }

  failApiState(): void {
    this.fetchApiState.next(false);
  }

  toggleApiState(): void {
    this.fetchApiState.next(!this.loadingSubject.value);
  }

  getApiState(): boolean{
    return this.fetchApiState.getValue();
  }
}