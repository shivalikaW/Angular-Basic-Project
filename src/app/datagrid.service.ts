import { Injectable } from '@angular/core';
import { DataGrid } from './datagrid.model';


@Injectable({
  providedIn: 'root'
})
export class DatagridService {
  empData : DataGrid;
  lastEl : DataGrid;
  private gridData: DataGrid[] = [
    new DataGrid(
        1,
        "ABC",
        "260",
        '../assets/pic1.jpg',
        "qwe"
       ),
    new DataGrid(
        2,
        "DEF",
        "360",
        '../assets/pic2.jpg',
        "uio"
    )
  ];
  constructor() { }
  getGridData()
    {
        //Get grid datasource
        return this.gridData.slice();
       console.log('abc',  this.gridData.slice());

    }

    getEmp(index: number) {
        //Get array item at particular
        return this.gridData.find(x => x.srno === index);
    }

    updateEmp(index: number, newEmp: DataGrid) {
        //Get index of the element in the array
        let i = this.gridData.findIndex(x => x.srno === index);
        //Update the record at given index
        this.gridData[i] = newEmp;
        //Save Data in the Local Storage
        window.localStorage['EmpData'] = JSON.stringify(newEmp);
      }

      deleteEmp(index: number) {
        //Get index of the element in the array
      //  let i = this.gridData.findIndex(x => x.srno === index);
        //Remove the record at given index
      //  this.gridData.splice(i, 1);
        this.gridData = this.gridData.filter(x=> x.srno !== index);
        
      }

      addEmp(emp:DataGrid ){
        this.lastEl= this.gridData[this.gridData.length - 1]
        emp.srno = this.lastEl.srno + 1;
      //  console.log('abc', this.gridData.push(emp));
      //this.gridData[this.gridData.length - 1]
      this.gridData.push(emp);
      localStorage['GridData'] = JSON.stringify(this.gridData);
      console.log('gjh', this.gridData);
      }
}
