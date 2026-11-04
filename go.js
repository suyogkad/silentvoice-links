(function () {
  var key = document.documentElement.getAttribute("data-link");
  var target = window.LINKS[key];
  var done = false;
  function go() { if (!done) { done = true; location.replace(target); } }
  if (window.GOATCOUNTER) {
    var img = new Image();
    img.onload = img.onerror = go;
    img.src = "https://" + window.GOATCOUNTER + ".goatcounter.com/count?p=/" + key +
      "&t=" + encodeURIComponent(key) + "&r=" + encodeURIComponent(document.referrer) +
      "&s=" + screen.width + "," + screen.height + "," + (window.devicePixelRatio || 1) +
      "&rnd=" + Math.random();
    setTimeout(go, 800);
  } else {
    go();
  }
})();
