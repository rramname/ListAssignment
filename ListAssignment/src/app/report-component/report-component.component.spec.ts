import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportComponentComponent } from './report-component.component';
import { SharedService } from '../shared-service.service';
import { HttpModule } from '@angular/http';

describe('ReportComponentComponent', () => {
  let component: ReportComponentComponent;
  let fixture: ComponentFixture<ReportComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpModule],  
      declarations: [ ReportComponentComponent ],
      providers:[SharedService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate report data',()=>{
    let mockData = [
      { "name": "a1", "category": "C1", "amount": 10 },
      { "name": "a1", "category": "C2", "amount": 30 },
      { "name": "a1", "category": "C3", "amount": 20 }
    ];
    component.rawData=mockData;
    component.customFormat();
    let expected1=new Array<any>();

    let expected={name: "a1", C1: 10, C2:30, C3: 20 }
    
    expect(component.customData[0]).toEqual(expected);

  });
});

