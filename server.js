var fs=require('fs');
var http=require('http');
var server=http.createServer(function(req,res){
/*   
    if(req.url=="/"){
        let fileCheck = fs.existsSync("home.html");
        if(fileCheck==false){
            res.end("404 Not Found");
        }
    }
*/   
   
   
    if(req.url=="/"){
        let fileCheck = fs.existsSync("home.html");
        if(fileCheck==false){
            res.end("404 Not Found");
        }else{
            let data = fs.readFileSync('home.html','utf8');
            res.end(data);
        }
    }
    else if(req.url=="/contact"){
        let fileCheck = fs.existsSync("contact.html");
        if(fileCheck==false){
            res.end("404 Not Found");
        }else{
            let data = fs.readFileSync('contact.html','utf8');
            res.end(data);
        }
    }
    else if(req.url=="/about"){
        let fileCheck = fs.existsSync("about.html");
        if(fileCheck==false){
            res.end("404 Not Found");
        }else{
            let data = fs.readFileSync('about.html','utf8');
            res.end(data);
        }
    }
    else if(req.url=="/terms"){
        let fileCheck = fs.existsSync("terms.html");
        if(fileCheck==false){
            res.end("404 Not Found");
        }else{
            let data = fs.readFileSync('terms.html','utf8');
            res.end(data);
        }
    }


});
server.listen(3000);
console.log("Server Run Success");