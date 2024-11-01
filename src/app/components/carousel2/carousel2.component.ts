import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel2.component.html',
})
export class Carousel2Component {

  images: string[] = ['./test_1.jpeg','./test_2.jpg','./test_3.jpg','./test_4.jpg','./test_5.png'];
  currentImages: string;
  currentIndex: number = 0;
  displayCarouselBy: number = 4;

  constructor(){
    this.currentImages = this.images[0];
  }

  nextSlide() {
    if(this.currentIndex < this.images.length - 1){
      this.currentIndex++;
      if(this.currentIndex == this.displayCarouselBy){
        this.slide(this.currentIndex);
      }
      this.updateDisplayImage(this.currentIndex);
    }    
  }

  prevSlide() {
      if(this.currentIndex > 0){
        this.currentIndex--;
        if(this.currentIndex % (this.displayCarouselBy -1) === 0 && this.currentIndex != 0){
          this.slide(0);
          this.currentIndex = this.displayCarouselBy - 1;
        }
        this.updateDisplayImage(this.currentIndex);
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

  updateDisplayImage(index: number){
    this.currentIndex = index;
    this.currentImages = this.images[index];
  }
}
