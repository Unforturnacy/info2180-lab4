function searchList()
{
    var result = document.getElementById("result");
    var val = document.getElementById("hero-input");
    console.log("hello")
    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if(req.readyState === XMLHttpRequest.DONE){
            if(req.status === 200)
            {
                result.innerHTML = req.responseText
            } 
            else
            {
                console.log("Error")
            }
        }
    }
    req.open("GET",`http://localhost/info2180-lab4/superheroes.php?query=${val.value}`,false)

    req.send();
}




window.onload = function() {
    console.log("Page loaded");
    var  but = document.getElementById("search-btn");
    but.addEventListener("click", searchList);
  
};