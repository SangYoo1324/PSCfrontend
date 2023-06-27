import {Component, HostListener, ViewChild} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {HeaderComponent} from "./header/header.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pugetSoundCustoms';

  constructor(private router: Router) {
  }

  ngOnInit(){
    // router 이벤트일 때마다 맨 위로 스크롤
    this.router.events.subscribe((event)=>{
      if(event instanceof NavigationEnd){
        window.scrollTo(0,0);
      }
    })
  }


  // Document 전체 클릭 이벤트 발생 시 headerComponent에 이벤트 전달 해서 navBar이 닫히는 버튼 클릭되게 하기
  @ViewChild('headerComponent') headerComponent!: HeaderComponent;
  @HostListener('document:click',['$event'])
  onDocumentClick($event: MouseEvent){
    this.headerComponent.handleCustomEvent();
  }


}
