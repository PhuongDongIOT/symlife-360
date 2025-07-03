import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IframeToggleTButtonComponent } from './iframe-toggle-button.component';

describe('IframeToggleTButtonComponent', () => {
  let component: IframeToggleTButtonComponent;
  let fixture: ComponentFixture<IframeToggleTButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IframeToggleTButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IframeToggleTButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
