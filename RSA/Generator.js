var rsa=require("node-rsa");
var fs=require("fs");
const NodeRSA = require("node-rsa");
function GeneratePair(){
    var key=new rsa().generateKeyPair();
    var publicKey = key.exportKey("public");
    var privateKey = key.exportKey("private");
    fs.openSync("./keys/public.pem","w")
    fs.writeFileSync("./keys/public.pem",publicKey,"utf-8")
    fs.openSync("./keys/private.pem","w")
    fs.writeFileSync("./keys/private.pem",privateKey,"utf-8")
}

GeneratePair();