import { createAction, props } from "@ngrx/store";


export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');
export const customValue = createAction('customvalue',props<{value:number}>())

export const changechannel= createAction('channelname',props<{name:string}>())