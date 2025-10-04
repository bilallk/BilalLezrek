import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoEdit } from './to-do-edit';

describe('ToDoEdit', () => {
  let component: ToDoEdit;
  let fixture: ComponentFixture<ToDoEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDoEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
