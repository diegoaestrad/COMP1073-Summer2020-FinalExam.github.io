/* When the button displayed in the browser is clicked, the following should happen:

1.) the background colour of the page changes to  #BADA55
2.) an H1 is created and added to the page that contains the text ‘Thanks for a fun semester!”
3.) The button text changes to clicked 
4.) Good luck on your final exam is removed from the page. 

*/

let button = document.querySelector("button");
let text1 = "Click Me!";
let text2 = "clicked";


button.onclick = () => {

    document.body.style.backgroundColor = "#BADA55";
    let div = document.createElement("div");
    let h1_first = document.createElement("h1");
    h1_first.innerHTML = "Thanks for a fun semester!";
    button.innerHTML = text2;
    div.appendChild(h1_first);
    document.body.appendChild(div);

    if (button.innerText === text2) {
        let eledel = document.getElementById("pd");
        eledel.textContent = "";
    }

};