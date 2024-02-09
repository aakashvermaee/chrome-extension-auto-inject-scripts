(function () {
  console.log("----> Start injecting YouTube scripts");

  document.onkeyup = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.key === "[" && e.target.id !== "search") {
      document.querySelector("#guide-button")?.click();
    }
  };

  console.log("----> finished injecting YouTube scripts");
})();
