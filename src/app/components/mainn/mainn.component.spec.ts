import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mainn } from './mainn.component';

describe('Mainn', () => {
  let component: Mainn;
  let fixture: ComponentFixture<Mainn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mainn ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mainn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
