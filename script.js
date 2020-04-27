
var count = 0;
function validate (){
	event.preventDefault();

	let message = document.getElementById("message"); 
        if (document.getElementById('remember').checked) {
        	console.log("check true");
  
            let pass = checkPassword(document.getElementById('password').value);
            let mail = checkEmail(document.getElementById('email').value);
            makeChanges (pass,mail);
        } else {
        	console.log("check false");

            let pass = checkPassword(document.getElementById('password').value);
            let mail = checkEmail(document.getElementById('email').value);
            if(pass && mail)
            {
            	console.log("true chnages in guest ");
        			document.getElementById("message").innerHTML ="Guest logged in with good cridentials";
        			document.getElementById("message").className = document.getElementById("message").className+"text-success";
            
        		}
        		else{
        			console.log("false chnages in guest ");
        			document.getElementById("message").innerHTML ="Guest logged in with bad cridentials!";
        			document.getElementById("message").className = document.getElementById("message").className+"text-danger"; 
        			document.getElementById("passHelp").style.display='block';

        		}
        }
    
}

function checkPassword(pass){
	console.log("in pass check");
		console.log(/^[a-zA-Z]\w{3,14}$/.test(pass));
	return /^[a-zA-Z]\w{3,14}$/.test(pass);

}
function checkEmail(email) 
{

	console.log("in email check");
		console.log(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email));
		return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

function makeChanges (pass,mail)
{
console.log(`  in user make changes    ${pass} ${mail}`);
            if( pass && mail )
            {		
            	console.log("true chnages in User ");
            			count++;
            		
            			if(count >1)
            			{
            					document.getElementById("count").innerHTML = `No. of logins ${count}`;
            					document.getElementById("count").style.display = `block`;	
            			}else{
            					document.getElementById("count").innerHTML = `No. of login ${count}`;
            					document.getElementById("count").style.display = `block`;	
            			}
            			
            			document.getElementById("message").innerHTML ="User logged in with good cridentials";
            			document.getElementById("message").className = document.getElementById("message").className+"text-success";
            }else{
            	console.log("false chnages in User ");

            			document.getElementById("message").innerHTML ="User password or email is not valid ! ";
            			document.getElementById("message").className = document.getElementById("message").className+"text-danger";

            }
}