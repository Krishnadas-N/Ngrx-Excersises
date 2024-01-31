import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareblogidService {

  private selectedIdSource  = new BehaviorSubject<any>(null)
  selectedId$ = this.selectedIdSource.asObservable()
  constructor() { }

  setSelectedId(id:any){
    this.selectedIdSource.next(id)
  }
  
}
