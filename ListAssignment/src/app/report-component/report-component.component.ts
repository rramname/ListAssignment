import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared-service.service';

@Component({
  selector: 'app-report-component',
  templateUrl: './report-component.component.html',
  styleUrls: ['./report-component.component.css']
})
export class ReportComponentComponent implements OnInit {

  constructor(private appService:SharedService) { }

  ngOnInit() {
    this.appService.getRawData().subscribe(
      (data: any) => {
        this.rawData = data.data;
        this.customFormat();      
      },
      err=>{
        this.error=true;
      }
    )
  }
  customFormatWithFixedColumns() {
    //this can be used when there are only 3 categories
    this.customData=new Array<CustomDataModel>();
    this.rawData.map((rd) => {
      if(this.customData.filter((ex)=>{return ex.name==rd.name}).length==0){
      let custom: CustomDataModel = new CustomDataModel();
      custom.name = rd.name;
      let filtered: Array<any> = this.rawData.filter((rd2) => {
        return rd2.name == rd.name
      });
      let C1Vals = filtered.filter((vals) => {
        return vals.category == "C1"
      })[0];
      let C2Vals = filtered.filter((vals) => {
        return vals.category == "C2"
      })[0];
      let C3Vals = filtered.filter((vals) => {
        return vals.category == "C3"
      })[0];
      custom.C1 = C1Vals ? C1Vals.amount : "-";
      custom.C2 = C2Vals  ? C2Vals.amount : "-";
      custom.C3 = C3Vals? C3Vals.amount : "-";
      this.customData.push(custom);
    }
    })
    this.customData.sort((leftVal:CustomDataModel,rightVal:CustomDataModel)=>{
        if(leftVal.name <rightVal.name) return -1;
        if(leftVal.name>rightVal.name) return 1;
        return 0;
    })

  }


  customFormat() {
    this.customData=[];
    let tempCustomData=new Array<CustomDataModel>();
    this.customFormatColumns=new Array<string>();
    this.customFormatColumns.push("name");
    this.rawData.map((rd) => {
      if(tempCustomData.filter((ex)=>{return ex.name==rd.name}).length==0){
      let custom: CustomDataModel = new CustomDataModel();
      custom.name = rd.name;
      let filtered: Array<any> = this.rawData.filter((rd2) => {
        return rd2.name == rd.name
      });

      let cats:Array<string>=filtered.map((cat)=>{return cat.category});
      
      cats.forEach((category)=>{
          let catValue=filtered.filter((vals)=>{
            return vals.category == category;
          })[0];
          if(this.customFormatColumns.indexOf(category)==-1){
            this.customFormatColumns.push(category);
          }
          custom[category]=catValue?catValue.amount:"-";
      })
      tempCustomData.push(custom);

    }
    })
    this.customData=tempCustomData.sort((leftVal:any,rightVal:any)=>{
        if(leftVal.name <rightVal.name) return -1;
        if(leftVal.name>rightVal.name) return 1;
        return 0;
    })

  }

  customData:Array<any>=[];
  customFormatColumns:Array<string>;
  rawData:Array<any>=[];
  error:boolean=false;
}

class CustomDataModel {
  name: string;
  C1: string;
  C2: string;
  C3: string;
}