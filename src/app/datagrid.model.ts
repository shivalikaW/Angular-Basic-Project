import { Variable } from '@angular/compiler/src/render3/r3_ast';

import { Url } from 'url';

export class DataGrid {
    public srno: number;
    public name: string;
    public empCode: string;
    public empImg:string;
    public designation: string;
    
    constructor(srno: number,name: string, empCode: string,empImg:string, designation: string) {
      this.srno = srno;
      this.name = name;
      this.empCode = empCode;
      this.empImg=empImg;
      this.designation = designation;
    }
  }