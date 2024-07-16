import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputdataComponent } from './inputdata.component';

describe('InputdataComponent', () => {
  let component: InputdataComponent;
  let fixture: ComponentFixture<InputdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputdataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
