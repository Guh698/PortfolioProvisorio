gsap.registerPlugin(SplitText, MorphSVGPlugin, MotionPathPlugin);

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".link");

  links.forEach((link) => {
    let upperMessage = link.querySelector(".upper-message");
    let lowerMessage = link.querySelector(".lower-message");

    let splitUpper = new SplitText(upperMessage, {
      type: "words, chars",
    });
    let splitLower = new SplitText(lowerMessage, {
      type: "words, chars",
    });

    let charLinks = splitUpper.chars;
    let charLinks2 = splitLower.chars;

    gsap.set(charLinks, { y: 0 });
    gsap.set(charLinks2, { y: "150%" });

    link.addEventListener("mouseenter", () => {
      gsap.to(charLinks, {
        scale: 1.1,
        y: "-100%",
        duration: 0.3,
        stagger: {
          each: 0.02,
          from: "center",
        },
      });

      gsap.to(charLinks2, {
        scale: 1.1,
        y: "0",
        duration: 0.3,
        stagger: {
          each: 0.02,
          from: "center",
        },
      });
    });

    link.addEventListener("mouseleave", () => {
      gsap.to(charLinks, {
        scale: 1,
        y: "0",
        duration: 0.3,
        stagger: {
          each: 0.02,
          from: "center",
        },
      });

      gsap.to(charLinks2, {
        scale: 1,
        y: "150%",
        duration: 0.3,
        stagger: {
          each: 0.02,
          from: "center",
        },
      });
    });
  });
});
