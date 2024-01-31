export interface Post {
    userId:number,
    id:number,
    title:string,
    body:string
   
}

export interface post{
    posts:Post[],
    errorMessage:string
}