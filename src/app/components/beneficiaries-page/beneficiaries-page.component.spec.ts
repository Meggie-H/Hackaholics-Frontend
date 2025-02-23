import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiariesPageComponent } from './beneficiaries-page.component';

describe('BeneficiariesPageComponent', () => {
  let component: BeneficiariesPageComponent;
  let fixture: ComponentFixture<BeneficiariesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeneficiariesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeneficiariesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
