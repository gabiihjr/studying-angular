import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPhotosAnimalsComponent } from './grid-photos-animals.component';

describe('GridPhotosAnimalsComponent', () => {
  let component: GridPhotosAnimalsComponent;
  let fixture: ComponentFixture<GridPhotosAnimalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridPhotosAnimalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridPhotosAnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
