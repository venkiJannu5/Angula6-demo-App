import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsRouterModule } from './posts/posts.router.module';
//import { HomeComponent } from './home/home.component';     // Add your component here

//This is my case 
const appRoutes: Routes = [
   /* {
        path: '',
        component: HomeComponent
    },*/
    
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes),PostsRouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }