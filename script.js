// ===== Filter Buttons Logic ===== //
const filterButtons = document.querySelectorAll(".btn");
const images = document.querySelectorAll(".image");

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        // Remove 'active' class from all buttons
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filterValue = btn.getAttribute("filter");

        images.forEach(img => {
            if (filterValue === "all") {
                img.style.display = "block";
            } else {
                if (img.classList.contains(filterValue)) {
                    img.style.display = "block";
                } else {
                    img.style.display = "none";
                }
            }
        });
    });
});

// ===== Lightbox (Click to Enlarge) Logic ===== //
const fullImgBox = document.getElementById("fullimgbox");
const fullImg = document.getElementById("fullimg");

images.forEach(img => {
    img.addEventListener("click", () => {
        fullImgBox.style.display = "flex";
        fullImg.src = img.src;
    });
});

// ===== Close Full Image View ===== //
document.querySelector(".full-img span").addEventListener("click", () => {
    fullImgBox.style.display = "none";
});


const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
        
let currentIndex = 0;

// Next image
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    fullImg.src = images[currentIndex].src;
});

// Previous image
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    fullImg.src = images[currentIndex].src;
});