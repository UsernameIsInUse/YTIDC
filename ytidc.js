/* Hide paid promotion notifications on thumbnails */
let style = document.createElement("style");
style.innerHTML = ".ytmPaidContentOverlayHost { display: none !important; }";
document.head.appendChild(style);
