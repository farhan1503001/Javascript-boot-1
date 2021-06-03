var name=prompt(" What's your name?")
name_array=name.split(" ")
firstname=name_array[0]
lastname=name_array[1]
var age=prompt("What's your age?")
var height=prompt("What is your height in cm?")
var petname=prompt("What is your pet's name? ")
console.log(age)
console.log(firstname[0]+" "+lastname[0])
console.log(height)
console.log(petname[petname.length-1])
var condition=false
if (firstname[0]!==lastname[0]){
    condition=true
    console.log(condition)
}
if (age<20 & age>30){
    condition=true
    console.log(condition)
}
if(height<170){
    condition=true
    console.log(condition)
}
if(petname[petname.length-1]!=='y'){
    condition=true
    console.log(condition)
}

if (condition==false)
{
    console.log(name+" is a spy!")
}
