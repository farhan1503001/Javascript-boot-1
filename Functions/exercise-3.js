function brickman(small,big,target){
    result=(big*5)+(small*1)
    if ((result-target)>=0){
        return true
    }
    else{
        return false
    }
}

console.log(brickman(3,1,8))
console.log(brickman(3,1,9))
console.log(brickman(3,2,10))