

   var x = 1;




function active0(){
    x=0;
    document.querySelector('.cover').style.background = 'rgb(15, 116, 143)';
       
 document.querySelector('.text').style.background='white';
 document.querySelector('.text').children[0].style.color='darkcyan';
 document.querySelector('.text').children[1].style.color='rgb(15 116 143)';
      
document.querySelector('.boulles').children[1].style.background = 'black';
document.querySelector('.boulles').children[2].style.background = 'black';
document.querySelector('.boulles').children[x].style.background=
 'rgb(15 116 143)';
}

function active1(){
    x=1;
    document.querySelector('.cover').style.background = 'black';
       
 document.querySelector('.text').style.background='rgb(188, 188, 160)';
 document.querySelector('.text').children[0].style.color='white';
 document.querySelector('.text').children[1].style.color='black';
      
document.querySelector('.boulles').children[0].style.background = 'black';
document.querySelector('.boulles').children[2].style.background = 'black';
document.querySelector('.boulles').children[x].style.background=
 'rgb(15 116 143)';
}


function active2(){
     x=2

 document.querySelector('.cover').style.background = 'rgb(188, 188, 160)';
      
document.querySelector('.text').style.background='black';
document.querySelector('.text').children[0].style.color='white';
document.querySelector('.text').children[1].style.color='rgb(188, 188, 160)';
       
  
 document.querySelector('.boulles').children[0].style.background = 'black';
 document.querySelector('.boulles').children[1].style.background = 'black';       
 document.querySelector('.boulles').children[x].style.background ='rgb(15 116 143)';
}





function left()
{
     
    
var cover =  document.querySelector('.cover'); 
var icon = document.querySelector('.boulles');  
    var landing=document.querySelector('.text');

     x--;

  if(x==0)  
  {    
      
 cover.style.background = 'rgb(15, 116, 143)';
       
  landing.style.background='white';
  landing.children[0].style.color='darkcyan';
  landing.children[1].style.color='rgb(15 116 143)';
      
  icon.children[1].style.background = 'black';
  icon.children[2].style.background = 'black';
  icon.children[x].style.background ='rgb(15 116 143)';
  
  } 
    
    
   if(x<0)
   {
        x=2;
       
     cover.style.background = 'rgb(188, 188, 160)';
      
    landing.style.background='black';
    landing.children[0].style.color='white';
    landing.children[1].style.color='rgb(188, 188, 160)';
       
  
  icon.children[0].style.background = 'black';
  icon.children[1].style.background = 'black';       
  icon.children[x].style.background ='rgb(15 116 143)';
  
  }
          
 

  if(x==1)
    {
cover.style.background = 'black';
      
  landing.style.background='rgb(188, 188, 160)';
  landing.children[0].style.color='white';
  landing.children[1].style.color='black';
        
  icon.children[0].style.background = 'black';
  icon.children[2].style.background = 'black';
  icon.children[x].style.background ='rgb(15 116 143)';
     
}
    
    
}



function right()
{  
    
    
    
var cover = document.querySelector('.cover'); 
var icon = document.querySelector('.boulles'); 
var landing=document.querySelector('.text');
  
     x++;

  if(x==2)  
  {     
    

        
  cover.style.background = 'rgb(188, 188, 160)';
      
    landing.style.background='black';
    landing.children[0].style.color='white';
    landing.children[1].style.color='rgb(188, 188, 160)';

      
  icon.children[0].style.background = 'black';
  icon.children[1].style.background = 'black';
  icon.children[x].style.background ='rgb(15 116 143)';
      
   } 
    
   if(x>2)
   {
        x=0;
       
 cover.style.background = 'rgb(15, 116, 143)';
       
  landing.style.background='white';
  landing.children[0].style.color='darkcyan';
  landing.children[1].style.color='rgb(15 116 143)';
       
  icon.children[1].style.background = 'black';
  icon.children[2].style.background = 'black';
  icon.children[x].style.background ='rgb(15 116 143)';
  
  }
          
 

  if(x==1)
  {
      
  cover.style.background = 'black';
      
  landing.style.background='rgb(188, 188, 160)';
  landing.children[0].style.color='white';
  landing.children[1].style.color='black';

  icon.children[0].style.background = 'black';
  icon.children[2].style.background = 'black';
  icon.children[x].style.background ='rgb(15 116 143)';
     

  }

}

 function toggle()
{
    var i;
    var xul=document.querySelector('ul');
    var xli=document.querySelector('li');
    var xa=document.querySelector('a');
    

    
      xul.classList.toggle("xul");
      xa.classList.toggle("xa");  

    for(i=0;i<5;i++)
    {
      xul.children[i].classList.toggle("xli");

    }
 
}


function search()
{
    var box2=document.querySelector('.search_box2');
//var w = document.documentElement.clientWidth ;
//    
//  if( w <=500)  
//      {
    
if(box2.style.display=='none')

   { 
   box2.style.display='flex'; 
   document.querySelector('.search_text2').focus();}
    
else{ box2.style.display='none';}
 
//    }


}


 
   function search2()
   {
       var text2=document.querySelector('.search_text2').value;
//       
       window.location.href="#"+text2;
      
//       var URL = window.location.href;
//       alert (URL);
      
   } 
