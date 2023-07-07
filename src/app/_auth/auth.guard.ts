import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {MemberAuthService} from "../_service/member-auth.service";
import {MemberService} from "../_service/member.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private memberAuthService:MemberAuthService,
              private router:Router,
              private memberService:MemberService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    if(this.memberAuthService.getToken() !== null){ // localStorage에서 token이 존재 한다면

      // route에서 data를 빼옴(해당 route에 지정된 role requirement)
      const role = route.data["roles"] as Array<string>;
      console.log("route에서 지정한 role requirement:"+ role);

      if(role){ // role array가 null이 아니라면
        const match = this.memberService.roleMatch(role);
        if(match){
          console.log("Role is Matching");
          return true;
        }else{
          this.router.navigate(['forbidden']);
          return false;
        }
      }
    }

    return true;
  }

}
