import { createAction, props } from "@ngrx/store";

export const SHOW_ALERT = '[app event] show alert'

export const EMPTY_ALERT = '[app event] empty';

export const ShowAlert =createAction(SHOW_ALERT,props<{message:string}>() );

export const EmptyAction = createAction(EMPTY_ALERT)