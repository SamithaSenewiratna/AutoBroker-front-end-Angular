import { Routes } from '@angular/router';
import { AllAdsComponent } from './pages/user/all-ads/all-ads.component';
import { HomepageComponent } from './pages/user/homepage/homepage.component';
import { AboutUsComponent } from './pages/user/about-us/about-us.component';
import { MyaddsComponent } from './pages/user/myadds/myadds.component';
import { AutoPartsComponent } from './pages/user/auto-parts/auto-parts.component';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';
import { LoginComponent } from './pages/login/login.component';
import { CreateAdComponent } from './pages/user/create-ad/create-ad.component';
import { ChatBotComponent } from './pages/user/chat-bot/chat-bot.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { AdminReportsComponent } from './pages/admin/admin-reports/admin-reports.component';
import { AdminManageUsersComponent } from './pages/admin/admin-manage-users/admin-manage-users.component';
import { AdminManageaddsComponent } from './pages/admin/admin-manageadds/admin-manageadds.component';
import { AdminManageTopUpRequestComponent } from './pages/admin/admin-manage-top-up-request/admin-manage-top-up-request.component';
import { AdminProfileComponent } from './pages/admin/admin-profile/admin-profile.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

export const routes: Routes = [

    {

        path: "",
        component: HomepageComponent
        
        },


    {

        path: "AllAds",
        component: AllAdsComponent 

    },
    
    { path: 'createAd', component: CreateAdComponent  },
        
       
    

   
       
{
path:"homePage",
component: HomepageComponent
},
{
 path:"aboutUs",
    component: AboutUsComponent

},
{
path:"autoParts",
component: AutoPartsComponent

},
{
path:"myAds",           
component: MyaddsComponent

},
{
path:"chatBot",
component: ChatBotComponent

},
{
path:"userProfile",    
component: UserProfileComponent

},

{
path:"loginUser",
component: LoginComponent
},
{
    path:"signuUpUser",
    component: SignUpComponent
},
{

path :"admin-dashboard",
component: AdminDashboardComponent

},
{

    path :"admin-reports",
    component: AdminReportsComponent
    
},
{
   path: "admin-mangeUsers",
   component: AdminManageUsersComponent
   

},
{
    path: "admin-mangeAds",
    component: AdminManageaddsComponent
    
 
 },
 {
    path: "admin-mangeTopUpRequests",
    component: AdminManageTopUpRequestComponent
    
 
 },
 {
    path: "admin-profile",
    component: AdminProfileComponent
    
 
 }





];
  