import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatagridService } from 'src/app/datagrid.service';
import { Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-datagrid-add',
  templateUrl: './datagrid-add.component.html',
  styleUrls: ['./datagrid-add.component.css']
})
export class DatagridAddComponent implements OnInit {
  dataGridForm: FormGroup;
  display = "none";
  constructor(private datagridService: DatagridService,
    private router: Router,
              private route: ActivatedRoute,) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    let srno = 0;
    let name = '';
    let code = '';
    let designation = '';
   
    this.dataGridForm = new FormGroup({
      'srno': new FormControl(srno),
      'name': new FormControl(name, Validators.required),
      'empCode': new FormControl(code, Validators.required),
      'designation': new FormControl(designation, Validators.required),
    });
  }

  onSave(){
    console.log(this.dataGridForm.value);
    this.datagridService.addEmp(this.dataGridForm.value);
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['grid']);
  }

  openModal(){
    //this.initForm();
    this.display="block"; 
 }

}
