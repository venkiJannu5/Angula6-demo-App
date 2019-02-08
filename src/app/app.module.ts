import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GlobalServiceService } from './global-service.service';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';
//import { PostsModule } from './posts/posts.module';
import { RouterModule, Routes } from '@angular/router';
import { DisplaypostsComponent } from './posts/displayposts/displayposts.component';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DisplaypostsComponent
  ],
  imports: [
  	RouterModule,
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    AppRoutingModule
    //PostsModule
  ],
   entryComponents:[
 	DisplaypostsComponent
  ],
  providers: [GlobalServiceService,
  HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
