import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersionComponent } from './persion.component';

describe('PersionComponent', () => {
  let component: PersionComponent;
  let fixture: ComponentFixture<PersionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
