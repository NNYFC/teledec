import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageutilisateurComponent } from './pageutilisateur.component';

describe('PageutilisateurComponent', () => {
  let component: PageutilisateurComponent;
  let fixture: ComponentFixture<PageutilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageutilisateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageutilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
