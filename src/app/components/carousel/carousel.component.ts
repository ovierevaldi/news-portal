import { CommonModule, DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './carousel.component.html'
})
export class CarouselComponent {
  @Input()images: string[] = [];
  currentIndex: number = 0;

  @Output() onImageClick: any = new EventEmitter<any>();
  @Output() onNextClick: any = new EventEmitter<any>();
  @Output() onPrevClick: any = new EventEmitter<any>();

  @Input() publishedDate: Date | undefined = undefined;
  @Input() source: string | undefined = '';
  @Input() description: string = ' ';
  
  nextSlide() {
      if(this.currentIndex < this.images.length - 1){
        this.currentIndex++;
        this.slide(this.currentIndex);
        this.onNextClick.emit(this.currentIndex)
      }
  }

  prevSlide() {
      if(this.currentIndex > 0){
        this.currentIndex--;
        this.slide(this.currentIndex);
        this.onPrevClick.emit(this.currentIndex)
      }
  }

  slide(index: number){
    const parent = document.getElementById("carousel-parent");
    const children = parent?.querySelectorAll('.carousel-child');
    
    this.currentIndex = index;

    if(children?.length){
      children.forEach(element => {
        const child = element as HTMLElement;
        child.style.transform = `translateX(${-index * 100}%)` 
      });
    }
  }

  handleOnClick() {
    this.onImageClick.emit();
  }
}
