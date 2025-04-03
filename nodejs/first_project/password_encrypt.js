let bcrypt = require('bcryptjs');

let my_pswd = "mysecretpassword";
let salt = 14;
let encrypted_pswd = bcrypt.hashSync(my_pswd, salt);


// ---------------login logic---------------
let check = bcrypt.compareSync(my_pswd , encrypted_pswd);

if (check === true) {
    console.log("Password has been matched")
}else{
    console.log("Password has been not matched")
}

console.log(`Original password is ${my_pswd} \n Encrypted password is ${encrypted_pswd}`);
