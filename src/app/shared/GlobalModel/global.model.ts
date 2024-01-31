import { Blog } from "../blogstore/blog.model";
import { Post } from "../effectsStore/posts.model";
import { Counter } from "../store/counter.model";

export interface AppStateModel{
    counter:Counter,
    blog:Blog[],
    post:Post[],

}