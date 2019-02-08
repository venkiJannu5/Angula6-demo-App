import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplaypostsComponent } from './displayposts/displayposts.component';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [DisplaypostsComponent]
})
export class PostsModule { }
