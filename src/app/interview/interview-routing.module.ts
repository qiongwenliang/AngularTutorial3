import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddInterviewComponent } from "./add-interview/add-interview.component";
import { InterviewListComponent } from "./interview-list/interview-list.component";

const routes: Routes=[
    {path: "interview-list", component:InterviewListComponent},
    {path: "add-intervew", component: AddInterviewComponent} 
]

@NgModule({
imports:[RouterModule.forChild(routes)], //forChild is lazy loading.
exports:[RouterModule]
})


export class InterviewRoutingModule{}