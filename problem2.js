function sendNotification(email) {
  if (email.includes("@") === false) {
    return "invalid email";
  }

  const parts = email.split("@");
  const username = parts[0];
  const domainName = parts[1];

  const notification =
    username + " " + "sent you an email from" + " " + domainName;
  return notification;
}

console.log(sendNotification("sadia8icloud.com"));
console.log(sendNotification("fahim234.hotmail.com"));
console.log(sendNotification("zihad@gmail.com"));
console.log(sendNotification("farhan34@yahoo.com"));
console.log(sendNotification("nadim.naem5@outlook.com"));
