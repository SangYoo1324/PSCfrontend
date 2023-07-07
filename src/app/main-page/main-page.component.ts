import { Component } from '@angular/core';
import {MemberService} from "../_service/member.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  mainSlideImages:any[] = [
    {imageSrc:'/assets/background-revised.jpg',
      imageAlt:'alt',
      title: 'Build Different',
      subTitle: 'Customize your own Gaming PC with various options',
      buttonText: 'Shop For Workstation PC >'
    },
    {imageSrc:'/assets/background4-revised.jpg',
      imageAlt:'alt',
      title: 'Optimize Gaming Env',
      subTitle: 'Go for newest release RTX 4070 for your gaming PC',
      buttonText: 'Upgrade Graphic card >'
    },
    {imageSrc:'/assets/background5-revised.jpg',
      imageAlt:'alt',
      title: 'Build Different',
      subTitle: 'Customize your own Gaming PC with various options',
      buttonText: 'Shop For Workstation PC >'
    },
    {imageSrc:'/assets/background6-revised.jpg',
      imageAlt:'alt',
      title: 'Your Own Customized Workstation PC',
      subTitle: 'Customize your own wrokstation PC with various options',
      buttonText: 'Shop For Workstation PC >'
    }
  ]

  constructor(private memberService:MemberService) {
  }

  adminTest(){
    this.memberService.forAdmin().subscribe((data:any)=>{
      console.log("adminTest result data:::::::::"+data.value);
    })
  }
}
