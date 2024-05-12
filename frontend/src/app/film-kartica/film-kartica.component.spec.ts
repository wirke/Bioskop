import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmKarticaComponent } from './film-kartica.component';

describe('FilmKarticaComponent', () => {
  let component: FilmKarticaComponent;
  let fixture: ComponentFixture<FilmKarticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmKarticaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilmKarticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
