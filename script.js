gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin, TextPlugin);

document.addEventListener("DOMContentLoaded", () => {
  // Starting ScrollSmoother
  const smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1,
    smoothTouch: 0.1,
    effects: true,
  });

  // Starting position 0
  let savedScroll = 0;
  ScrollSmoother.get().scrollTo(0, true);

  // Consts
  const spotlight = document.getElementById("cursor-spotlight");
  const mainPage = document.getElementById("main-page");
  const navContainer = document.getElementById("nav-container");
  const logo = document.querySelector("#logo img");
  const arrowLeft = document.getElementById("arrowLeft");
  const backToTop = document.getElementById("backToTop");
  // Project page consts
  const projectPage = document.getElementById("project-page");
  const img1 = document.getElementById("projectImage1");
  const img2 = document.getElementById("projectImage2");
  const img3 = document.getElementById("projectImage3");
  const textTime = document.getElementById("text1");
  const textData = document.getElementById("text2");
  const video = document.getElementById("projectVideo");
  const FirstParagraph = document.getElementById("paragraph1");
  const SecondParagraph = document.getElementById("paragraph2");
  const link = document.getElementById("projectLink");
  const heroText = document.getElementById("heroText");

  const el = "#typewriter";
  const tl = gsap.timeline({ repeat: 0 });

  logo.src = "imgs/WhiteLogo.png";

  function pauseScroll() {
    smoother.paused(true);
  }

  function resumeScroll() {
    smoother.paused(false);
  }

  // Project page data assignment function
  function ToggleProject(projectData) {
    let anyProjectPageOpen = false;

    img1.src = projectData.img1;
    img2.src = projectData.img2;
    img3.src = projectData.img3;
    video.src = projectData.video;
    projectPage.classList.add("show");
    textTime.innerHTML = projectData.textTime;
    textData.innerHTML = projectData.textData;
    FirstParagraph.innerHTML = projectData.FirstParagraph;
    SecondParagraph.innerHTML = projectData.SecondParagraph;
    link.href = projectData.link;
    link.target = "_blank";

    if (projectPage.classList.contains("show")) {
      anyProjectPageOpen = true;
    } else {
      anyProjectPageOpen = false;
    }

    if (anyProjectPageOpen) {
      mainPage.classList.add("showOff");
      finalHero.style.position = "absolute";
      logo.src = "imgs/WhiteLogo.png";
    } else {
      mainPage.classList.add("show");
      logo.src = "imgs/BlackLogo.png";
    }

    if (arrowLeft) {
      arrowLeft.addEventListener("click", () => {
        projectPage.classList.remove("show");
        mainPage.classList.remove("showOff");
        setTimeout(() => {
          ScrollSmoother.get().scrollTo(savedScroll, true, 3);
        }, 200);
        setTimeout(() => {
          finalHero.style.position = "absolute";
        }, 1000);
      });
    }
  }

  // Project page data
  const pages = {
    project1: {
      btn: document.getElementById("project1-btn"),
      img1: "https://res.cloudinary.com/dabshzrnj/image/upload/w_1400,h_700,c_fill/HomeWoode_ugxpyf.png",
      img2: "https://res.cloudinary.com/dabshzrnj/image/upload/w_1400,h_700,c_fill/WhatsApp_Image_2025-05-09_at_1.46.39_PM_rqizgy.jpg",
      img3: "https://res.cloudinary.com/dabshzrnj/image/upload/w_1400,h_700,c_fill/productPage_v4hg2v.png",
      textTime: "1 Month,",
      textData: "Launched in April 2025",
      video: "imgs/woodeVideo.mp4",
      FirstParagraph:
        "This project features an immersive digital showroom, with some e-commerce functionality, but with a refined design and smooth browsing experience.",
      SecondParagraph:
        "Using Gsap ScrollTrigger and ScroolSmoother, animations are seamlessly integrated into the page movement, creating a dynamic and engaging visual experience. The responsive design ensures that the layout adapts perfectly to different devices, maintaining the sophistication and style of the furniture store.",
      link: "https://woodewebsite.netlify.app/",
    },

    project2: {
      btn: document.getElementById("project2-btn"),
      img1: "https://res.cloudinary.com/dabshzrnj/image/upload/w_1400,h_700,c_fill/Screenshot_2025-05-09_at_13-48-09_Coddee_Coffing_p5azpu.png",
      img2: "https://res.cloudinary.com/dabshzrnj/image/upload/w_1400,h_700,c_fill/Screenshot_2025-05-09_at_13-48-51_Coddee_Coffing_ujpc1a.png",
      img3: "https://res.cloudinary.com/dabshzrnj/image/upload/w_1400,h_700,c_fill/Screenshot_2025-05-09_at_13-49-12_Coddee_Coffing_bjpskn.png",
      textTime: "",
      textData: "Work in progress",
      video: "imgs/cafeRemakeVideo.mp4",
      FirstParagraph:
        "Welcome to my digital coffee shop showroom — a sleek and modern remake of my original project. This version focuses on visual polish, with refined design elements, smooth hover effects, and GSAP-powered parallax animations that bring the site to life.",
      SecondParagraph:
        "The site features a clean, easy-to-navigate menu display and a table reservation form for scheduling your visit. It’s a simple yet elegant experience, designed to showcase both aesthetics and functionality.",
      link: "https://cafewebsiteguh.netlify.app/",
    },

    project3: {
      btn: document.getElementById("project3-btn"),
      img1: "https://res.cloudinary.com/dabshzrnj/image/upload/w_1400,h_700,c_fill/HomeCloudParis_kozmcz.png",
      img2: "https://res.cloudinary.com/dabshzrnj/image/upload/w_1400,h_700,c_fill/CloudCatalog_zh5wr4.png",
      img3: "https://res.cloudinary.com/dabshzrnj/image/upload/w_1400,h_700,c_fill/cloudParisSearch_juf62r.png",
      textTime: "7 days,",
      textData: "Launched in March 2025",
      video: "imgs/cloudParisvideo.mp4",
      FirstParagraph:
        "A project focused on showcasing hosting plans in a clear and visually appealing manner. With Gsap ScrollTrigger and Locomotive Scroll, the site features refined animations that help guide users through the information intuitively.",
      SecondParagraph:
        "The responsive design ensures an excellent experience on both desktop and mobile devices.",
      link: "https://cloudparis.netlify.app/",
    },
    project4: {
      btn: document.getElementById("project4-btn"),
      img1: "https://res.cloudinary.com/dabshzrnj/image/upload/w_1400,h_700,c_fill/HomeCafe_tjm1gx.png",
      img2: "https://res.cloudinary.com/dabshzrnj/image/upload/w_1400,h_700,c_fill/cafeCatalog_uw3tey.png",
      img3: "https://res.cloudinary.com/dabshzrnj/image/upload/w_1400,h_700,c_fill/aboutCafe_sctelt.png",
      textTime: "7 days,",
      textData: "Launched in February 2025",
      video: "imgs/cafeVideo.mp4",
      FirstParagraph:
        "This project for a cafeteria front-end features smooth animations and a clean, minimalistic layout. Designed with a focus on simplicity, it enhances user experience without unnecessary complexity.",
      SecondParagraph:
        "The website adjusts seamlessly across devices, ensuring a responsive design that works perfectly on both desktop and mobile. Subtle animations make navigation intuitive and visually appealing, providing an engaging experience for visitors.",
      link: "https://guh698.github.io/Cafe_website/",
    },
    project5: {
      btn: document.getElementById("project5-btn"),
      img1: "https://res.cloudinary.com/dabshzrnj/image/upload/w_1400,h_700,c_fill/HomeCalc_ctzbnp.png",
      img2: "https://res.cloudinary.com/dabshzrnj/image/upload/w_1400,h_700,c_fill/MenuCalc_rj2cxi.png",
      img3: "https://res.cloudinary.com/dabshzrnj/image/upload/w_1400,h_700,c_fill/WhiteThemeCalc_bd4rh6.png",
      textTime: "1 Month,",
      textData: "Launched in January 2025",
      video: "imgs/CalcVideo.mp4",
      FirstParagraph:
        "This financial calculator is designed with a clean, user-friendly interface, making complex financial formulas easy to navigate. It supports calculations for simple and compound interest, as well as commercial and rational discounts.",
      SecondParagraph:
        "Additionally, it offers various types of amortization calculations (SAC, American, and Price). The interface also includes explanatory tables, helping users understand the financial processes involved in each calculation.",
      link: "https://guh698.github.io/projeto_calculadora_financeira/index.html",
    },
  };

  // Project Page open function
  Object.values(pages).forEach((project) => {
    if (project.btn) {
      project.btn.addEventListener("click", () => {
        savedScroll = ScrollSmoother.get().scrollTop();
        setTimeout(() => {
          ScrollSmoother.get().scrollTo(0, true, 3);
          finalHero.style.position = "absolute";
        }, 100);
        ToggleProject(project);
      });
    }
  });

  // hero text animation
  let heroTextAnim = gsap.to(heroText, {
    xPercent: -100,
    repeat: -1,
    duration: 10,
    ease: "linear",
  });

  const InitialHero = document.querySelector(".InitialHero");
  const scrollSpacer = document.querySelector(".scrollSpacer");
  const finalHero = document.querySelector(".FinalHero");
  const FinalHeroContent = document.querySelector(".FinalHeroContent");
  const FinalHeroOnepartScreen = document.querySelector(".OnepartScreen");
  const FinalHeroTwoPartScreen = document.querySelector(".TwoPartScreen");
  const FinalHeroIntroText = document.querySelector(".introText");
  const FinalHeroText = document.querySelector(".FinalHeroText");

  function AddFinalHeroShow() {
    FinalHeroContent.classList.add("show");
    FinalHeroOnepartScreen.classList.add("show");
    FinalHeroTwoPartScreen.classList.add("show");
    FinalHeroText.classList.add("show");
    FinalHeroIntroText.classList.add("show");
  }

  let heroTimeout; // <- define fora para poder acessar em onEnterBack

  function CloseFinalHeroShow() {
    FinalHeroContent.classList.remove("show");
    FinalHeroOnepartScreen.classList.remove("show");
    FinalHeroTwoPartScreen.classList.remove("show");
    FinalHeroText.classList.remove("show");
    FinalHeroIntroText.classList.remove("show");
  }

  //Hero animation
  if (!projectPage.classList.contains("show")) {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      gsap.to(".FinalHero", {
        scrollTrigger: {
          trigger: ".scrollSpacer",
          start: "top bottom",
          end: "top top",
          scrub: true,
          onLeave: () => {
            ScrollTrigger.refresh();
            scrollSpacer.classList.add("removeShow");
            ScrollTrigger.refresh();
            const leaveTl = gsap.timeline();
            leaveTl
              .to(el, {
                duration: 0.5,
                text: "",
                ease: "none",
              })
              .to(el, {
                duration: 1.5,
                text: "Luiz Gustavo",
                ease: "none",
              });
            // Salva o timeout para poder cancelar depois
            heroTimeout = setTimeout(() => {
              AddFinalHeroShow();
              ScrollTrigger.refresh();
            }, 2800);
          },
          onEnterBack: () => {
            scrollSpacer.classList.remove("removeShow");
            clearTimeout(heroTimeout);
            setTimeout(() => {
              CloseFinalHeroShow();
            }, 100);
            setTimeout(() => {
              CloseFinalHeroShow();
            }, 800);
            setTimeout(() => {
              CloseFinalHeroShow();
            }, 1000);
            setTimeout(() => {
              CloseFinalHeroShow();
            }, 1200);
            const backTl = gsap.timeline();
            backTl
              .to(el, {
                duration: 0.5,
                text: "",
                ease: "none",
              })
              .to(el, {
                duration: 1,
                text: "Gustavo",
                ease: "none",
              });
            setTimeout(() => {
              CloseFinalHeroShow();
            }, 1500);
            setTimeout(() => {
              CloseFinalHeroShow();
            }, 1800);
            setTimeout(() => {
              CloseFinalHeroShow();
            }, 2000);
            setTimeout(() => {
              CloseFinalHeroShow();
            }, 2800);
          },
        },
        right: 0,
        width: "100%",
        height: "120vh",
        top: "100vh",
        ease: "none",
      });
    }
  }

  // text animation
  gsap.utils.toArray(".fade-up").forEach((text) => {
    gsap.fromTo(
      text,
      { y: 150 },
      {
        y: 20,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: text,
          start: "top 80%",
          end: "top 100%",
          scrub: true,
          once: true,
        },
      }
    );
  });

  // text animation
  gsap.utils.toArray(".PROfade-up").forEach((projectCase) => {
    gsap.fromTo(
      projectCase,
      { y: 150 },
      {
        y: 20,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: projectCase,
          start: "top 100%",
          end: "top 100%",
          scrub: true,
          once: true,
        },
      }
    );
  });

  gsap.utils.toArray(".FOfade-up").forEach((text) => {
    gsap.fromTo(
      text,
      { y: 150 },
      {
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".FooterNameCase",
          start: "top 100%",
          end: "top 100%",
          scrub: true,
          once: true,
        },
      }
    );
  });

  gsap.utils.toArray(".Sublinha").forEach((sublinha) => {
    gsap.to(sublinha, {
      scrollTrigger: {
        trigger: sublinha.closest("article"),
        start: "top 30%",
        toggleClass: { targets: sublinha, className: "show" },
        once: true,
      },
    });
  });

  // Design section
  gsap.set("#InitialTextCase", {
    y: 0,
  });

  gsap.to("#InitialTextCase", {
    y: -150,
    scrollTrigger: {
      trigger: ".InitialHero",
      start: "top top",
      scrub: true,
    },
  });

  gsap.set("#heroText", {
    y: 0,
  });

  gsap.to("#heroText", {
    y: -100,
    scrollTrigger: {
      trigger: ".InitialHero",
      start: "top top",
      scrub: true,
    },
  });

  // Cursor effect
  document.addEventListener("mousemove", (e) => {
    spotlight.style.left = `${e.clientX}px`;
    spotlight.style.top = `${e.clientY}px`;
  });

  function scrollToId(id) {
    const element = document.querySelector(`#${id}`);
    if (element) {
      smoother.scrollTo(element, true, "start", 3);
    }
  }

  document.querySelectorAll(".scroll-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const id = link.getAttribute("data-scroll");
      scrollToId(id);
    });
  });
});
