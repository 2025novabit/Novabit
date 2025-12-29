/* ===== DEMO USER CORE ===== */

function getDemoUser(){
  return JSON.parse(localStorage.getItem("demoUser"));
}

function saveDemoUser(user){
  localStorage.setItem("demoUser", JSON.stringify(user));
}

function requireLogin(){
  if(!localStorage.getItem("demoUser")){
    location.href = "login.html";
  }
}

/* ===== PROFILE ===== */
function loadProfile(){
  const user = getDemoUser();
  if(!user) return;

  document.getElementById("p_firstname").innerText = user.firstName;
  document.getElementById("p_lastname").innerText  = user.lastName;
  document.getElementById("p_email").innerText     = user.email;
  document.getElementById("p_country").innerText   = user.country;
  document.getElementById("p_city").innerText      = user.city;
  document.getElementById("p_address").innerText   = user.address;
}

function logout(){
  localStorage.removeItem("demoUser");
  location.href = "login.html";
}
