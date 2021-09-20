import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasFooterComponent } from './listas-footer.component';

describe('ListasFooterComponent', () => {
  let component: ListasFooterComponent;
  let fixture: ComponentFixture<ListasFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListasFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListasFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
