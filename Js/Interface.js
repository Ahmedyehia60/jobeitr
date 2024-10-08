

// ========================parallax effect=============================

(function () {
    // Add event listener for mousemove
    document.addEventListener("mousemove", parallax);

    // Select the element with the ID 'parallax'
    const elem = document.querySelector("#parallax");

    function parallax(e) {
        const _mouseX = e.clientX;
        const _mouseY = e.clientY;

        // Calculate different depth positions for each image
        const _depth1 = (90 - (_mouseX - window.innerWidth / 2) * 0.0025) + "% " + (15 - (_mouseY - window.innerHeight / 2) * 0.01) + "%";
        const _depth2 = (80 - (_mouseX - window.innerWidth / 2) * 0.0025) + "% " + (10 - (_mouseY - window.innerHeight / 2) * 0.005) + "%";
        const _depth3 = (10 - (_mouseX - window.innerWidth / 2) * 0.0025) + "% " + (80 - (_mouseY - window.innerHeight / 2) * 0.0025) + "%";
        const _depth4 = (85 - (_mouseX - window.innerWidth / 2) * 0.0025) + "% " + (65 - (_mouseY - window.innerHeight / 2) * 0.0025) + "%";
        ``
        // Apply the calculated depth values to the background positions
        elem.style.backgroundPosition = _depth3 + ", " + _depth2 + ", " + _depth1 + ", " + _depth4;

    }
})();


// ========================slider effect=============================


document.addEventListener('DOMContentLoaded', function () {

    const testimonials = document.querySelectorAll('input[name="testimonial"]');

    let currentIndex = 0;

    setInterval(() => {

        testimonials[currentIndex].checked = true;
        currentIndex = (currentIndex + 1) % testimonials.length;
    }, 3000);
});

// ========================hover effect=============================


document.addEventListener("DOMContentLoaded", function () {
    var cards = document.querySelectorAll("div.card-services");
    var background = document.querySelector(".hover-box");

    // Store the index of the last hovered card
    var lastHoveredCardIndex = localStorage.getItem("lastHoveredCardIndex") || 0;

    // Set the background to the last hovered card by default
    var cardRect = cards[lastHoveredCardIndex].getBoundingClientRect();
    var x = cardRect.left + window.scrollX + cardRect.width / 2;
    var y = cardRect.top + window.scrollY + cardRect.height / 2;

    background.style.width = cardRect.width + "px";
    background.style.height = cardRect.height + "px";
    background.style.transform = `translate(${x - cardRect.width / 2}px, ${y - cardRect.height / 2
        }px)`;
    background.style.opacity = "0"; // Set opacity to 0 when the page loads

    cards.forEach(function (card, index) {
        card.addEventListener("mouseenter", function (e) {
            // If the card is zoomed in, return early to prevent the hover effect
            if (card.classList.contains("zoomed")) {
                return;
            }

            var rect = card.getBoundingClientRect();
            x = rect.left + window.scrollX + rect.width / 2;
            y = rect.top + window.scrollY + rect.height / 2;

            // Increase the background size by 20%
            var newWidth = rect.width * 1.04;
            var newHeight = rect.height * 1.1;

            background.style.width = newWidth + "px";
            background.style.height = newHeight + "px";
            background.style.transform = `translate(${x - newWidth / 2}px, ${y - newHeight / 2
                }px)`;
            background.style.opacity = "1"; // Change opacity to 1 when a card is hovered over
            background.style.top = "0%";
            background.style.left = "0%";
            background.style.transformOrigin = "center";
            // Store the index of the hovered card
            localStorage.setItem("lastHoveredCardIndex", index);
        });

        card.addEventListener("mouseleave", function (e) {
            background.style.opacity = "0"; // Change opacity back to 0 when the mouse leaves a card
            // Reset the background size when the mouse leaves the card
            background.style.width = "0px";
            background.style.height = "0px";
        });


    });
});



