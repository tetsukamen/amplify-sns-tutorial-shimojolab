import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
   path:'',
   component:AllPostsComponent, 
  },
  {
    path:'profile/:username',
    component:ProfileComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
