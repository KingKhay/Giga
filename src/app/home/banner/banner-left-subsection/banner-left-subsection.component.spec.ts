import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerLeftSubsectionComponent } from './banner-left-subsection.component';

describe('BannerLeftSubsectionComponent', () => {
  let component: BannerLeftSubsectionComponent;
  let fixture: ComponentFixture<BannerLeftSubsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerLeftSubsectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerLeftSubsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
