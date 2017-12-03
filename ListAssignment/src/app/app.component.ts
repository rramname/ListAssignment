import { Component } from '@angular/core';
import { SharedService } from './shared-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private appService:SharedService) {
    this.appService.getRawData().subscribe((data: any) => this.rawData = data.data)
  }

  


  title = 'Code Challenge';
  rawData: Array<any>;
  customData: Array<CustomDataModel> = [];
  customFormatColumns:Array<string>;
}
class CustomDataModel {
  name: string;
  C1: string;
  C2: string;
  C3: string;
}
