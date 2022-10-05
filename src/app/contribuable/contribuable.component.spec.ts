import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContribuableComponent } from './contribuable.component';

describe('ContribuableComponent', () => {
  let component: ContribuableComponent;
  let fixture: ComponentFixture<ContribuableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContribuableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContribuableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
