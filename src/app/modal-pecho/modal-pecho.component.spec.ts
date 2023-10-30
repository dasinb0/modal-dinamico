import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPechoComponent } from './modal-pecho.component';

describe('ModalPechoComponent', () => {
  let component: ModalPechoComponent;
  let fixture: ComponentFixture<ModalPechoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPechoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPechoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
