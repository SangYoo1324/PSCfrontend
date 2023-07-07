import { Component } from '@angular/core';
import {MemberAuthService} from "../_service/member-auth.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  constructor(private memberAuthService:MemberAuthService) {
  }

  nickname:string='';
  email:string='';

  ngOnInit(){
    // Login 시 LocalStorage에 저장된 userInfo 를 빼옴
      this.nickname = this.memberAuthService.getNicknameEmail().nickname;
    this.email = this.memberAuthService.getNicknameEmail().email;
  }
}
