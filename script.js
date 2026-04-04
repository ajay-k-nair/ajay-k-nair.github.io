document.addEventListener("DOMContentLoaded", () => {
  const codeNodes = document.querySelectorAll("[data-lean-command]");
  if (codeNodes.length === 0) {
    return;
  }

  const snippet = 'elab "#helloWorld" : tactic => do\n    logInfo "Hello World!"';
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  codeNodes.forEach((node, index) => {
    if (reducedMotion) {
      node.textContent = snippet;
      return;
    }

    let charIndex = 0;
    const tick = () => {
      charIndex += 1;
      node.textContent = snippet.slice(0, charIndex);
      if (charIndex < snippet.length) {
        window.setTimeout(tick, 34);
      }
    };

    window.setTimeout(tick, 160 + index * 60);
  });
});
