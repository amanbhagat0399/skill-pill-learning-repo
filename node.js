 function message_submit(){
    var email = document.getElementById("mail").value;
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var phone = document.getElementById("phone").value;

    if(fname ==""){
      alert("Please enter your Name , Nme can't be blank");

    }
    else if ((email.indexOf('@') == -1) ||  (email.indexOf(".") == -1 )) 
    {
        alert("Invalid Email");
    }

    else if (String(phone).length< 10) 
    {
      alert("Phone number should only contain digits and it must contain 10 digits ");
    }

    else 
    {
    alert (" Your name is:-"+ fname+" "+lname+" & email is:-"+email+" Your Contact Number is:-"+phone+"......Your message is sent Successfully...... !!!");
    }
  }

function lettersonly(input)
{
var regex = /[^a-z]/gi;
input.value = input.value.replace(regex,"");

}

function numbersonly(input)
  {
  var regex = /[^0-9]/g ;
  input.value = input.value.replace(regex,"");
  }