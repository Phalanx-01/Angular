import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Transforms } from './transforms';

describe('Transforms', () => {
  let component: Transforms;
  let fixture: ComponentFixture<Transforms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Transforms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Transforms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
