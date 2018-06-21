 
 var emailpattern =/^[a-zA-Z][a-zA-Z0-9_]*(\.[a-zA-Z0-9_]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.([a-zA-Z]{2,4})$/
 var emailpattern2 =/^[a-zA-Z][a-zA-Z0-9_]*(\.[a-zA-Z0-9_]+)*$/
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
 else if(x.value.length>15)
		 {
		  x.value="";
		  document.getElementById('pointpass').innerHTML="Please enter a correct password.";
		  x.focus();
		  return false;
		 }
		 document.getElementById('pointpass').innerHTML="";


 x=document.getElementById('question');
 if(x.value.trim()==""||x.value==null)
		 {
		  x.value="";
		  document.getElementById('pointqstn').innerHTML="Please enter question";
		  x.focus();
		  return false;
		 }
 else if(x.value.length >20)
		 {
		  x.value="";
		  document.getElementById('pointqstn').innerHTML="More than limit";
		  x.focus();
		  return false;
		 }
document.getElementById('pointqstn').innerHTML="";
 
 


 }

