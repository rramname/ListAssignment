import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared-service.service';
import {SortDirection} from "../app-constants"
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-sorter-component',
  templateUrl: './sorter-component.component.html',
  styleUrls: ['./sorter-component.component.css']
})
export class SorterComponentComponent implements OnInit {

  constructor(private service:SharedService) { }

  ngOnInit() {
    
    this.service.getRawData()
    .subscribe(
      data => {this.rawData = data.data},
      err=>{this.error=true}
    )
  }

  sort(columnName: string) {
    try{
    this.rawData=this.service.sortData(this.rawData,columnName,this.sortDirection);
    if(this.sortDirection==SortDirection.Ascending)
      this.sortDirection=SortDirection.Descending;
      else
      this.sortDirection=SortDirection.Ascending;
    }
    catch(error){
      this.error=true;
    }
    }

  rawData:Array<any>=[];
  error:boolean=false;
  sortDirection:string=SortDirection.Ascending;
}
