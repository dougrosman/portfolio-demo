// Instructions:
// Use this JavaScript file to build the navigation menu you'll use on each
// page. This is useful if your menu appears on multiple pages, so that you
// only have to change your menu in one place.

const REPO_NAME = `portfolio-demo`; // 1. CHANGE THIS TO your repo name
const ROOT_IS_DOCS = true; // 2. CHANGE THIS TO true OR false
let prefix = setPrefix(REPO_NAME, ROOT_IS_DOCS);

// 3. CHANGE THIS TO whatever your menu structure is
let mainMenu = `
<nav class="main-menu">
  <a href="${prefix}">Home</a>
  <a href="${prefix}/about">About</a>
  <a href="${prefix}/contact">Contact</a>
  <a href="${prefix}/works/sample-project1">Sample Project 1</a>
  <a href="${prefix}/works/sample-project2">Sample Project 2</a>
  <a href="${prefix}/works/sample-project3">Sample Project 3</a>
</nav>
`

$('header').append(mainMenu)



//// UTILITY FUNCTIONS, LEAVE THESE UNCHANGED

function setPrefix(repoName, rootIsDocs) {
  let _prefix;
  const myLocation = window.location.href;
  if(myLocation[4] === ':') {
    console.log("Using Live Server");

    if(rootIsDocs) {
      console.log("using 'docs' for the root directory");
      _prefix = "/docs"
    } else {
      _prefix = ""
    }
  } else {
    console.log("Production Site");
    _prefix = `/${repoName}`
  }

  return _prefix;
}