import { TestBed, async, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SharedService } from './shared-service.service';
import { SortDirection } from "./app-constants"
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { routes } from "./app.routing"
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { SorterComponentComponent } from './sorter-component/sorter-component.component';
import { ReportComponentComponent } from './report-component/report-component.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SorterComponentComponent,
        ReportComponentComponent
      ],
      imports: [RouterTestingModule, FormsModule, HttpModule],
      providers: [SharedService],

    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Code Challenge'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Code Challenge');
  }));
  it('should get the data', async(inject([SharedService], (service: SharedService) => {
    service.getRawData().subscribe((data) => {
      expect(data.length).toBeGreaterThan(0);
    })
  })))
  it('should sort the data by name column in ascending order', async(inject([SharedService], (service: SharedService) => {
    let mockData = [
      { "name": "a1", "category": "C1", "amount": 10 },
      { "name": "a3", "category": "C1", "amount": 30 },
      { "name": "a2", "category": "C1", "amount": 20 }
    ];
    let sorted = service.sortData(mockData, "name", SortDirection.Ascending);
    let expected = [{
      "name": "a1",
      "category": "C1",
      "amount": 10
    },
    {
      "name": "a2",
      "category": "C1",
      "amount": 20
    },
    {
      "name": "a3",
      "category": "C1",
      "amount": 30
    },
    ];
    expect(sorted).toEqual(expected);

  })))
  it('should sort the data by name column in descending order', async(inject([SharedService], (service: SharedService) => {
    let mockData = [
      { "name": "a1", "category": "C1", "amount": 10 },
      { "name": "a3", "category": "C1", "amount": 30 },
      { "name": "a2", "category": "C1", "amount": 20 }
    ];
    let sorted = service.sortData(mockData, "name", SortDirection.Descending);
    let expected = [
      { "name": "a3", "category": "C1", "amount": 30 },
      { "name": "a2", "category": "C1", "amount": 20 },
      { "name": "a1", "category": "C1", "amount": 10 }
    ];
    expect(sorted).toEqual(expected);

  })))

}); 
