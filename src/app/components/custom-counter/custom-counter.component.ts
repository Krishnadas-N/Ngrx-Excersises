import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { changechannel, customValue } from '../../shared/store/counter.action';
import { Counter } from '../../shared/store/counter.model';
import { AppStateModel } from '../../shared/GlobalModel/global.model';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrl: './custom-counter.component.css'
})
export class CustomCounterComponent {
  count = 0;
  channelname:string=''
  constructor(private store:Store<AppStateModel>){}

  onSubmit(){
    this.store.dispatch(customValue({value:+this.count}))
  }
  onEnter(){
    this.store.dispatch(changechannel({name:this.channelname}))
  }

}
