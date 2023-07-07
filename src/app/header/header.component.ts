import {Component, ElementRef, ViewChild} from '@angular/core';
import {MemberAuthService} from "../_service/member-auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private memberAuthService:MemberAuthService,
              private router:Router) {
  }


  @ViewChild('navBarToggler') navBarToggler!: ElementRef;
  handleCustomEvent(){
    // collapsed인 경우에만 화면 아무데나 클릭 시 닫히도록
    // (app.component.ts 에서 HeaderComponent를 가져와서 이 메서드를 실행)
    if(this.navBarToggler.nativeElement && !this.navBarToggler.nativeElement.classList.contains('collapsed')){
      console.log("navBarToggler 클릭으로 navBar이 닫힙니다");
      this.navBarToggler.nativeElement.click();
    }
  }

  isLoggedIn(){
    return this.memberAuthService.isLoggedIn();
  }

  logout(){
    // localStorage에서 token과 role info를 지워줌
    this.memberAuthService.clear();
    this.router.navigate(['']);
  }

}
