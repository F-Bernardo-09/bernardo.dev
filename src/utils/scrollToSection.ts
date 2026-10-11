export function scrollToSection(id: string, attemptsLeft = 50) {
  const el = document.getElementById(id);

  if (!el) {
    if (attemptsLeft <= 0) return;
    requestAnimationFrame(() => scrollToSection(id, attemptsLeft - 1));
    return;
  }

  const target: HTMLElement = el;

  const pendingImages = Array.from(document.images).filter(
    (img) => !img.complete,
  );

  if (pendingImages.length === 0) {
    target.scrollIntoView({ behavior: "smooth" });
    return;
  }

  let remaining = pendingImages.length;

  function done() {
    remaining--;
    if (remaining <= 0) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }

  pendingImages.forEach((img) => {
    img.addEventListener("load", done, { once: true });
    img.addEventListener("error", done, { once: true });
  });
}
