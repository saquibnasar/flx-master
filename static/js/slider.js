const roadmap__collections = document.querySelector(".roadmap__collections");
const roadmap__collections_collectionCards = document.querySelectorAll(
  ".roadmap__collections .collection-card"
);

let count = 1;
const roadmap__collections_collectionCard =
  roadmap__collections_collectionCards[1];
let scrollWidth = 0;
roadmap__collections.scrollLeft = 0;
setInterval(() => {
  roadmap__collections.scrollLeft;
  if (roadmap__collections.scrollLeft === roadmap__collections.scrollLeft) {
    console.log(scrollWidth, roadmap__collections.scrollLeft);
    setTimeout(() => {
      roadmap__collections.scrollLeft = 0;
      scrollWidth = 0;
    }, 2400);
  } else {
    roadmap__collections.scrollLeft = scrollWidth + 10;
    scrollWidth = scrollWidth + 10;
  }
}, 150);
