import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { ChangeComponent } from './Component/change/change.component';
import { AfterInitComponent } from './Component/after-init/after-init.component';
import { ViewInitComponent } from './Component/view-init/view-init.component';
import { TemplateFormComponent } from './Forms/template-form/template-form.component';
import { ReactiveFormComponent } from './Forms/reactive-form/reactive-form.component';
import { TodoComponent } from './Component/todo/todo.component';
import { SubjectComponent } from './Component/subject/subject.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'onchange',component:ChangeComponent},
  {path:'After',component:AfterInitComponent},
  {path:'View',component:ViewInitComponent},
  {path:'temp',component:TemplateFormComponent},
  {path:'reactive',component:ReactiveFormComponent},
  {path:'todo',component:TodoComponent},
  {path:'subject',component:SubjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
