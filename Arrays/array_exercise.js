var decision=prompt("Do you like to start the webstar app?(y/n)")
var nam_array=[]
if (decision==='y')
{
     while(true)
     {
         var op_select=prompt('Which operation you want to perform(add,remove,display,quit):')
         if (op_select==='quit')
         {
             break
         }
         else if (op_select==='add')
         {
             name_inp=prompt('Enter the name you want to add: ')
             nam_array.push(name_inp)
         }
         else if(op_select==='remove' | op_select==='delete')
         {
             name_inp=prompt("Which name you want to delete? ")
             nam_array.splice(nam_array.indexOf(name_inp),1)
         }
         else if(op_select=='display')
         {
             for(var element of nam_array){
                 console.log(element)
             }
         }
         else{
             alert('Invalid Operation')
         }
     }
}
else{
    alert("App didnot open")
}