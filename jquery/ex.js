var listitems=$('li')
console.log(listitems[2])

listitems.eq(0).css('color','red')
var char={
    'color':'red',
    'border': '4px solid black',
    'background':'green'
}

var head=$('h1')
head.css(char)
listitems.eq(-1).css('color','blue')
listitems.eq(1).css('color','purple')
//Changing the header
$('h1').html('Text Changed')