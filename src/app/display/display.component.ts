import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SimpleValueState } from '../state/simple-value.state';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  
  value!: number;
  @Select(SimpleValueState.value) value$!:Observable<number>
  
  constructor() { 
    this.value$.subscribe((val:number) => {
        this.value = val;
    })
  }

  ngOnInit(): void {
  }

}
