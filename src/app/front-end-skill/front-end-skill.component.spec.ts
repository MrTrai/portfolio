import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontEndSkillComponent } from './front-end-skill.component';

describe('FrontEndSkillComponent', () => {
  let component: FrontEndSkillComponent;
  let fixture: ComponentFixture<FrontEndSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontEndSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontEndSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
