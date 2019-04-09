import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';

import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { DatagridService } from 'src/app/datagrid.service';
@Component({
  selector: 'app-datagrid-edit',
  templateUrl: './datagrid-edit.component.html',
  styleUrls: ['./datagrid-edit.component.css']
})
export class DatagridEditComponent implements OnInit {
  dataGridForm: FormGroup;
  id: number;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private datagridService: DatagridService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          console.log("Init");
          console.log(+params['id']);
          this.id = +params['id'];
          this.initForm();
        
        }
      );
  }

  onCancel() {
    this.router.navigate(['grid']);
  }

  private initForm() {
    let srno = 0;
    let name = '';
    let code = '';
    let designation = '';
    const emp = this.datagridService.getEmp(this.id);
   
          srno = emp.srno;
          name = emp.name;
          code = emp.empCode;
          designation = emp.designation;

    this.dataGridForm = new FormGroup({
      'srno': new FormControl(srno),
      'name': new FormControl(name, Validators.required),
      'empCode': new FormControl(code, Validators.required),
      'designation': new FormControl(designation, Validators.required),
    });
  }

  onSubmit(){
    console.log(this.dataGridForm.value);
    this.datagridService.updateEmp(this.id,this.dataGridForm.value);
    this.onCancel();
  }
}
