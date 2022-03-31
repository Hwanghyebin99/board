import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BoardComponent } from './board.component';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardComponent ],
      imports: [    
        ReactiveFormsModule,
        FormsModule,
  
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('빈 form value를 가지고 있어야 한다.', () => {
    Object.keys(component.form.value).forEach((ele)=>{
      expect(component.form.value[ele]).toEqual("");
    })
  })

  describe('추가 버튼을 눌렀을 때', ()=>{

    it('모든 입력이 빈 값이 아니어야 한다.', ()=>{
      Object.keys(component.form.value).forEach((ele)=>{
        expect(component.form.controls[ele].hasError('required')).toBeTrue();
      })
    })

    it('입력이 데이터에 추가되어야 한다.', ()=>{
      component.form.patchValue({
        code: 'gk221',
        num: 4,
        cost: 5000
      })
      
      component.onClickAdd();

      expect(component.data.length).toEqual(1);
      expect(component.data).toContain(component.form.value)
    })
  })

  describe('테이블', ()=>{
    it('데이터가 표시되어야 한다', ()=>{

    })

    describe('삭제 버튼을 눌렀을 때', ()=>{
      it('해당 데이터가 삭제되어야 한다.',()=>
      )
    })
  })

it('완료 버튼을 누르면 성공 페이지로 넘어가야 한다', () => {
  
})
});
