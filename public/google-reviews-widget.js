(function () {
  var MAPS_URL =
    "https://www.google.com/maps/place/The+Heichel+Team+powered+by+Fairway+Home+Mortgage/@44.0439728,-112.0238171,5z/data=!4m12!1m2!2m1!1skris+heichel+rochester+fairway!3m8!1s0x87f75e45d7e3f1a3:0x83cbd8cbdcfc68d9!8m2!3d44.0439728!4d-92.5120984!9m1!1b1!15sCh5rcmlzIGhlaWNoZWwgcm9jaGVzdGVyIGZhaXJ3YXlaICIea3JpcyBoZWljaGVsIHJvY2hlc3RlciBmYWlyd2F5kgEPbW9ydGdhZ2VfbGVuZGVymgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVVI2YzFsSFVrSm5FQUXgAQD6AQUI0wEQSA!16s%2Fg%2F11gdf1dp8g?entry=ttu&g_ep=EgoyMDI2MDQyOC4wIKXMDSoASAFQAw%3D%3D";

  var RATING = "5.0";
  var REVIEW_COUNT = "274";

  var styles = [
    "#grw-badge{position:fixed;bottom:20px;left:20px;z-index:9999;display:flex;align-items:center;gap:10px;background:#fff;border-radius:12px;box-shadow:0 2px 12px rgba(0,0,0,.18);padding:12px 18px;cursor:pointer;text-decoration:none;font-family:'Helvetica Neue',Arial,sans-serif;transition:box-shadow .2s,transform .2s}",
    "#grw-badge:hover{box-shadow:0 4px 20px rgba(0,0,0,.26);transform:translateY(-2px)}",
    "#grw-logo{width:32px;height:32px;flex-shrink:0}",
    "#grw-info{display:flex;flex-direction:column;align-items:flex-start;gap:2px}",
    "#grw-rating-row{display:flex;align-items:center;gap:6px}",
    "#grw-score{font-size:22px;font-weight:700;color:#202124;line-height:1}",
    "#grw-stars{display:flex;gap:1px}",
    "#grw-stars svg{width:18px;height:18px}",
    "#grw-count{font-size:12px;color:#5f6368;margin-top:1px}",
  ].join("");

  function renderStars() {
    var star =
      '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill="#FBBC04" stroke="none"/></svg>';
    return star.repeat(5);
  }

  function googleLogoSVG() {
    return (
      '<svg id="grw-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">' +
      '<path fill="#4285F4" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/>' +
      '<path fill="#34A853" d="M6.3 14.7l7 5.1C15 16.1 19.1 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 16.3 2 9.7 7.4 6.3 14.7z"/>' +
      '<path fill="#FBBC05" d="M24 46c5.5 0 10.5-1.9 14.3-5.1l-6.6-5.6C29.6 36.9 26.9 38 24 38c-6.1 0-11.2-4.1-13-9.7l-7 5.4C7.5 41.6 15.2 46 24 46z"/>' +
      '<path fill="#EA4335" d="M44.5 20H24v8.5h11.8c-.8 2.5-2.4 4.6-4.5 6.1l6.6 5.6c4-3.7 6.1-9.1 6.1-15.2 0-1.3-.2-2.7-.5-4z"/>' +
      "</svg>"
    );
  }

  function inject() {
    var styleEl = document.createElement("style");
    styleEl.textContent = styles;
    document.head.appendChild(styleEl);

    var badge = document.createElement("a");
    badge.id = "grw-badge";
    badge.href = MAPS_URL;
    badge.target = "_blank";
    badge.rel = "noopener noreferrer";
    badge.setAttribute("aria-label", "See our " + REVIEW_COUNT + " Google reviews");

    badge.innerHTML =
      googleLogoSVG() +
      '<div id="grw-info">' +
      '<div id="grw-rating-row">' +
      '<span id="grw-score">' + RATING + "</span>" +
      '<div id="grw-stars">' + renderStars() + "</div>" +
      "</div>" +
      '<div id="grw-count">' + REVIEW_COUNT + " reviews</div>" +
      "</div>";

    document.body.appendChild(badge);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inject);
  } else {
    inject();
  }
})();
