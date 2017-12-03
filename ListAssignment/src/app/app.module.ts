import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {SharedService} from "./shared-service.service"
import { SorterComponentComponent } from './sorter-component/sorter-component.component';
import { ReportComponentComponent } from './report-component/report-component.component';
import {routes} from "./app.routing"
@NgModule({
  declarations: [
    AppComponent,
    SorterComponentComponent,
    ReportComponentComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes) 
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
