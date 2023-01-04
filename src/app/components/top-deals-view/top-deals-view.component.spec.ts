import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDealsViewComponent } from './top-deals-view.component';

describe('TopDealsViewComponent', () => {
  let component: TopDealsViewComponent;
  let fixture: ComponentFixture<TopDealsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopDealsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopDealsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
