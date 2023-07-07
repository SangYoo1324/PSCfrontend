import {Injectable} from "@angular/core";
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {MemberAuthService} from "../_service/member-auth.service";
import {Router} from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

  constructor(private memberAuthService: MemberAuthService, private router: Router) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // 토큰 없이 보낼 때
    if(req.headers.get("No-Auth") === 'True'){
      console.log("Interceptor:::: header No-Auth: true 확인, token 추가 x");
      // 이전 req를 clone 해서 그대로 httpRequest가 proceed 하게 함
      return next.handle(req.clone());
    }

    // 토큰과 함께 보낼 때
    // localStorage에서 저장된 Token을 꺼냄
    const token = this.memberAuthService.getToken();
    console.log("interceptor 동작합니다::: JWT Token INFO::::::"+token);

    let headers = new HttpHeaders();
    // headers = headers.set('Content-Type', 'application/json');
    // -- 이건 multipartFile일 수가 있어서 보류
    headers = headers.set('Authorization', `Bearer ${token}`);
    // 기존 헤더 복사 + 새로운 헤더 2개 headers 추가
    const authReq  = req.clone({headers});
    console.log("현재 등록된 헤더들 :::::::::::::::::::::");
    console.log(authReq.headers);


    return next.handle(authReq)
      .pipe(
        catchError(
          (err:HttpErrorResponse)=>{
            console.log(err.status);
            if(err.status === 401){
              // 401 에러면 로그인화면으로 이동 -- 401은 UnAuthorized: 로그인 자체가 안됨
              this.router.navigate(['/login']);
            }else if(err.status === 403){
              // 403 에러면 권한 필요 하고 login  화면으로 이동 -- 403은 Forbidden: 로그인은 됬는데 권한이 다름
              alert('Admin Authoriation required. Login with Admin account');
              this.router.navigate(['/login']);
            }
            return throwError("something went wrong");
          }
        )
      );
  }
}
