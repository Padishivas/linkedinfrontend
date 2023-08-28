import CryptoJS from "crypto-js";

export const verifyToken = (token, email,userId) => {
    try{
        const decryptedString = CryptoJS.AES.decrypt(token, "asdfghjkl").toString(CryptoJS.enc.Utf8);
        const data = JSON.parse(decryptedString);
        if(email == data.email && userId == data.userId){
            return true
        }
        return false;
    }catch(error){
        console.log(error);
        return false;
    }
}