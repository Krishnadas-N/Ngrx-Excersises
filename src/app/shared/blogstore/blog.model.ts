export interface Blog{
    id:number,
    title:string,
    description:string
}

export interface Blogs{
    bloglist:Blog[],
    errorMessage:string,
}