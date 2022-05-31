var rsa=require("node-rsa");
var fs=require("fs");
var publicKey = new rsa();
var privateKey = new rsa();
var public = fs.readFileSync("./Keys/public.pem","utf-8");
var private = fs.readFileSync("./Keys/private.pem","utf-8");

publicKey.importKey(public);
privateKey.importKey(private);

function CreateLicense(mail){
    const salt="fdgfghfhhtgnmnxjqiernkmnkvmwwroppukok";
    const saltSecond="fdg1267htgnmnxjqiernkmnkvmwwroppukok";
    const encrypted = privateKey.encryptPrivate(salt+mail+saltSecond,"base64");
    return encrypted;
}

function CheckValidity(license){
    const decrypted = privateKey.decryptPublic(license, "utf8")
    if("fdgfghfhhtgnmnxjqiernkmnkvmwwroppukoka@examplecomfdg1267htgnmnxjqiernkmnkvmwwroppukok"== decrypted){
        return true;
    }
    else{
        return false;
    }
}
console.log(CheckValidity("3ibhyXw//r+jNhQyuMpiCO3Ii48YgaHDpmKuVAwglauxwyZU8SeS3aIpNkqaZWg3aV/FZBcnT7vIDwWU2q7IoOc1eMCiw7BL+sTfgnpBPrabSdoHrOccOEm+3S92zMyXNQF1oDJTNn3XF0BY0TnSkNcrIvU933cYtlfwN4Bg+BcqUCwH4TfuX7EQb4WdxXbIt+JJp0p7hyxGkU9hhcPyFmNKU8oLGYN/mMQZgViV3JrvHGzDCNplQ5I4ztEZhIkYsStWi697kVV0SlL1bvuRIVrBb94YusWfXf23N/WxpLaCl/unW0b8RFe5o3S3lwsF/bHQ+tKViSzlA8tGlXYvmQ=="));