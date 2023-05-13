import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSkillsComponent } from './lista-skills.component';

describe('ListaSkillsComponent', () => {
  let component: ListaSkillsComponent;
  let fixture: ComponentFixture<ListaSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
