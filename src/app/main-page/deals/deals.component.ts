import {Component, Renderer2, ViewChild} from '@angular/core';
import {SectionTitleComponent} from "../../common/section-title/section-title.component";

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent {
  //Title component 업데이트를 위해 title component 클래스 자체를 가져옴
  @ViewChild('sectionTitleComponent') sectionTitleComponent!: SectionTitleComponent;

  constructor(private renderer:Renderer2) {
  }
  ngAfterViewInit(){
    this.sectionTitleComponent.subTitle.nativeElement.textContent = "Exclusive Feature of PSC!";
    this.renderer.setStyle(this.sectionTitleComponent.subTitle.nativeElement, 'color','black');
    this.sectionTitleComponent.title.nativeElement.textContent = "Check Our exclusive Deals!";
  }
}
