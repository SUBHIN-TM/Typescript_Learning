let score:number | String =33 //UNION TYPES
score="33"

type User={
    name:string;
    id:number
}

type Admin ={
    userName:string;
    id:number;
}

let subhin : User | Admin={name:"subhin",id:5} //WE CAN USE OBJECT KEYS IN BOTH USER BASED OR ADMIN BASED
subhin={userName:'subhin',id:86}


const data :(number | string)[]=[1,2,"3"]

let pi:3.14
pi=3.14  //ONLY 3.14  VALUE IS ALLOWED AND NO OTHER VALUE CAN BE ASSIGNED


let threeUser :[string,number,boolean]   //3 element we have to keep the order same ITS CALLED TUPLE
threeUser=["1",2,true]