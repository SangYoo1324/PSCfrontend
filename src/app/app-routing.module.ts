import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./main-page/main-page.component";
import {LoginComponent} from "./login/login.component";
import {JoinComponent} from "./join/join.component";
import {ForbiddenComponent} from "./errorPage/forbidden/forbidden.component";
import {AdminPanelComponent} from "./admin-panel/admin-panel.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {AuthGuard} from "./_auth/auth.guard";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {GamingComponent} from "./gaming/gaming.component";
import {WorkstationComponent} from "./workstation/workstation.component";
import {AccessoriesComponent} from "./accessories/accessories.component";
import {CustomizeComponent} from "./common/customize/customize.component";

const routes: Routes = [
  {path: '',component: MainPageComponent ,},
  {path: 'login',component: LoginComponent,},
  {path: 'join',component: JoinComponent,},
  {path:'adminPanel',component: AdminPanelComponent, canActivate:[AuthGuard], data:{roles:['ROLE_ADMIN']}},
  {path:'userProfile',component: UserProfileComponent,canActivate:[AuthGuard], data:{roles:['ROLE_USER']}},
  {path: 'gaming',component: GamingComponent,},
  {path: 'gaming/customize/:category1/:category2/:id',component: CustomizeComponent,},
  {path: 'workstation',component: WorkstationComponent,},
  {path: 'accessories',component: AccessoriesComponent,},
  {path:'pageNotFound',component: PageNotFoundComponent},
  {path:'forbidden',component: ForbiddenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
