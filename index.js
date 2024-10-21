document.getElementById("btn").addEventListener("click", love);


function love(){
    var name1 = document.getElementById("fname").value;
    var name2 = document.getElementById("lname").value;
    let statement = document.getElementById("statement");

    statement.classList.remove("hidden")

    if(name1<= 2 || name2 <= 2)
    {
        alert("Enter atleast 3 Characters");
    }
    else
    {
        var random = Math.floor(Math.random()*100);
        document.getElementById("print").innerHTML = name1 + " and " + name2 + " = " + random + "%" + " of love";
    }
    if( random >= 70)
    {
        document.getElementById("statement").innerHTML = "You both have love each other like Romeo and Juliet";
    }
    else if(random >= 70 && random <= 50)
    {
        document.getElementById("statement").innerHTML = "You both  love each other";
    }
    else if(random >= 30 && random <= 50)
    {
        document.getElementById("statement").innerHTML = "You love each other like a Babu and sona 😂";
    }
    else
    {
        document.getElementById("statement").innerHTML = "You don't have right to love each other";
    }
}
