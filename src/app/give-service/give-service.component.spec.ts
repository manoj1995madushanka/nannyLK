import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveServiceComponent } from './give-service.component';

describe('GiveServiceComponent', () => {
  let component: GiveServiceComponent;
  let fixture: ComponentFixture<GiveServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiveServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
