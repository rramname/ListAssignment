import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SorterComponentComponent } from './sorter-component.component';
import { SharedService } from '../shared-service.service';
import { HttpModule } from '@angular/http';

describe('SorterComponentComponent', () => {
  let component: SorterComponentComponent;
  let fixture: ComponentFixture<SorterComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SorterComponentComponent ],
      imports:[HttpModule],
      providers:[SharedService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SorterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
