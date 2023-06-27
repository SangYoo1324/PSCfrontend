import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import {GoogleLoginProvider, SocialAuthService, SocialUser} from "@abacritt/angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private socialAuthService: SocialAuthService,
              private renderer: Renderer2) {

  }


  socialUser?:SocialUser;
  isLoggedin:boolean= false;



  ngOnInit(){
    // socialAuthService로 부터 로그인정보 가져옴
    this.socialAuthService.authState.subscribe((user)=>{
      this.socialUser= user;
      this.isLoggedin = (user !=null);
      console.log(this.socialUser);
    })
  }




  faceBookLogin(){
    // this.socialAuthService.signIn()
  }


}
