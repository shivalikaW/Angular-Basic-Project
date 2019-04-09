import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { SigninComponent } from './signin/signin.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatagridComponent } from './datagrid/datagrid.component';
import { HeaderComponent } from './header/header.component';
import { DatagridService } from './datagrid.service';
import { DatagridAddComponent } from './datagrid/datagrid-add/datagrid-add.component';
import { DatagridEditComponent } from './datagrid/datagrid-edit/datagrid-edit/datagrid-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    DatagridComponent,
    HeaderComponent,
    DatagridAddComponent,
    DatagridEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    NgbModule.forRoot() 
  ],
  providers: [DatagridService],
  bootstrap: [AppComponent]
})
export class AppModule { }
