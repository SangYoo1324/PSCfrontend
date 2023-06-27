import { Component } from '@angular/core';
import {MemberService} from "../_service/member.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent {


  constructor(private memberService:MemberService, private router:Router) {
  }

  onSubmit(value:{value:string}){

    console.log(value);

    this.memberService.test(value).subscribe((res)=>{
      console.log(res);
      alert("Successfully uploaded");
    })
  }
}
