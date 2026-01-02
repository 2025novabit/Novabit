// security.js

// --- 2FA ---
function is2FAEnabled(){
  return localStorage.getItem('demo2fa_enabled') === 'true';
}

function send2FACode(){
  const code = Math.floor(100000 + Math.random()*900000).toString();
  localStorage.setItem('demo2fa_code', code);
  const email = localStorage.getItem('demo2fa_email') || 'demo@example.com';
  alert("Demo code sent to email (" + email + "): " + code);
}

function verify2FACode(input){
  return input === localStorage.getItem('demo2fa_code');
}

// --- KYC ---
function getKYC(){
  return JSON.parse(localStorage.getItem('kycData') || '{}');
}

function isKYCApproved(){
  return getKYC().status === "Approved";
}

// --- Withdraw lock ---
function checkWithdrawBtn(btnId){
  const btn = document.getElementById(btnId);
  if(!isKYCApproved() || !is2FAEnabled()){
    btn.disabled = true;
    btn.innerText = "Withdraw Locked (Complete KYC & 2FA)";
  }
}

// --- Demo withdraw code ---
function sendWithdrawCode(){
  const code = Math.floor(100000 + Math.random()*900000).toString();
  localStorage.setItem('demo2fa_withdraw_code', code);
  alert("Demo Withdraw Code: " + code);
}

function verifyWithdrawCode(input){
  return input === localStorage.getItem('demo2fa_withdraw_code');
}
