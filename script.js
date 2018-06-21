function log() 
{
	var a=document.getElementById('usr').value;
	var b=document.getElementById('pass').value;
	var form=document.getElementById('form1');
	 var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	 var passw=  /^[A-Za-z]\w{7,15}$/;
	 var usrerr,passerr;

if (a == "" && b == ""){	
	alert ("Login unsuccessful");
	return false;
	 }

else if (reg.test(a) == false) 
    {
   
   return false;
        }

else if (passw.test(b)==false)
	{
	 return passerr;//To check a password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter

	}

else{
	form.action="http://demo6835492.mockable.io/sendEmail";
	form.submit();
	
		}

}







