import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewListComponent } from './interview-list/interview-list.component';
import { AddInterviewComponent } from './add-interview/add-interview.component';
import { InterviewRoutingModule } from './interview-routing.module';



@NgModule({
  declarations: [
    InterviewListComponent,
    AddInterviewComponent
  ],
  imports: [
    CommonModule,
    InterviewRoutingModule
  ]
})


export class InterviewModule { }
