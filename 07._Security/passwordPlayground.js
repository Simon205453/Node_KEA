import bcrypt from "bcrypt";

const passwordPlaintext = "kodeord"
const passwordPlaintext2 = "122333"
const hashedPassword = "$2b$12$FtKPWMOf07uP66J4cu6hHeR66.PjB0bQOEtZoTl9dRnFm8UxYUhbu";

const encryptedPassword = await bcrypt.hash(passwordPlaintext, 12);
console.log(encryptedPassword);

const isSame = await bcrypt.compare(passwordPlaintext, encryptedPassword);
console.log(isSame);