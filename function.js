function explicitZ(num) {
    return num + 2;
}
var result = explicitZ(5);
function toUpperZ(words) {
    return words.toUpperCase();
}
toUpperZ("hai");
function signUp(name, email, isPaid) {
    console.log(name, email, isPaid);
}
signUp("subhin", "sub@gmail.com", true);
function getBoolOrString(val) {
    if (val > 5) {
        return true;
    }
    else {
        return "ok";
    }
}
var noReturn = function (error) {
    console.log(error);
};
var handleError = function (error) {
    throw new Error(error);
};
// const heros=[1,2,3]
// const heros=["1","2","3"]
var heros = ["1", 2, "3"];
heros.map(function (data) {
    return data;
}); //NO NEED TO MENTION DATA TYPE OF data IT WILL AUTOMTICALLY PREDICT WHAT ARE THE CONTENTS IN ARRAY
