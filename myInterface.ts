interface Users{
    name:string,
    id:number,
    startTrial:()=> string //FUNCTION RETURN TYPE SHOULD BE STRING
    getCoupon (couponName:string,value:number): number  //ANOTHER MODEL OF INITIALIZING A FUNCTION
}

interface Users{
    email:string
}



const sample:Users={
    email:'shjyb@gmial..com',
    name:"owner",
    id:1,
    startTrial:()=> "returned a string",
    getCoupon:(couponName:'offer',value:10)=>{ return 1
}}


interface Admins extends Users{  //ADMIN INTERFACE INCLUDED USERS DATA TYPES
role:string
}//EXTENDAS USED TO HAVE AN ACCESS OF THAT INSTANCE DATA TYPE

const admins:Admins={
    email:'shjyb@gmial..com',
    name:"owner",
    id:1,
    startTrial:()=> "returned a string",
    getCoupon:(couponName:'offer',value:10)=>{ return 1
},
role:'admin'
}