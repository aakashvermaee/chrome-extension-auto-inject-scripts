(function () {
  document.onkeyup = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.key === "[" && e.target.id !== "search") {
      document.querySelector("#guide-button")?.click();
    }
  };
})();
