// Instructions:
// 1. Change REPO_NAME (line 6) to the name of your GitHub repository
// 2. Change ROOT_IS_DOCS (line 7) to true or false, depending on if your root directory is the 'docs' folder
// 3. Create your menu in the 'mainMenu' variable at line 11



const REPO_NAME = 'portfolio-demo'; // 1. CHANGE THIS
const ROOT_IS_DOCS = true; // 2. CHANGE THIS

let prefix = setPrefix(REPO_NAME, ROOT_IS_DOCS);

// 3. CHANGE THIS
let mainMenu = `
  <a href="${prefix}">Home</a>
  <a href="${prefix}/about">About</a>
  <a href="${prefix}/contact">Contact</a>
  <a href="${prefix}/works/sample-project1">Sample Project 1</a>
  <a href="${prefix}/works/sample-project2">Sample Project 2</a>
  <a href="${prefix}/works/sample-project3">Sample Project 3</a>
`

$('.main-menu').append(mainMenu)



//// UTILITY FUNCTIONS, LEAVE THESE UNCHANGED



function setPrefix(repoName, rootIsDocs) {
  let _prefix;
  const myLocation = window.location.href;
  if(myLocation.substring(0, 4) === 'http') {
    console.log("Using Live Server");
    if(rootIsDocs) {
      _prefix = "/docs/"
    } else {
      _prefix = ""
    }
  } else {
    console.log("Production Site");
    _prefix = `/${repoName}/`
  }

  return _prefix;
}