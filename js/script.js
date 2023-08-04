gsap.registerPlugin(ScrollTrigger);

gsap.from(".aboutme-title",{
  scrollTrigger:".about-me",
  x: -500,
  duration: 1.5,
  scrollTrigger:{
    toggleActions: "restart none none none"
  }
  
  });
  gsap.from(".aboutme-p",{
    scrollTrigger:".aboutme-p",
    opacity:.5,
    duration: 1.5,
    scrollTrigger:{
      toggleActions: "restart restart restart restart"
    }
    });

    gsap.from(".stuff-info",{
      scrollTrigger:".stuff-info",
      left:-500,
      duration: 1,
      opacity:1,
      scrollTrigger:{
        toggleActions: "restart none restart restart"
       
       
      }
      });
    