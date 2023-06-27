import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { JoinComponent } from './join/join.component';
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
  GoogleSigninButtonModule,
  SocialAuthServiceConfig, SocialLoginModule
} from "@abacritt/angularx-social-login";
import {MemberService} from "./_service/member.service";
import {FormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    JoinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    GoogleSigninButtonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    // sosical Login
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '270190684241-lkvd3tcn12dfr93e1i0gobk9otidu443.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('clientId')
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    },
    MemberService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
