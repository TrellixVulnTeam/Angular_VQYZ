import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Video } from './video.component';
import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
describe('Video', () => {
  let component: Video;
  let fixture: ComponentFixture<Video>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Video ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Video);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
