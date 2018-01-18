import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillDemoComponent } from './skill-demo.component';

describe('SkillDemoComponent', () => {
  let component: SkillDemoComponent;
  let fixture: ComponentFixture<SkillDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
