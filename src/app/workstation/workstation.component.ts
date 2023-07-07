import {Component, ViewChild} from '@angular/core';
import {PageTitleComponent} from "../common/page-title/page-title.component";
import {SectionTitleComponent} from "../common/section-title/section-title.component";

@Component({
  selector: 'app-workstation',
  templateUrl: './workstation.component.html',
  styleUrls: ['./workstation.component.css']
})
export class WorkstationComponent {
  @ViewChild('pageTitle') pageTitle!:PageTitleComponent;
  @ViewChild('sectionTitle') sectionTitle!:SectionTitleComponent;
  ngAfterViewInit(){
    this.pageTitle.title1.nativeElement.textContent = 'Workstation PC';
    this.pageTitle.subTitle1.nativeElement.textContent = 'Optimize your work environment with cutting-edge PC parts!';

  }
}
