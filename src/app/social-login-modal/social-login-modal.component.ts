import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SocialAuthService, SocialUser} from "@abacritt/angularx-social-login";
import {MemberService} from "../_service/member.service";
import {Router} from "@angular/router";
import {MemberAuthService} from "../_service/member-auth.service";

@Component({
  selector: 'app-social-login-modal',
  templateUrl: './social-login-modal.component.html',
  styleUrls: ['./social-login-modal.component.css']
})
export class SocialLoginModalComponent {



  constructor(private socialAuthService:SocialAuthService,
              private memberService:MemberService,
              private router:Router,
              private memberAuthService:MemberAuthService) {
  }

  @Input() openModal!:boolean;
  @Output() closeBtnEventEmitter:EventEmitter<boolean> = new EventEmitter<boolean>();
  closeBtnClicked(){
    this.openModal = false;
    this.closeBtnEventEmitter.emit(false);
  }


  isLoggedin:boolean = false;
  socialUser?:SocialUser;



  member: {nickname:string, password:string, email:string}
  = {nickname:'',
  password:'',
  email:''};


  ngOnInit(){
    // socialAuthService로 부터 로그인정보 가져옴
    this.socialAuthService.authState.subscribe((user)=>{
      this.socialUser= user;
      this.isLoggedin = (user !=null);

      this.member!.nickname! = user.firstName;
      this.member!.email = user.email;
      this.member!.password = 'SocialLogin';

      console.log("Sign-In Object:::::"+this.member);


    })
  }

  signIn(){
    //signup First
    console.log(this.member);

    this.memberService.signup(this.member).subscribe(
      ()=>{
        //signIn next
        this.memberService.signIn(this.member).subscribe((data:any)=>{

          // LocalStorage에 저장
          this.memberAuthService.setRoles(data.roles);
          this.memberAuthService.setToken(data.accessToken);
          this.memberAuthService.setNicknameEmail(data.nickname, data.email);

          alert("Successfully logged in ");
          this.router.navigate(['']);

        });
      },
      (err)=>{
        console.log(err);
        alert('Login fail... Social Login attempt fail');
      }
    )
  }



  faceBookLogin(){
    // this.socialAuthService.signIn()
  }

}
