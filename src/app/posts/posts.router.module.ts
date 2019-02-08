import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplaypostsComponent } from './displayposts/displayposts.component';

const PostsRoutes: Routes = [
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'login', component: DisplaypostsComponent },

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      PostsRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
})
export class PostsRouterModule { }