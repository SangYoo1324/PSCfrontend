import {Component, ViewChild} from '@angular/core';
import {PageTitleComponent} from "../common/page-title/page-title.component";
import {SectionTitleComponent} from "../common/section-title/section-title.component";

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent {
  @ViewChild('pageTitle') pageTitle!:PageTitleComponent;
  @ViewChild('sectionTitle') sectionTitle!:SectionTitleComponent;
  ngAfterViewInit(){
    this.pageTitle.title1.nativeElement.textContent = 'Accessories';
    this.pageTitle.subTitle1.nativeElement.textContent = 'Complete Your PSC PC Experience with High-Quality Peripherals, Gear, and More.  ';

  }
}
