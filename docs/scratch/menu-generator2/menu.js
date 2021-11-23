const myLocation = window.location.href;
const rootIsDocs = true;
const repoName = 'portfolio-demo';
let prefix;


if(myLocation.substring(0, 4) === 'http') {
  console.log("Using Live Server");
  if(rootIsDocs) {
    prefix = "/docs/"
  } else {
    prefix = "/"
  }
  
} else {
  console.log("Production Site");
  prefix = `/${repoName}/`
}


let mainMenu = `
  <a href="${prefix}">Home</a>
  <a href="${prefix}about">About</a>
  <a href="${prefix}contact">Contact</a>
  <a href="${prefix}works/sample-project1">Sample Project 1</a>
  <a href="${prefix}works/sample-project2">Sample Project 2</a>
  <a href="${prefix}works/sample-project3">Sample Project 3</a>
`

$('.main-menu').append(mainMenu)