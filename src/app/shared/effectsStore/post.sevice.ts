import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "./posts.model";

@Injectable({
    providedIn: 'root'
})
export class MasterService {

    constructor(private http: HttpClient) {}

    Getallpost(): Observable<Post[]> {
        console.log("Servics Astcj")
        return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    }

    addPost(post: Post): Observable<any> {
        return this.http.post('https://jsonplaceholder.typicode.com/posts', post);
      }
      
}
