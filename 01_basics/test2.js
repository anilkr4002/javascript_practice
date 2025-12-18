//types:- Number symbol boolean bigInt string null undefined(primitive)

//non-primitive Object array function

let num=12
let boo=true
let st="swing"
let n=null
let un=undefined
let bignum=1244523287349723904n //bigint
let sx=Symbol('123')
let sy=Symbol('123')

console.log(typeof num)
console.log(typeof boo)
console.log(typeof st)
console.log(typeof n)
console.log(typeof un)
console.log(typeof bignum)
console.log(typeof sx)
console.log(typeof sy)
console.log(sx==sy)

arr=[1,2,2,"anil"]
console.log(arr);
let obj={
    abs:123,
    abx:124,
}
const myfunc=function(){
    console.log("where is my train")
}
console.log(obj)
console.log(typeof myfunc)
console.log(typeof obj)

//+++++++++++++++++++++++++++++++++++++++++++++++++

//stack (primitive) and heap(non-primitive)
let numb=2
let numb2=numb
numb2=90
console.log(numb);
console.log(numb2);

let myobj={
    name:"anil",
    email:"anil@iitbhilai"

}
console.log(myobj)
myobj2=myobj
myobj.email="neil@google.com"

console.log(myobj);
console.log(myobj2);

arrr=[1, 3 , "anil","sahilina"]
arrr2=arrr
arrr2[1]="akim"
console.log(arrr)
console.log(arrr2)