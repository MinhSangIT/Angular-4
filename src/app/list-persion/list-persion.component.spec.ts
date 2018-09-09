import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPersionComponent } from './list-persion.component';

describe('ListPersionComponent', () => {
  let component: ListPersionComponent;
  let fixture: ComponentFixture<ListPersionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPersionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
