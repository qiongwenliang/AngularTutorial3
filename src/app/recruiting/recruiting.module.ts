import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultantListComponent } from './consultant-list/consultant-list.component';
import { AddConsultantComponent } from './add-consultant/add-consultant.component';
import { RecruitingRoutingModule } from './recruiting-routing.module';



@NgModule({
  declarations: [
    ConsultantListComponent,
    AddConsultantComponent
  ],
  imports: [
    CommonModule,
    RecruitingRoutingModule
  ]
})


export class RecruitingModule { }
