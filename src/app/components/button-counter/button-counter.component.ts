import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Counter } from '../../shared/store/counter.model';
import { Observable, Subscription } from 'rxjs';
import { getchannel, getcounter } from '../../shared/store/counter.selector';

@Component({
  selector: 'app-button-counter',
  templateUrl: './button-counter.component.html',
  styleUrl: './button-counter.component.css'
})
export class ButtonCounterComponent  implements OnInit,OnDestroy{
  counterNum!:number;
  channelName!:string;
  couter$!:Observable<Counter>;

  ngrxSubscription!:Subscription;

  constructor(private store:Store<{counter:Counter}>){}
  ngOnInit(): void {
     this.ngrxSubscription= this.store.select(getcounter).subscribe((data)=>{
        this.counterNum=data
      })

      this.store.select(getchannel).subscribe((data)=>{
        this.channelName=data
      })
      this.couter$=this.store.select('counter')
  }
  ngOnDestroy(): void {
      if(this.ngrxSubscription){
        this.ngrxSubscription.unsubscribe()
      }
  }
}
