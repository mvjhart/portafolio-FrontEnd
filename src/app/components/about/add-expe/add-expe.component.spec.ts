import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExpeComponent } from './add-expe.component';

describe('AddExpeComponent', () => {
  let component: AddExpeComponent;
  let fixture: ComponentFixture<AddExpeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExpeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddExpeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
