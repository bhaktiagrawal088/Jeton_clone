const btn = document.getElementById('langBtn');
  const menu = document.getElementById('langMenu');

  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  // Close dropdown if clicked outside
  window.addEventListener('click', (e) => {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.add('hidden');
    }
  });



  // section 2 cards 
  document.addEventListener("DOMContentLoaded", function () {
    
 gsap.registerPlugin(ScrollTrigger);

    // Animate cards into center
    gsap.utils.toArray(["#card-girl", "#card-coffee", "#card-men", "#card-eur", "#card-exchange"]).forEach((card) => {
      gsap.to(card, {
        scrollTrigger: {
          trigger: ".hero-text",
          start: "top center",
          end: "bottom center",
          scrub: 2
        },
        left: "50%",
        top: "50%",
        xPercent: -50,
        yPercent: -50,
        scale: 1.1,
        ease: "power2.inOut"
      });
    });

    // Animate text (behind cards)
    gsap.fromTo(".hero-text",
      { scale: 6, zIndex: 0, opacity: 1 },
      {
        scale: 1,
        zIndex: 0,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".hero-text",
          start: "top center",
          end: "bottom center",
          scrub: 3
        }
      }
    );


    // section 3 Step-by-step reveal with scroll wheel
    const stepSection = document.querySelector("#scroll-steps");
    let activated = false;

    const observers = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !activated) {
          activated = true;
          enableScrollSteps();
        }
      });
    }, { threshold: 0.5 });

    observers.observe(stepSection);

    function enableScrollSteps() {
      const add = document.getElementById("add");
      const send = document.getElementById("send");
      const exchange = document.getElementById("exchange");

      let step = 1;
      let locked = false;

      add.classList.add("visible");

      window.addEventListener("wheel", (e) => {
        if (locked) return;
        locked = true;

        if (e.deltaY > 0) { // scroll down
          if (step === 1) {
            send.classList.add("visible");
            step = 2;
          } else if (step === 2) {
            exchange.classList.add("visible");
            step = 3;
          }
        } else { // scroll up
          if (step === 3) {
            exchange.classList.remove("visible");
            step = 2;
          } else if (step === 2) {
            send.classList.remove("visible");
            step = 1;
          }
        }

        setTimeout(() => { locked = false; }, 1000);
      });
    }
});



gsap.registerPlugin(ScrollTrigger);

      // Create a timeline for smooth up-and-down
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#jeton-title",
          start: "top 80%",   // when the top of the title hits 80% of viewport
          end: "bottom 20%",  // until the bottom of the title hits 20% of viewport
          scrub: true         // smooth scrubbing
        }
      });

      // Move up first
      tl.to("#jeton-title", { y: -100, ease: "power1.inOut" });

      // Then move back down
      tl.to("#jeton-title", { y: 0, ease: "power1.inOut" });

