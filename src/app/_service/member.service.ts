import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MemberAuthService} from "./member-auth.service";

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  Dev_env ="http://localhost:8080";
  Prod_env = "https://pcassemblystore.herokuapp.com"

  API_PATH = this.Prod_env;
  requestHeader = new HttpHeaders(
    {"No-Auth": "True"}
  );
  constructor(private httpClient:HttpClient,private memberAuthService: MemberAuthService) { }

  //회원가입   no-auth
signup(signupData:any){
    return this.httpClient.post(this.API_PATH+"/api/signup",signupData, {headers:this.requestHeader});
}
// 로그인  no-auth
signIn(signInData:any){
    return this.httpClient.post(this.API_PATH+"/api/login",signInData, {headers:this.requestHeader});

}

// member 권한 테스트용 api
public forMember(){
    console.log("forMember 메서드"+localStorage.getItem("jwtToken"));
    // LocalStorage에서 Token을 꺼내옴
    const token = this.memberAuthService.getToken();

    // header에 Token을 넣어 보냄(Interceptor에서 해주게 세팅해둠)
    // const headers = {"Authorization": `Bearer ${token}`};
    // const authHeader = new HttpHeaders(headers);
    return this.httpClient.get(this.API_PATH+"/api/user/test");
  }

  //admin 권한 테스트용 api
  public forAdmin(){
    return this.httpClient.get(this.API_PATH+"/api/admin/test");
  }


  roleMatch(allowedRoles:string[]):boolean{
    console.log(allowedRoles);
    let isMatch = false;
    // localStorage에 저장된 role 정보
    const memberRoles:any = this.memberAuthService.getRoles();  // [{"authority":"ROLE_ADMIN"}] array형태로 나옴
    if(memberRoles !=null){
      allowedRoles.forEach(e=>{
        if(memberRoles[0].authority === e){
          console.log(memberRoles[0].authority);
          // role이 match 되면 true 반환, 한개라도 role이 mismatch 면 false반환
          isMatch = true;
        }
      });
    }
    return isMatch;
  }


//Test       header => '"Authorization": "no-auth"
  test(testData:any){
    return this.httpClient.post(this.API_PATH+"/api/test",testData, {headers:this.requestHeader});
  }
}
