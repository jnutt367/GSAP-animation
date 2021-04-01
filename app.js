gsap.from("#logo", { duration: 3, x: 300, opacity: 0, scale: 0.5 });
gsap.from("#bball", { duration: 3, rotation: 360, x: 300, ease: "bounce", opacity: 0, scale: 0.5 });

gsap.to("h2.title", { duration: 5, opacity: 0.3 });
gsap.to(".box", { duration: 3, x: 140 });
gsap.to(".green", { duration: 1, rotation: 360, scale: 0.5 });
gsap.to(".orange", { duration: 7, rotation: 360, scale: 0.9 });
gsap.to(".black", { duration: 10, rotation: 360, scale: 0.5 });

gsap.to("#world", { duration: 2, x: 50, ease: "bounce" });