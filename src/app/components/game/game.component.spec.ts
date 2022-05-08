import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Game } from './game.component';

describe('Game', () => {
  let component: Game;
  let fixture: ComponentFixture<Game>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Game ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Game);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
