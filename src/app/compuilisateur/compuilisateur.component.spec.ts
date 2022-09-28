import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompuilisateurComponent } from './compuilisateur.component';

describe('CompuilisateurComponent', () => {
  let component: CompuilisateurComponent;
  let fixture: ComponentFixture<CompuilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompuilisateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompuilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
