import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMantenimientoComponent } from './item-mantenimiento.component';

describe('ItemMantenimientoComponent', () => {
  let component: ItemMantenimientoComponent;
  let fixture: ComponentFixture<ItemMantenimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemMantenimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
