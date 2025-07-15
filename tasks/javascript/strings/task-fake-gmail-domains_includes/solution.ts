function isFakeGmail(email) {
  return email.includes('@gmail') && !email.endsWith('@gmail.com');
}

function isAllowedEmail(email) {
  return (email.endsWith('@gmail.com') || email.startsWith('dev.')) && !isFakeGmail(email);
}

const fakes = emails.filter(isFakeGmail);

const allowed = emails.filter(isAllowedEmail);