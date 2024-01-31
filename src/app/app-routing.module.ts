import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainCOunterComponent } from './components/main-counter/main-counter.component';
import { BlogComponent } from './components/blog/blog.component';
import { PostMainComponent } from './Posts/postComponent/post-main/post-main.component';

const routes: Routes = [
  {
    path:'ngrxCoutner',
    component:MainCOunterComponent
  },{
    path:'ngrxblog',
    component:BlogComponent
  },
  {
    path:'Posts',
    component:PostMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
