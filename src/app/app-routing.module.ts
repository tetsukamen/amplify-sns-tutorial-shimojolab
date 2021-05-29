import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { TimelineComponent } from './timeline/timeline.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'timeline',
    pathMatch:'full'
  },
  {
    path:'timeline',
    component:TimelineComponent,
  },
  {
   path:'all',
   component:AllPostsComponent, 
  },
  {
    path:'profile/:username',
    component:ProfileComponent,
  },
  {
    path:'search',
    component:SearchComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
