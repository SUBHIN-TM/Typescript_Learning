function explicitZ(num:number) {
   return num + 2
}
let result :number= explicitZ(5)



function toUpperZ(words:string) :string{ //IT WILL MAKE SURE RETURN TYPE IS ALSO A STRING OTHER WISE WE CAN RETURN ANYTHING
    return words.toUpperCase()
}
toUpperZ("hai")



function signUp(name: string,email: string,isPaid: boolean): void{
 console.log(name,email,isPaid);
 
}
signUp("subhin","sub@gmail.com",true)



function getBoolOrString(val:number):boolean | string{
    if(val >5){
        return true
    }else{
       return "ok"
    }
}




let noReturn=(error:string) :void=>{ //IF NO RETURN SHOULD MENTION VOID
    console.log(error)
}


let handleError=(error:string) : never=>{ //IF NO RETURN error handle can use never which means never return 
  throw new Error(error);
  
}



// const heros=[1,2,3]
// const heros=["1","2","3"]
const heros=["1",2,"3"]
heros.map((data)=>  {   
    return data
}) //NO NEED TO MENTION DATA TYPE OF data IT WILL AUTOMTICALLY PREDICT WHAT ARE THE CONTENTS IN ARRAY




export{}  //just to avoid unwanted error sign