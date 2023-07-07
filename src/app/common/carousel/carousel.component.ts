import {Component, Input, OnInit} from '@angular/core';

// interface CarouselImage{
//   imageSrc: string;
//   imageAlt: string;
//   title: string;
//   subTitle: string;
//   buttonText: string;
// }

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit{

  @Input() images: any[] =[];
  @Input() indicators= true;
  @Input() controls = false;
  @Input() autoSlide = true;
  @Input() slideInterval = 5000;
  @Input() boxShadow = 'black';
  @Input() subTitleColor = '#ffbb33';
  selectedIndex = 1;
  ngOnInit() {
    if(this.autoSlide){
      this.autoslideImages();
    }
  }

  autoslideImages():void{
    setInterval(()=>{
      this.onNextClick();
    }, this.slideInterval);
  }

  selectImage(i:number){
    this.selectedIndex = i;
  }

  onPrevClick(){
    if(this.selectedIndex === 0){
      this.selectedIndex = this.images.length-1;
    }else{
      this.selectedIndex --;
    }
  }

  onNextClick(){
    if(this.selectedIndex === this.images.length-1){
      this.selectedIndex = 0;
    }else{
      this.selectedIndex ++;
    }
  }
}
