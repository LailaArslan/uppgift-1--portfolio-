



   
  

function formValidation() {
    
    // namn
    let message = [];
    let name = document.getElementById("name");
    
    let confirmedName = false;

    if (name.value == "" || name.value == null)
      message.push("Please input your name");
    else confirmedName = true;

    document.getElementById("demo0").innerHTML = message;

    
    
 

    // phone nummer 
    let message1 = [];
    let phon = document.getElementById("phon");

    let confirmedPhon = false;
  
    if (phon.value.length < 10)
      message1.push("Your phone needs to atleast be 10 characters long");
    else if (phon.value.length > 15)
      message1.push("Your phone can max be 15 characters long");
    else confirmedPhon = true;

    document.getElementById("demo1").innerHTML = message1;



    // mail
    let message2 = [];

    let mail = document.getElementById("mail");

    let confirmedMail = false;
  
    if (mail.value == "") 
     message2.push("pless inter your mail");
    else confirmedMail = true;
    document.getElementById("demo2").innerHTML = message2;



    // Text erea
    let message0 = [];
    let textArea = document.getElementById("message");
    
    let confirmedMessage = false;

    if (textArea.value == "")
    message0.push("pless inter a message");
    else confirmedMessage = true;

    document.getElementById("demo3").innerHTML = message0;



    if (confirmedName == true && confirmedPhon == true && confirmedMail == true && confirmedMessage == true)
    document.getElementById("demo").innerHTML = "Message has been sent!";
    document.getElementById("demo").style.color = "#ffffff";
    document.getElementById("demo").style.padding = "20px 20px 20px 0px";
    document.getElementById("demo").style.position = "relative";

    


    function myFunction() {
        alert("Message has been sent!");
      }
  
  }


