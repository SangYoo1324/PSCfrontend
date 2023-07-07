import {Component, Renderer2, ViewChild} from '@angular/core';
import {SectionTitleComponent} from "../common/section-title/section-title.component";

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent {

  //Title component 업데이트를 위해 title component 클래스 자체를 가져옴
  @ViewChild('sectionTitleComponent') sectionTitleComponent!: SectionTitleComponent;

  constructor(private renderer:Renderer2) {
  }

  mainSlideImages:any[] = [
    {imageSrc:'/assets/Testimonial1.jpg',
      imageAlt:'alt',
      title: 'Good Online Inquiry system',
      subTitle: 'All online inquiries I"ve sent through the website contact page so far responded back in 6 hours with quality answers',
      poster: 'Soren',
      buttonText: 'More reviews >'
    },
    {imageSrc:'/assets/Testimonial2.jpg',
      imageAlt:'alt',
      title: 'Customizable Gaming PC',
      subTitle: 'There are sufficient customizable options I can select to build my own PC setting',
      poster: 'Sam',
      buttonText: 'More reviews >'
    },
    {imageSrc:'/assets/Testimonial3.jpg',
      imageAlt:'alt',
      title: 'Reasonable Price',
      subTitle: 'Pricing is reasonable compare to the overall performance of the customized PC',
      poster: 'Milo',
      buttonText: 'More reviews >'
    },
  ]

  ngAfterViewInit(){
    this.sectionTitleComponent.subTitle.nativeElement.textContent = "Your opinion matters. Valuable customer Feedbacks!!";
    this.renderer.setStyle(this.sectionTitleComponent.subTitle.nativeElement, 'color','black');
    this.sectionTitleComponent.title.nativeElement.textContent = "Testimonials!";
  }

}
