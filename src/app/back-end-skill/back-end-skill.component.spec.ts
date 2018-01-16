import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackEndSkillComponent } from './back-end-skill.component';

describe('BackEndSkillComponent', () => {
  let component: BackEndSkillComponent;
  let fixture: ComponentFixture<BackEndSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackEndSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackEndSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
