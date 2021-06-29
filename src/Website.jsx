import React from "react";

let myname = "Akshata";
let time = new Date();
let curtime = time.getHours();
let greeeting = "";
function Website(){
    if(curtime<12 && curtime>=1){
        greeeting = "Good Morning";
      
    }
    else if (curtime >=12 && curtime < 17){
         greeeting = "Good Afternoon";
        
    }
    else if (curtime>=17 && curtime <21){
         greeeting = "Good evening";
        
    }
    else { greeeting = "Good night";}
    return(
        <>
        <div>
            <h1 className="heading">Hello {myname},{greeeting}</h1>
        </div>
        </>
    )
    
}

function clue(){
    console.log("testing");
}

export default Website;
export {clue}