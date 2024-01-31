import { Injectable } from "@angular/core";
import { EMPTY, Observable, catchError, exhaustMap, map, of, switchMap } from "rxjs";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ADD_POST, LOAD_POST, addpostFailure, addpostSucess, loadpostFailure, loadpostSucess } from "./posts.action";
import { MasterService } from "./post.sevice"; // Correct the import statement

import{Post} from './posts.model'
import { MatSnackBar } from "@angular/material/snack-bar";
import { EmptyAction, SHOW_ALERT } from "../ACTIONS_GLOBAL/App.action";

@Injectable({ 
    providedIn: 'root'
})
export class PostsEffects {

    constructor(private actions$: Actions, private service: MasterService,private snackbar:MatSnackBar) {}

    loadPosts$ = createEffect(() =>{
   
     return  this.actions$.pipe(
        ofType(LOAD_POST),
        
        exhaustMap(() =>
            this.service.Getallpost().pipe(
                map(data => {
                    console.log(data);
                    return loadpostSucess({ postlist: data });
                }),
                catchError(error => {
                    console.error(error);
                    return of(loadpostFailure({ error:error.message }));
                })
            )
        )
    )
        });

    _ADDPost = createEffect(()=>{
        
    return this.actions$.pipe(
        ofType(ADD_POST),

        exhaustMap((action:any) =>
          this.service.addPost(action.newPost).pipe(
            map((response: any) => addpostSucess({ newPost: action.post })),
            catchError((error) => {
              console.error('Error adding post:', error);
              return of(addpostFailure({ error: error.message }));
            })
          )
        )
      );
    })

   
        // _ShowAlert = createEffect(() =>
        // this.actions$.pipe(
        //     ofType(SHOW_ALERT),
        //     switchMap((action: any) =>
        //         this.ShowSnackBarAlert(action.message).afterDismissed().pipe(
        //             map(() => EmptyAction())
        //         )
        //     )
        // )
        // );


    ShowSnackBarAlert(message:string){
        this.snackbar.open(message,'OK',{
            duration:2000,
            verticalPosition:'top',
            panelClass:"red-snackbar",
            horizontalPosition:'end'
        }
        ).afterDismissed();}

}
