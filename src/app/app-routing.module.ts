import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //here is to load the complete module
  {path:"interview", loadChildren:()=>import("./interview/interview.module").then(m=>m.InterviewModule)},
  {path:"recruiting", loadChildren:()=>import("./recruiting/recruiting.module").then(m=>m.RecruitingModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //forRoot is eager loading.
  exports: [RouterModule]
})

export class AppRoutingModule { }
