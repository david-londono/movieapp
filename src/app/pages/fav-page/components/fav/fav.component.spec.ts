import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavComponent } from './fav.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('FavComponent', () => {
  let component: FavComponent;
  let fixture: ComponentFixture<FavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavComponent);
    component = fixture.componentInstance;
    component.movieList = [];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
