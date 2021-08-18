import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaimentValiderFMComponent } from './paiment-valider-fm.component';

describe('PaimentValiderFMComponent', () => {
  let component: PaimentValiderFMComponent;
  let fixture: ComponentFixture<PaimentValiderFMComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PaimentValiderFMComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaimentValiderFMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
