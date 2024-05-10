
const filterBtns = document.querySelectorAll(".filter-btn button");
const containerCards = document.querySelectorAll(".container-card .card");

// Define the filterCards function
const filterCards = e => {
    // Remove "active" class from all buttons
    document.querySelectorAll(".filter-btn button").forEach(button => {
        button.classList.remove("active");
    });

    // Add "active" class to the clicked button
    e.target.classList.add("active");

    // Iterate over each container card
    containerCards.forEach(card => {
        // Add "hide" class to hide the card initially
        card.classList.add("hide");

        // Check if the card matches the selected filter or "all" is selected
        if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
            card.classList.remove("hide");
        }
    });

    console.log(e.target);
};

// Add click event listener to each filter button
filterBtns.forEach(button => button.addEventListener("click", filterCards));

//steaky nav-bar
const header = document.querySelectorAll(".nav-btn");
const sticky = header.offsetTop;
console.log(sticky);
window.addEventListener('scroll', () =>{
    if(window.pageYOffset> sticky){
        header.classList.add('sticky');
    }else{
        header.classList.remove('sticky');
    }
});