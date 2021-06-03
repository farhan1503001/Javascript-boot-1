var action_button=document.getElementById('actionb')
var tables=document.querySelectorAll('td')
player_1='X'
player_2='O'
player=''
function restart(){
    
    console.log("Finding "+tables[1])
    for(i=0;i<tables.length;i++)
    {
        tables[i].textContent=''
    }
}
action_button.addEventListener('click',restart)
function play(){
    if(this.textContent==='')
    {
        this.textContent='X'
    }
    else if(this.textContent==='X')
    {
        this.textContent='O'
    }
    else{
        this.textContent=''
    }
}
for(i=0;i<tables.length;i++)
{
    tables[i].addEventListener('click',play)
}

