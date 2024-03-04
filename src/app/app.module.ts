import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeComponent } from './Component/change/change.component';
import { AfterInitComponent } from './Component/after-init/after-init.component';
import { ViewInitComponent } from './Component/view-init/view-init.component';
import { HeaderComponent } from './Component/header/header.component';
import { HomeComponent } from './Component/home/home.component';
import { TemplateFormComponent } from './Forms/template-form/template-form.component';
import { ReactiveFormComponent } from './Forms/reactive-form/reactive-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HostDirective } from './Directive/host.directive';
import { TodoComponent } from './Component/todo/todo.component';
import { SubjectComponent } from './Component/subject/subject.component';

@NgModule({
  declarations: [
    AppComponent,
    ChangeComponent,
    AfterInitComponent,
    ViewInitComponent,
    HeaderComponent,
    HomeComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    HostDirective,
    TodoComponent,
    SubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
