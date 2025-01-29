import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRMSidebarComponent } from './crmsidebar.component';

describe('CRMSidebarComponent', () => {
  let component: CRMSidebarComponent;
  let fixture: ComponentFixture<CRMSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CRMSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CRMSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
