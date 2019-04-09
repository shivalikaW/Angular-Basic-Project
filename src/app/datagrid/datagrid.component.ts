import { Component, OnInit } from '@angular/core';
import {DatagridService} from '../datagrid.service';
@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.css']
})
export class DatagridComponent implements OnInit {
  empData = [];
  display = "none";
  username = '';
 
  constructor(private datagridService : DatagridService) { }

  ngOnInit() {
    let data = localStorage.getItem('GridData');
    if(data){
      this.empData = JSON.parse(data);
     // this.empData[2].empImg="../assets/";
      //this.empData = JSON.parse(data);
    } else {
      this.empData = this.datagridService.getGridData();
      console.log('main rowdata', this.empData);
    }
  }
  
  deleteEmp(id){
    this.datagridService.deleteEmp(id);
     this.empData = this.datagridService.getGridData();
}

openModal(){
 //this.initForm();
 this.display="block"; 
}

onCloseHandled(){
this.display='none'; 
}
}
