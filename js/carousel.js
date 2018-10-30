let i = 0 ;
document.getElementById('item1').style.display = "" ;
document.getElementById('item2').style.display="none";
document.getElementById('item3').style.display="none"
setInterval(function(){
    if (i === 1){
        document.getElementById('item1').style.display="none" ;
        document.getElementById('item2').style.display="";
        document.getElementById('item3').style.display="none"; 
        console.log("A")};
    if (i===2){
        document.getElementById('item1').style.display="none" ;
        document.getElementById('item2').style.display="none";
        document.getElementById('item3').style.display=""; 
        console.log ("B");}
    if (i===3){
        document.getElementById('item1').style.display="" ;
        document.getElementById('item2').style.display="none";
        document.getElementById('item3').style.display="none"; 
        console.log ("C");}
    if (i===3){i=0}
    i++;
 }, 5000);