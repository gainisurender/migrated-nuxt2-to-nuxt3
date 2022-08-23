export interface JokeResponseRoot {
   dates: any;
   page: number;


   data: any;
   results:JokeItem[];

}

export interface JokeItem {
   results:any;

  id:string;
  joke:string;

}


