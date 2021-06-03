function ticket_checker(speed,birthday_status){
    ticket=0
    if (speed<=60 & birthday_status===false){
        ticket=0
    }
    else if (speed>60 & birthday_status===false)
    {
        ticket=1
    }
    else{
        ticket=0
    }

    return ticket
}

console.log(ticket_checker(60,false))
console.log(ticket_checker(65,false))
console.log(ticket_checker(85,true))