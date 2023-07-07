import {Component, Renderer2, ViewChild} from '@angular/core';
import {PageTitleComponent} from "../common/page-title/page-title.component";
import {SectionTitleComponent} from "../common/section-title/section-title.component";
import {ItemService} from "../_service/item.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-gaming',
  templateUrl: './gaming.component.html',
  styleUrls: ['./gaming.component.css']
})
export class GamingComponent {

  constructor(private renderer:Renderer2,private itemService:ItemService) {
  }

  @ViewChild('pageTitle') pageTitle!:PageTitleComponent;
  @ViewChild('lapTopSectionTitle') lapTopSectionTitle!:SectionTitleComponent;
  @ViewChild('desktopSectionTitle') desktopSectionTitle!:SectionTitleComponent;
  ngAfterViewInit(){
    this.pageTitle.title1.nativeElement.textContent = 'Gaming PC';
    this.pageTitle.subTitle1.nativeElement.textContent = 'Customize your own memory, the best experience! ';

    this.lapTopSectionTitle.subTitle.nativeElement.textContent = "SHOP & CUSTOMIZE OUR HIGH-PERFORMANCE DESKTOP GAMING PCS.";
    this.renderer.setStyle(this.lapTopSectionTitle.subTitle.nativeElement, 'color','white');
    this.lapTopSectionTitle.title.nativeElement.textContent = "Gaming Laptops";

    this.desktopSectionTitle.subTitle.nativeElement.textContent = "SHOP & CUSTOMIZE OUR HIGH-PERFORMANCE DESKTOP GAMING PCS.";
    this.renderer.setStyle(this.lapTopSectionTitle.subTitle.nativeElement, 'color','white');
    this.desktopSectionTitle.title.nativeElement.textContent = "Gaming Desktop";
  }

  gamingLapTops!:Observable<any>;


  gamingDesktops!:Observable<any>;

  ngOnInit(){
   this.gamingLapTops =  this.itemService.getGamingLaptopList();
   this.gamingDesktops = this.itemService.getGamingDesktopList();
  }

}
