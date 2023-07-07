import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemberAuthService {

  constructor() { }


  public setNicknameEmail(nickname:string, email:string){
      localStorage.setItem("nickname",JSON.stringify(nickname));
    localStorage.setItem("email",JSON.stringify(email));
  }

  public getNicknameEmail(){
   return { nickname: JSON.parse(localStorage.getItem("nickname")!),
            email: JSON.parse(localStorage.getItem("email")!)
   };
  }

  public setRoles(roles:any[]){
    console.log("setRoles:::"+roles);
    // JSON 형태(String)으로 저장
    // LocalStorage에는 key: value 로 저장하는데 value는 js Object가 들어올 수 없다. 무조건 str
    localStorage.setItem("roles",JSON.stringify(roles));
  }

  public getRoles():[]{
    // JSON 형태에서 js Object 형태로 꺼내옴
    return JSON.parse(localStorage.getItem("roles")!);
  }

  public setToken(jwtToken:string){
    console.log("jwtToken이 localStorage에 저장되었습니다");
    localStorage.setItem("jwtToken", jwtToken);
  }

  public getToken(){
    return localStorage.getItem("jwtToken");
  }

  public clear(){
    localStorage.clear();
  }

  public isLoggedIn(){
    // Token값과 Role이 지정되어있다면 loggedIn 임
    return this.getRoles() && this.getToken();
  }

}
