import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipkartchildComponent } from './flipkartchild.component';

describe('FlipkartchildComponent', () => {
  let component: FlipkartchildComponent;
  let fixture: ComponentFixture<FlipkartchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipkartchildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlipkartchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
