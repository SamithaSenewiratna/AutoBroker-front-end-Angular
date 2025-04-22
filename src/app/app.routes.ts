import { Routes } from '@angular/router';
import { AllAdsComponent } from './pages/user/all-ads/all-ads.component';
import { HomepageComponent } from './pages/user/homepage/homepage.component';
import { AboutUsComponent } from './pages/user/about-us/about-us.component';
import { AdminManageCustomesComponent } from './pages/admin/admin-manage-customes/admin-manage-customes.component';
import { MyaddsComponent } from './pages/user/myadds/myadds.component';

import { AutoPartsComponent } from './pages/user/auto-parts/auto-parts.component';

import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';
import { LoginComponent } from './pages/login/login.component';
import { CreateAdComponent } from './pages/user/create-ad/create-ad.component';
import { ChatBotComponent } from './pages/user/chat-bot/chat-bot.component';

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
}




];
  