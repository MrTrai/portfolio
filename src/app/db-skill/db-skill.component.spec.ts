import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbSkillComponent } from './db-skill.component';

describe('DbSkillComponent', () => {
  let component: DbSkillComponent;
  let fixture: ComponentFixture<DbSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
