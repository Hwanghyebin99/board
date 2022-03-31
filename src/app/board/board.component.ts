import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  form=this.fb.group({
    code: ['', Validators.required],
    num: ['', Validators.required],
    cost: ['', Validators.required]
  })

  data: any[] = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.form.controls['code'].errors)
  }

  onClickAdd() {
    this.data.push(this.form.value);
  }

}
