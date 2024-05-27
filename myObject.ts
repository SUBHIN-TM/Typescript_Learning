function createUser({name}: {name: string}): {output: string} {
    console.log(name);
    return {output: "returned"};
 }
 createUser({name: 'subhin'});
 
 

 //! NEXT

 type User={
    readonly _id:string //READ ONLY MAKE IT UNABLE TO EDIT ,NO EDIT CAN DO ON ID ITS READ ONLY VARIABLE
    name:string
    email:string
    isActive:Boolean
    details?:string   //IT WILL MARKED AS OPTIONAL NO NEED TO MENTION IN ALL TYPE INSTANCE
 }

 let myUser : User ={
    _id:'12345',
    name:'subhin',
    email:'subhin@gmail.com',
    isActive:true
 }

myUser.email="changed@gmailco.com"  // AFTER myUser. IT WILL SHOW THE ALL OBJECT VARAIBLE NAMES INSIDE THAT
// myUser._id="DD"   // i cant change it becz it read only it shows errror




//!NEXT

type cardName = {
    cardname:string
}

type cardNumber = {
cardnumber:number
}

type cardDetails= cardName & cardNumber & {  //I CAN COMBINE ALL TYPES USING &    NOT GOOD APROACH
    cardcvv:number
}













export{}