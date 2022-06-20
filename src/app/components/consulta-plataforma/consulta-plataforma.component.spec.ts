import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaPlataformaComponent } from './consulta-plataforma.component';

describe('ConsultaPlataformaComponent', () => {
  let component: ConsultaPlataformaComponent;
  let fixture: ComponentFixture<ConsultaPlataformaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaPlataformaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaPlataformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
