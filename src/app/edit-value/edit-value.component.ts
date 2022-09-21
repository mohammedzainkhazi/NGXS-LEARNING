import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { DecrementValue, IncrementValue, ResetValue, SetValue } from '../state/simple-value.actions';
import { SimpleValueState } from '../state/simple-value.state';

@Component({
  selector: 'app-edit-value',
  templateUrl: './edit-value.component.html',
  styleUrls: ['./edit-value.component.css']
})
export class EditValueComponent implements OnInit {

  private valueSubscription : Subscription;

  constructor(private store:Store) { 
      this.valueSubscription = this.value$.subscribe((value:number) => {
          this.value = value;
      })
      this.valueSubscription = this.name$.subscribe((name:String) => {
        this.name = name;
    })
  }
  @Select(SimpleValueState.value) value$!:Observable<number>
  @Select(SimpleValueState.Name) name$!:Observable<String>

  value!: number;
  name!:String;


  ngOndestroy():void {
    this.valueSubscription.unsubscribe();
  }
  increment(): void{
    this.store.dispatch(new IncrementValue())
  }
  decrement(): void{
    this.store.dispatch(new DecrementValue())
  }
  reset(): void{
    this.store.dispatch(new ResetValue())
  }
  set(value:number | null): void{
    if(value)
    this.store.dispatch(new SetValue(value))
    else
    this.store.dispatch(new ResetValue())
  }

  ngOnInit(): void {
  }

}
