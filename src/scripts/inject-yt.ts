export default function () {
  console.log("----> Start injecting YouTube scripts");

  document.onkeyup = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.key === "[" && e?.target?.id !== "search") {
      document.querySelector<HTMLButtonElement>("#guide-button")?.click();
    }

    console.log("----> finished injecting YouTube scripts");
  };
}
