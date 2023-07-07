import {Component, ElementRef, Input, Renderer2, ViewChild} from '@angular/core';
import {GoogleLoginProvider, SocialAuthService, SocialUser} from "@abacritt/angularx-social-login";
import {NgForm} from "@angular/forms";
import {MemberService} from "../_service/member.service";
import {MemberAuthService} from "../_service/member-auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @ViewChild('loginForm') loginForm!: NgForm;

  constructor(private socialAuthService: SocialAuthService,
              private renderer: Renderer2,
              private memberService:MemberService,
              private memberAuthService:MemberAuthService,
              private router:Router) {

  }

  nickname: string= '';
  password: string= '';


   openModal:boolean= false;
  closeBtnEventReciever(data:boolean){
    this.openModal = data;
  }
  openModalComponent(){
    this.openModal = true;
  }

  onSubmit(value:any){
  console.log(value);
  this.memberService.signIn(value).subscribe((data:any)=>{
    alert(`LogIn Success...  Welcome ${data.nickname}! proceed to main page`);
    console.log("JWT Token"+data.accessToken);
    console.log("Roles::::::"+data.roles);

    // LocalStorage에 저장
    this.memberAuthService.setRoles(data.roles);
    this.memberAuthService.setToken(data.accessToken);
    this.memberAuthService.setNicknameEmail(data.nickname, data.email);
    // Role에 따라 navigation 달라짐  -- 일단 adminPanel, userPanel이 구현 안되었기 때문에 스킵
    // const role = data.roles[0];
    // if(role === 'ROLE_ADMIN'){
    //   this.router.navigate(['/admin']);
    // }else{
    //   this.router.navigate(['/user']);
    // }
    this.router.navigate(['']);
  },(err)=>{
    alert('Login fail... plz check your ID & PW');
  })
  }

  protected readonly onsubmit = onsubmit;

}
