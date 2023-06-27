import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  Dev_env ="http://localhost:8080";

  API_PATH = this.Dev_env;
  requestHeader = new HttpHeaders(
    {"No-Auth": "True"}
  );
  constructor(private httpClient:HttpClient,) { }

public login(){}

  //회원가입
signup(signupData:any){
    return this.httpClient.post(this.API_PATH+"/api/signup",signupData, {headers:this.requestHeader});
}

//Test
  test(testData:any){
    return this.httpClient.post(this.API_PATH+"/api/test",testData, {headers:this.requestHeader});
  }
}
