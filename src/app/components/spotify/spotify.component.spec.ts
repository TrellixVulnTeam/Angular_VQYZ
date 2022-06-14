import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Spotify } from './spotify.component';

describe('Spotify', () => {
  let component: Spotify;
  let fixture: ComponentFixture<Spotify>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Spotify ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Spotify);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
