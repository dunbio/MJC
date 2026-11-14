

let Phone_more_btn=1;
let laptop_or_phone=1;
let More = document.getElementById("more_btn");
let details = document.getElementById("linkcontainer");
let body = document.getElementById("homecontainer");

let links = document.getElementById("linkcontainer");

let Delete =document.getElementById("delete");

More.onclick = function() 
{   Phone_more_btn= !Phone_more_btn;

    if(Phone_more_btn==0)
    {details.style.display= "flex";
     More.style.display= "none";
     Delete.style.display= "flex";
     }
     else 
    {
       details.style.display= "none";
       details.style.display= "none";
        More.style.display= "flex";
        Delete.style.display= "none";
       
    } 
}
Delete.onclick = function() 
{   


    details.style.display= "none";
    Delete.style.display = "none";
    Phone_more_btn = !Phone_more_btn;
    More.style.display = "flex";
}


body.onclick = function() 
{  
    

    if(Phone_more_btn==0)
    {
    details.style.display= "none";
    Delete.style.display = "none";
    Phone_more_btn = !Phone_more_btn;
    More.style.display = "flex";
    }
 
       
}

