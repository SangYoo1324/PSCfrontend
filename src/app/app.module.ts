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
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import { SocialLoginModalComponent } from './social-login-modal/social-login-modal.component';
import {MemberAuthService} from "./_service/member-auth.service";
import {AuthGuard} from "./_auth/auth.guard";
import {AuthInterceptor} from "./_auth/auth-interceptor";
import { ForbiddenComponent } from './errorPage/forbidden/forbidden.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {CarouselModule} from "./common/carousel/carousel.module";
import { SectionTitleComponent } from './common/section-title/section-title.component';
import { PageTitleComponent } from './common/page-title/page-title.component';
import { IntroComponent } from './main-page/intro/intro.component';
import { DealsComponent } from './main-page/deals/deals.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { WorkstationComponent } from './workstation/workstation.component';
import { GamingComponent } from './gaming/gaming.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ItemListComponent } from './common/item-list/item-list.component';
import {ItemListModule} from "./common/item-list/item-list.module";
import { CustomizeComponent } from './common/customize/customize.component';
import { AccordianComponent } from './common/accordian/accordian.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    JoinComponent,
    SocialLoginModalComponent,
    ForbiddenComponent,
    PageNotFoundComponent,
    SectionTitleComponent,
    PageTitleComponent,
    IntroComponent,
    DealsComponent,
    TestimonialComponent,
    WorkstationComponent,
    GamingComponent,
    AccessoriesComponent,
    CustomizeComponent,
    AccordianComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    GoogleSigninButtonModule,
    FormsModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule,
    ItemListModule,
  ],
  providers: [
    AuthGuard,
    // interceptor config
    {// set Every http Request gets intercepted by AuthInterceptor and interceptor will provide
      // Auth token
      multi: true,
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor
    },
    // sosical Login
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '822814304752-798t4us6dbodv7d0gve0g3maat7nlb6g.apps.googleusercontent.com'
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
    MemberAuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
