// Immediately Invoke Function Expression - IIFE
//Anonymous Self-Executing Function - AKA
(function()
{

    function DisplayHomePage()
    {
        console.log("Home page");
        let AboutUsButton = document.getElementById("AboutUsButton");
        AboutUsButton.addEventListener("click", function()
        {
            location.href = "about.html";
        });
        
        //Step 1 - get a reference to an entry point

        let MainContent = document.getElementsByTagName("main")[0];
        let DocumentBody = document.body;
        //console.log(MainContent);

        //Step 2 - create a HTML Element in memory
        let MainParagraph = document.createElement("p");
        let Article = document.createElement("article");
        let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3">This is the Article Paragraph</p>`;

        //Step 3 - configure new Element
        MainParagraph.setAttribute("id", "MainParagraph");
        MainParagraph.setAttribute("class", "mt-3");
        MainParagraph.textContent = "This is the Main Paragraph!";
        Article.setAttribute("class", "container");

        //Step 4 - perform insertion

        //example of insert after (Append)
        MainContent.appendChild(MainParagraph);
        Article.innerHTML = ArticleParagraph;
        DocumentBody.appendChild(Article);
        
        //  DocumentBody.innerHTML = `
        //  <div class="container">
        //  <h1 class="display-1">Hello World!</h1>
        //  <p class="mt-5">and ... what do you think of this</p>
        //  </div>
        // `  ;

        //example of insert before
        //MainContent.before(MainParagraph);  

        //example of deletion
        document.getElementById("AboutUsButton").remove();
        //AboutUsButton.remove();
        
        //ES6 and HTMLS => Template Strings = > "Super Strings"
    }

    function DisplayProductsPage()
    {
        console.log("Products Page");
    }

    function DisplayServicesPage()
    {
        console.log("Services Page");
    }

    function DisplayAboutPage()
    {
        console.log("About Page");
    }

    function DisplayContactPage()
    {
        console.log("Contact Page");
    }
    // named function option
    function Start()
    {
        console.log("App Started!");

        switch(document.title)
        {
            case "Home":
                DisplayHomePage();
                break;
            case "Our Products":
                DisplayProductsPage()
                break;
            case "Our Services":
                DisplayServicesPage();
                break;
            case "About Us":
                DisplayAboutPage();
                break;
            case "Contact Us":
                DisplayContactPage();
                break;

        }

        
        //console.log(AboutUsButton);
    }

    /*
    let Start = function()
    {
        console.log("App Started!");
    }*/

    window.addEventListener("load", Start);

})();