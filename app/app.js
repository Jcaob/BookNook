function toggleMenu(menu){
    menu.classList.toggle('open');
}

/* The following code is for the module */

var pageName = "home"; // Define pageName globally

function addPageContent(pageName) {
    let pageContentName = pageName + "Content";
    $(".app").html(window[pageContentName]); // Access the variable using window[pageContentName]
}

addPageContent("home");

//addPageContent(pageName); // Pass the pageName as an argument

function route() {
    hashTag = window.location.hash;
    console.log(hashTag);
}

$(window).on('hashchange', route);

/* End of code for the module */