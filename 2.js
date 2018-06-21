
 var emailpattern =/^[a-zA-Z][a-zA-Z0-9_]*(\.[a-zA-Z0-9_]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.([a-zA-Z]{2,4})$/
 var emailpattern2 =/^[a-zA-Z][a-zA-Z0-9_]*(\.[a-zA-Z0-9_]+)*$/
 var passpattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
 var namepattern=/^[A-Za-z\s]+$/

function validateForm()
{

x=document.form1.name1;
 if(x.value=="")
		 {
		  x.value="";
		  document.getElementById('pointname').innerHTML="Please enter the name.";
		  x.focus();
		  return false;
		 }
 else if(!namepattern.test(x.value))
		 {
		  x.value="";
		  document.getElementById('pointname').innerHTML="Please enter a valid name.";
		  x.focus();
		  return false;
		 }
		  document.getElementById('pointname').innerHTML="";


 x=document.form1.email;
 if(x.value=="")
		 {
		  x.value="";
		  document.getElementById('pointemail').innerHTML="Please enter the email id.";
		  x.focus();
		  return false;
		 }
 else if(!emailpattern.test(x.value))
		 {
		  x.value="";
		  document.getElementById('pointemail').innerHTML="Please enter a valid email address.";
		  x.focus();
		  return false;
		 }
		 document.getElementById('pointemail').innerHTML="";
 

 x=document.form1.password;
 if(x.value=="")
		 {
		  x.value="";
		  document.getElementById('pointpass').innerHTML="Please enter password";
		  x.focus();
		  return false;
		 }
 else if(!passpattern.test(x.value))
		 {
		  x.value="";
		  document.getElementById('pointpass').innerHTML="Please enter a correct password.";
		  x.focus();
		  return false;
		 }



 document.getElementById('pointpass').innerHTML="";
 
 }

