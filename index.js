// theres gonna be some node shit in this boiii



//first we gonna importy thingy these two built in functionalities
// which are http for http protocol and fs for file system access
const http = require("http")
const fs = require("fs")
let args=require("minimist")(process.argv.slice(2));



// empty strings
let homeContent = "";
let projectContent = "";
let registrationContent="";

// read them both and save them in a 
fs.readFile("home.html", (err, home) => {
    if (err) {
    throw err;
    }
    homeContent = home;
});

fs.readFile("project.html", (err, project) => {
  if (err) {
    throw err;
  }
  projectContent = project;
});

fs.readFile("registration.html",(err,reg) => {
  if (err){
    throw err;
  }
  registrationContent=reg;
});



http
  .createServer((request, response) => {
    let url = request.url;
    console.log(url)
    response.writeHeader(200, { "Content-Type": "text/html" });
    switch (url) {
      case "/project":
        response.write(projectContent);
        response.end();
        break;
      case "/registration":
        response.write(registrationContent);
        response.end();
        break;
      default:
        response.write(homeContent);
        response.end();
        break;
    }
  })
  .listen(args["port"]);

