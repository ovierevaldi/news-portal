import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html'
})
export class PaginationComponent {
    currentIndex = 1;
    @Input() limit: number = 200;

    @Output() currentIndexChange = new EventEmitter<number>();
    
    ngOnChanges(changes: SimpleChanges): void {
      if (changes['limit']) {
        this.limit = Math.min(Math.floor(changes['limit'].currentValue), 200); 
      }
    }

    prevClick(){
      if(this.canPrev()){ 
        this.changeCurrentIndexValue(-1)
      };
    }

    nextClick(){
      if(this.canNext()){
        this.changeCurrentIndexValue(+1)
      }
    }

    changeCurrentIndexValue(value: number) {
      this.currentIndex = this.currentIndex + value;
      this.currentIndexChange.emit(this.currentIndex);
    }

    canPrev(){
      return this.currentIndex > 1
    }

    canNext(){
      return this.currentIndex <= this.limit  
    }
}
