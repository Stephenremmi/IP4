$("#sendButton").click(function () {
    var names = $("#names").val();
    var email = $("#email").val();
    var message = $("#textArea").val();
    if ((names === "") || (email === "") || (message === "")) {
        swal({
          title:"Alert!!",
          text: "Enter the empty fields",
          icon: "warning",
        });
    }
  else if((names.length <=6)){swal({
    title:"Alert!!",
    text: "Name should be more than 6 characters",
    icon: "warning",
  });
  }
  else if((message.length <=10)){swal({
    title:"Alert!!",
    text: "Message must be more than 10 characters",
    icon: "warning",
  });
  }
  else if((email.length <=14)){swal({
    title:"Alert!!",
    text: "Email address must be more than 14 characters",
    icon: "warning",
  });
  }
  else if((email.indexOf('@')<=0)){swal({
    title:"Alert!!",
    text: "Invalid Email address",
    icon: "warning",
  });
  }
  else if((email.indexOf('.')<=0)){swal({
    title:"Alert!!",
    text: "Invalid Email address",
    icon: "warning",
  });
  }
  else if((email.length >=25)){swal({
    title:"Alert!!",
    text: "Email address must be less than 25 characters",
    icon: "warning",
  });
  }
  
    else{
    swal("Form successfully submitted",  names + ", we have received your message. Thank you for reaching out to us!", "success");
    }
  
  });