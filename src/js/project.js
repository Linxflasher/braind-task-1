// Rating

const rating = document.getElementById("rating-filled");
const ratingValue = document.getElementById("rating-value");
let randomRating = Math.floor(Math.random() * 100) + 1;
let randomRatingValue = (randomRating / 100) * 5;

randomRatingValue = randomRatingValue.toFixed(1);
console.log(randomRatingValue);

rating.style.width = randomRating + "%";
ratingValue.textContent = randomRatingValue;

// Review expand/collapse

const expandBtn = document.getElementById("expand-btn");
const textInfo = document.querySelector(".review__info");

expandBtn.addEventListener("click", () => {
    textInfo.classList.toggle("expanded");
})
