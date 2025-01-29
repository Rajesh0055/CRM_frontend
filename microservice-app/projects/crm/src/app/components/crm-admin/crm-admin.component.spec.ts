import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRMAdminComponent } from './crm-admin.component';

describe('CRMAdminComponent', () => {
  let component: CRMAdminComponent;
  let fixture: ComponentFixture<CRMAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CRMAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CRMAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
