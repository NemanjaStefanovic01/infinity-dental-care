import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalPaddingComponent } from './global-padding.component';

describe('GlobalPaddingComponent', () => {
  let component: GlobalPaddingComponent;
  let fixture: ComponentFixture<GlobalPaddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalPaddingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GlobalPaddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
