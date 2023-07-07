import {Component, ViewChild} from '@angular/core';
import {SectionTitleComponent} from "../../common/section-title/section-title.component";

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent {
  //Title component 업데이트를 위해 title component 클래스 자체를 가져옴
  @ViewChild('sectionTitleComponent') sectionTitleComponent!: SectionTitleComponent;
  ngAfterViewInit(){
    this.sectionTitleComponent.subTitle.nativeElement.textContent = "Customize Your PC Online! We're here to support you.";
    this.sectionTitleComponent.title.nativeElement.textContent = "WHY BUY FROM Puget Sound Customs PC?";
  }

}
