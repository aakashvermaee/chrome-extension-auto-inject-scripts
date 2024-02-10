export default function () {
  console.log("----> Start injecting Netflix scripts");

  // TODO: clear interval when the tab is removing/removed
  setInterval(() => {
    const introBtn = document.querySelector<HTMLButtonElement>(".ltr-1mjzmhv");
    introBtn?.click();
  }, 1000);

  console.log("----> finished injecting Netflix scripts");
}
