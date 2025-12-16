const h1 = document.querySelector("h1");

function splitText() {
    const h1Text = h1.textContent;
    const SplittedText = h1Text.split("");
    const halfLength = SplittedText.length / 2;
    let clutter = "";

    SplittedText.forEach((e, idx) => {
        if (idx < halfLength) {
            clutter += `<span class="a">${e}</span>`;
        } else {
            clutter += `<span class="b">${e}</span>`;
        }
    });

    h1.innerHTML = clutter;
}

splitText();

gsap.from("h1 .a", {
    y: 50,
    opacity: 0,
    duration: 0.7,
    delay: 0.5,
    stagger: 0.2,
});

function splitText() {
    const h1Text = h1.textContent;
    const SplittedText = h1Text.split("");
    const halfLength = SplittedText.length / 2;
    let clutter = "";

    SplittedText.forEach((e, idx) => {
        if (idx < halfLength) {
            clutter += `<span class="a">${e}</span>`;
        } else {
            clutter += `<span class="b">${e}</span>`;
        }
    });

    h1.innerHTML = clutter;
}

splitText();

gsap.from("h1 .a", {
    y: 40,
    opacity: 0,
    duration: 0.7,
    delay: 0.5,
    stagger: 0.2,
});
gsap.from(" .b", {
    y: 40,
    opacity: 0,
    duration: 0.7,
    delay: 0.5,
    stagger: -0.2,
});
