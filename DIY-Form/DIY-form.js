// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAP9USLSnQG1NmBzeNGpaE3MKCjVFFLhHI",
    authDomain: "techazsure-32254.firebaseapp.com",
    databaseURL: "https://techazsure-32254-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "techazsure-32254",
    storageBucket: "techazsure-32254.appspot.com",
    messagingSenderId: "682117837492",
    appId: "1:682117837492:web:8950819e91e1e707f81de1"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var currentDate = new Date();
  var dateTimeKey = currentDate.toDateString();
  var print3dFormDB = firebase.database().ref("DIY-Projects-Form/"+ dateTimeKey);
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
    var contact = getElementVal("contact");
    var project = getElementVal("project");
    var deadline = getElementVal("deadline");
    var file_link = getElementVal("file_link");
  
    saveMessages(name, emailid, msgContent, contact, project,deadline,file_link);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent, contact, project,deadline,file_link) => {
    var newContactForm = print3dFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
      contact: contact,
      project:project,
      deadline:deadline,
      file_link:file_link,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  