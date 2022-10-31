window.addEventListener("load", function ()
{
    // Get Click Elements.
    let clickButtonElement = document.getElementById("click_button");
    let clickCounterElement = document.getElementById ("click_counter");

  // Counter Value.
    let counter = 0;

    //Button Click funtion
    let clickButtonFuction = function ()
    {
        // Increment Counter
        counter++;

        //Update click COunter text
        clickCounterElement.innerHTML = counter;
    };
    
    // Attach click function to button.
    clickButtonElement.addEventListener("click",clickButtonFuction);
});