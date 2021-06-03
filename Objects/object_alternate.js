var employee={
    name:"John Smith",
    job:'Programmer',
    Age:31
}

function len_calculator(){
    return employee.name.length
}
console.log(len_calculator())
function display(){
    for ( key in employee)
    {
        alert(key +' is '+employee[key])
    }
}
display()