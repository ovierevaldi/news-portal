import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html'
})
export class CarouselComponent {

  images: string[] = ['./test_1.jpeg','./test_2.jpg','./test_3.jpg','./test_4.jpg','./test_5.png'];

  currentIndex: number = 0;
  
  nextSlide() {
      if(this.currentIndex < this.images.length - 1){
        this.currentIndex++;
        this.slide(this.currentIndex)
      }    
  }

  prevSlide() {
      if(this.currentIndex > 0){
        this.currentIndex--;
        this.slide(this.currentIndex)
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
}
