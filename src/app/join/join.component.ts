import { Component } from '@angular/core';
import {MemberService} from "../_service/member.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent {

  // join form variables
  member:{nickname:string, password:string, email:string}= {
    nickname:'',
    password:'',
    email: ''
  };

  nicknameConfirm:string='';
  passwordConfirm:string= '';
  emailConfirm: string= '';



  constructor(private memberService:MemberService, private router:Router, private formBuilder:FormBuilder) {
  }

  onSubmit(value:{value:string}){
    console.log(this.member);


    this.memberService.signup(this.member).subscribe((res)=>{
      console.log(res);
      alert("Signup Success! please proceed to sign-in page");
      this.router.navigate(['/login']);
    });
    // test api for CORS config purpose
    // this.memberService.test(value).subscribe((res)=>{
    //   console.log(res);
    //   alert("Successfully uploaded");
    // })
  }



}
