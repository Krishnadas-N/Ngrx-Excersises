import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Counter } from "./counter.model";


 const getcounterstate = createFeatureSelector<Counter>('counter');


 export const getcounter = createSelector(getcounterstate,(state)=>{

    return state.counter;
 })

 export const getchannel = createSelector(getcounterstate,(state)=>{
    return state.channel;
 })