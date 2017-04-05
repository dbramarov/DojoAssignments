var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response){

    console.log('client request URL: ', request.url);

    if(request.url === '/cars') {
        fs.readFile('./views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'}); 
            response.write(contents); 
            response.end(); 
        });
    }  
    else if (request.url === "/images/lamborghini-egoista-000.jpg") {
         fs.readFile('./images/lamborghini-egoista-000.jpg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents); 
             response.end();
        });
    } 
    else if(request.url === '/cats') {
        fs.readFile('./views/cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'}); 
            response.write(contents); 
            response.end(); 
        });
    }  
    else if (request.url === "/images/Coolcat.jpg") {
         fs.readFile('./images/Coolcat.jpg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents); 
             response.end();
        });
    }  
    else if (request.url === "/cars/new") {
         fs.readFile('./views/carForm.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
        });
    }                 
    else {
        response.writeHead(404);
        response.end('URL requested is not available');
    }
});
server.listen(7077);
console.log("Running in localhost at port 7077");