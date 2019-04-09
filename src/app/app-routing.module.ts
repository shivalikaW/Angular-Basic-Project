import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { DatagridComponent } from './datagrid/datagrid.component';
import { DatagridAddComponent } from './datagrid/datagrid-add/datagrid-add.component';
import { DatagridEditComponent } from './datagrid/datagrid-edit/datagrid-edit/datagrid-edit.component';

const routes: Routes = [
{path:'',component:SigninComponent},
{path:'grid',component:DatagridComponent},
{
  path: 'edit/:id',
  component: DatagridEditComponent
},
{
  path: 'add',
  component: DatagridAddComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
