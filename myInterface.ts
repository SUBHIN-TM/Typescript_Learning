interface Users{
    name:string,
    id:number,
    startTrial:()=> string //FUNCTION RETURN TYPE SHOULD BE STRING
    getCoupon (couponName:string,value:number): number
}

const sample:Users={
    name:"owner",
    id:1,
    startTrial:()=> "returned a string",
    getCoupon:(couponName:'offer',value:10)=>{ return 1
}}