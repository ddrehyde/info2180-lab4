window.onload = function() {
    let searchButton = document.getElementById("btn");

    searchButton.addEventListener('click', function(e) {
        e.preventDefault(); 

        var searchQuery = document.getElementById("superheroes").value.trim();

        if (!searchQuery) {
            alert("Please enter a superhero name or alias.");
            return;
        }

        var heroRequest = new XMLHttpRequest();

        var urlCode = "superheroes.php?query=" + encodeURIComponent(searchQuery);

        heroRequest.onreadystatechange = function() {
            if (heroRequest.readyState == XMLHttpRequest.DONE) {
                if (heroRequest.status == 200) {
                    var hero = heroRequest.responseText;
                    var result = document.getElementById("result");
                    result.innerHTML = hero;                 } else {
                    alert("Error Detected: " + heroRequest.statusText);
                }
            }
        };

        heroRequest.open("GET", urlCode, true);
        heroRequest.send();
    });
};