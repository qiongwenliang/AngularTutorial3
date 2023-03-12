import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddConsultantComponent } from "./add-consultant/add-consultant.component";
import { ConsultantListComponent } from "./consultant-list/consultant-list.component";


const routes: Routes=[
    {path: "consultant-list", component: ConsultantListComponent},
    {path: "add-consultant", component: AddConsultantComponent} 
]

@NgModule({
    imports:[RouterModule.forChild(routes)], //for child is for lazy loading
    exports:[RouterModule]

})


export class RecruitingRoutingModule{}