import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutComponent } from './page-about.component';

describe('PageAboutComponent', () => {
  let component: PageAboutComponent;
  let fixture: ComponentFixture<PageAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
