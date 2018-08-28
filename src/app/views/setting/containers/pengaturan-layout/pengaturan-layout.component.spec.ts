import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PengaturanLayoutComponent} from './pengaturan-layout.component';

describe('PengaturanLayoutComponent', () => {
  let component: PengaturanLayoutComponent;
  let fixture: ComponentFixture<PengaturanLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PengaturanLayoutComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PengaturanLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
