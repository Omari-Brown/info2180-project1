/* Add your JavaScript to this file */
window.onload = function ()
{
    console.log("Page loaded.");
    const mybutton = document.getElementsByClassName("btn")[1];
    console.log(mybutton);
    const messagebox = document.getElementsByClassName("message")[0];
    console.log(messagebox);
    mybutton.addEventListener("click", function (event)
    {
        event.preventDefault();
        console.log("Nope");
        const email = document.getElementById("email").value;
        console.log(email);
        if (email.length==0)
        {
            console.log("Invalid email length");
            messagebox.innerText = "Please enter a valid email address.";
        } else
        {
            console.log("Valid email length");
            messagebox.innerText = "Thank you! Your email address<" + email + "> has been added to our mailing list!";
        } 
    });
}