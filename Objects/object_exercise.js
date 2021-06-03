var employee={
    name:"John Smith",
    job:'Programmer',
    Age:31,
    size_finder: function(){
        return this.name.length
    }
}

console.log(employee.size_finder())
var employee1={
    name:"John Smith",
    job:'Programmer',
    Age:31,
    name_finder: function(){
        return this.name.split(" ")[1]
    }
}
console.log(employee1.name_finder())