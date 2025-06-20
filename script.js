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
  savedScroll = ScrollSmoother.get().scrollTop();

  // Consts
  const InitialHero = document.querySelector(".InitialHero");
  const menuIconMobile = document.querySelector(".menuIconMobile");
  const menuIconMobileClose = document.querySelector(".menuIconMobileClose");
  const textLogo = document.querySelector(".nav-logo-container");
  const liText = document.querySelector(".liText");
  const liText2 = document.querySelector(".liText2");
  const liText3 = document.querySelector(".liText3");
  const liText4 = document.querySelector(".liText4");
  const menuMobile = document.querySelector(".menuMobile");
  const homeBtn = document.getElementById("homeBtn");
  const contactBtn = document.getElementById("contactBtn");
  const worksBtn = document.getElementById("worksBtn");
  const contactPageContainer = document.querySelector(".contactPageContainer");
  const scrollSpacer = document.querySelector(".scrollSpacer");
  const finalHero = document.querySelector(".FinalHero");
  const FinalHeroContent = document.querySelector(".FinalHeroContent");
  const FinalHeroOnepartScreen = document.querySelector(".OnepartScreen");
  const FinalHeroTwoPartScreen = document.querySelector(".TwoPartScreen");
  const FinalHeroIntroText = document.querySelector(".introText");
  const FinalHeroText = document.querySelector(".FinalHeroText");
  const resumeBtnContainer = document.querySelector(".resumeBtnContainer");
  const ResumeDownloadBtn1 = document.getElementById("ResumeDownloadBtn1");
  const ResumeDownloadBtn2 = document.getElementById("ResumeDownloadBtn2");
  const textLoading1 = document.getElementById("textLoading1");
  const textLoading2 = document.getElementById("textLoading2");
  const textWait = document.getElementById("textWait");
  const loadingScreen = document.getElementById("loadingScreen");
  const content = document.querySelector(".content");
  const loadingScreenProject = document.getElementById("loadingScreenProject");
  const loadingScreenMenu = document.getElementById("loadingScreenMenu");
  const textLoading3 = document.getElementById("textLoading3");
  const textLoading4 = document.getElementById("textLoading4");
  const textWait2 = document.getElementById("textWait2");
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
  const MblImg1 = document.getElementById("MblImg1");
  const textTime = document.getElementById("text1");
  const textData = document.getElementById("text2");
  const video = document.getElementById("projectVideo");
  const FirstParagraph = document.getElementById("paragraph1");
  const SecondParagraph = document.getElementById("paragraph2");
  const link = document.getElementById("projectLink");
  const heroText = document.getElementById("heroText");
  const MobileTitle = document.getElementById("MobileTitle");
  const DesktopTitle = document.getElementById("DesktopTitle");
  const el = "#typewriter";
  const tl = gsap.timeline({ repeat: 0 });

  window.addEventListener("popstate", (event) => {
    const page = event.state?.page || "home";

    if (page === "projects") {
      loadingScrenShow();
      setTimeout(() => {
        loadingScrenShowOff();
      }, 3700);
      setTimeout(() => {
        gsap.to(window, {
          scrollTo: 0,
          duration: 0.5,
          ease: "power1.inOut",
        });
        finalHero.style.position = "absolute";
        ToggleProject(pages["project1"]);
      }, 1000);
    } else {
      loadingScrenShow();
      setTimeout(() => {
        loadingScrenShowOff();
      }, 3700);
      setTimeout(() => {
        projectPage.classList.remove("show");
        mainPage.classList.remove("showOff");
        arrowLeft.classList.remove("show");
        gsap.to(window, {
          scrollTo: savedScroll,
          duration: 0.5,
          ease: "power1.inOut",
        });
      }, 1500);
      setTimeout(() => {
        finalHero.style.position = "absolute";
        ScrollTrigger.refresh();
      }, 2500);
    }
  });

  logo.src = "imgs/WhiteLogo.png";

  function pauseScroll() {
    smoother.paused(true);
  }

  function resumeScroll() {
    smoother.paused(false);
  }

  function menuShow() {
    menuMobile.classList.add("show");
    menuIconMobile.classList.add("show");
    textLogo.classList.add("show");
    logo.src = "imgs/BlackLogo.png";
    liText.classList.add("show");
    liText2.classList.add("show");
    liText3.classList.add("show");
    liText4.classList.add("show");
    pauseScroll();
    setTimeout(() => {
      menuIconMobile.classList.add("showOff");
    }, 100);
    setTimeout(() => {
      menuIconMobileClose.classList.add("show");
    }, 300);
  }

  function menuRemoveShow() {
    setTimeout(() => {
      menuIconMobileClose.classList.remove("show");
      if (!contactPageContainer.classList.contains("show")) {
        resumeScroll();
      }
    }, 100);
    menuMobile.classList.remove("show");
    liText.classList.remove("show");
    liText2.classList.remove("show");
    liText3.classList.remove("show");
    liText4.classList.remove("show");
    setTimeout(() => {
      if (!contactPageContainer.classList.contains("show")) {
        menuIconMobile.classList.remove("show");
        textLogo.classList.remove("show");
        logo.src = "imgs/WhiteLogo.png";
      }
    }, 600);
    setTimeout(() => {
      menuIconMobile.classList.remove("showOff");
    }, 500);
  }

  if (menuIconMobile) {
    menuIconMobile.addEventListener("click", () => {
      menuShow();
    });
  }

  if (menuIconMobileClose) {
    menuIconMobileClose.addEventListener("click", () => {
      menuRemoveShow();
    });
  }

  function contactPageShow() {
    contactPageContainer.classList.add("show");
    menuIconMobile.classList.add("show");
    textLogo.classList.add("show");
    logo.src = "imgs/BlackLogo.png";
    pauseScroll();
  }

  if (homeBtn) {
    homeBtn.addEventListener("click", () => {
      menuRemoveShow();
      loadingScreenMenuShow();
      setTimeout(() => {
        loadingScreenMenuOff();
      }, 1500);
      contactPageRemoveShow();
    });
  }

  if (contactBtn) {
    contactBtn.addEventListener("click", () => {
      menuRemoveShow();
      loadingScreenMenuShow();
      setTimeout(() => {
        loadingScreenMenuOff();
      }, 1500);
      setTimeout(() => {
        contactPageShow();
      }, 200);
    });
  }

  if (worksBtn) {
    worksBtn.addEventListener("click", () => {
      menuRemoveShow();
      loadingScreenMenuShow();
      setTimeout(() => {
        loadingScreenMenuOff();
      }, 1500);
      contactPageRemoveShow();
    });
  }

  function contactPageRemoveShow() {
    contactPageContainer.classList.remove("show");
    resumeScroll();
  }

  function loadingScrenShowHome() {
    loadingScreen.classList.add("show");
    pauseScroll();
    setTimeout(() => {
      textLoading1.classList.add("show");
      textLoading2.classList.add("show");
      textWait.classList.add("show");
    }, 200);
    setTimeout(() => {
      content.classList.add("show");
      loadingScreen.classList.add("showOff");
      resumeScroll();
    }, 3500);
  }

  function loadingScrenShow() {
    loadingScreenProject.classList.add("show");
    setTimeout(() => {
      textLoading3.classList.add("show");
      textLoading4.classList.add("show");
      textWait2.classList.add("show");
    }, 200);
    setTimeout(() => {
      content.classList.add("show");
      loadingScreenProject.classList.add("showOff");
    }, 2500);
  }

  function loadingScrenShowOff() {
    loadingScreenProject.classList.remove("show");
    textLoading3.classList.remove("show");
    textLoading4.classList.remove("show");
    textWait2.classList.remove("show");
    loadingScreenProject.classList.remove("showOff");
  }

  loadingScrenShowHome();

  function loadingScreenMenuShow() {
    loadingScreenMenu.classList.add("show");
    setTimeout(() => {
      loadingScreenMenu.classList.add("showOff");
    }, 900);
  }

  function loadingScreenMenuOff() {
    loadingScreenMenu.classList.remove("show");
    loadingScreenMenu.classList.remove("showOff");
  }

  function ToggleProject(projectData) {
    let anyProjectPageOpen = false;

    img1.src = projectData.img1;
    img2.src = projectData.img2;
    img3.src = projectData.img3;
    MblImg1.src = projectData.MblImg1;
    MblImg2.src = projectData.MblImg2;
    MblImg3.src = projectData.MblImg3;
    MblImg4.src = projectData.MblImg4;
    MblImg5.src = projectData.MblImg5;
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
      arrowLeft.classList.add("show");
      finalHero.style.position = "absolute";
      logo.src = "imgs/WhiteLogo.png";
    } else {
      mainPage.classList.add("show");
      logo.src = "imgs/BlackLogo.png";
    }

    if (arrowLeft) {
      arrowLeft.addEventListener("click", () => {
        loadingScrenShow();
        setTimeout(() => {
          loadingScrenShowOff();
        }, 3700);
        setTimeout((push = true) => {
          projectPage.classList.remove("show");
          mainPage.classList.remove("showOff");
          arrowLeft.classList.remove("show");
          if (push) history.pushState({ page: "home" }, "", "/");
          setTimeout(() => {
            gsap.to(window, {
              scrollTo: savedScroll,
              duration: 0.5,
              ease: "power1.inOut",
            });
          }, 200);
          setTimeout(() => {
            finalHero.style.position = "absolute";
            ScrollTrigger.refresh();
          }, 1000);
        }, 1500);
      });
    }
  }

  // Project page data
  const pages = {
    project1: {
      btn: document.getElementById("project1-btn"),
      img1: "https://res.cloudinary.com/dabshzrnj/image/upload/v1750195760/WoodeMainPoster_kdizxv.png",
      img2: "https://res.cloudinary.com/dabshzrnj/image/upload/w_1400,h_700,c_fill/WhatsApp_Image_2025-05-09_at_1.46.39_PM_rqizgy.jpg",
      img3: "https://res.cloudinary.com/dabshzrnj/image/upload/w_1400,h_700,c_fill/productPage_v4hg2v.png",
      MblImg1: "imgs/WoodeHomeMockup.png",
      MblImg2: "imgs/WoodeSideMockup.png",
      MblImg3: "imgs/WoodeContactMockup.png",
      MblImg4: "imgs/WoodeCartMockup.png",
      MblImg5: "imgs/WoodeProductMockup.png",
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
      img1: "https://res.cloudinary.com/dabshzrnj/image/upload/v1750195633/coffeeMainPoster_upw9it.png",
      img2: "https://res.cloudinary.com/dabshzrnj/image/upload/w_1400,h_700,c_fill/Screenshot_2025-05-09_at_13-48-51_Coddee_Coffing_ujpc1a.png",
      img3: "https://res.cloudinary.com/dabshzrnj/image/upload/w_1400,h_700,c_fill/Screenshot_2025-05-09_at_13-49-12_Coddee_Coffing_bjpskn.png",
      MblImg1: "imgs/coffeeHomeMockup.png",
      MblImg2: "imgs/coffeeFindUsMockup.png",
      MblImg3: "imgs/coffeeProductsMockup.png",
      MblImg4: "imgs/coffeeTableMockup.png",
      MblImg5: "imgs/coffeeMenuMockup.png",
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
      img1: "https://res.cloudinary.com/dabshzrnj/image/upload/v1750196212/cloudParisPoster_2_e4hfma.png",
      img2: "https://res.cloudinary.com/dabshzrnj/image/upload/w_1400,h_700,c_fill/CloudCatalog_zh5wr4.png",
      img3: "https://res.cloudinary.com/dabshzrnj/image/upload/w_1400,h_700,c_fill/cloudParisSearch_juf62r.png",
      MblImg1:
        "https://res.cloudinary.com/dabshzrnj/image/upload/v1750354370/ComingSoon_fcbofv.png",
      MblImg2:
        "https://res.cloudinary.com/dabshzrnj/image/upload/v1750354370/ComingSoon_fcbofv.png",
      MblImg3:
        "https://res.cloudinary.com/dabshzrnj/image/upload/v1750354370/ComingSoon_fcbofv.png",
      MblImg4:
        "https://res.cloudinary.com/dabshzrnj/image/upload/v1750354370/ComingSoon_fcbofv.png",
      MblImg5:
        "https://res.cloudinary.com/dabshzrnj/image/upload/v1750354370/ComingSoon_fcbofv.png",
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
      img1: "https://res.cloudinary.com/dabshzrnj/image/upload/v1750195817/cafePoster_nkog9s.png",
      img2: "https://res.cloudinary.com/dabshzrnj/image/upload/w_1400,h_700,c_fill/cafeCatalog_uw3tey.png",
      img3: "https://res.cloudinary.com/dabshzrnj/image/upload/w_1400,h_700,c_fill/aboutCafe_sctelt.png",
      MblImg1:
        "https://res.cloudinary.com/dabshzrnj/image/upload/v1750354370/ComingSoon_fcbofv.png",
      MblImg2:
        "https://res.cloudinary.com/dabshzrnj/image/upload/v1750354370/ComingSoon_fcbofv.png",
      MblImg3:
        "https://res.cloudinary.com/dabshzrnj/image/upload/v1750354370/ComingSoon_fcbofv.png",
      MblImg4:
        "https://res.cloudinary.com/dabshzrnj/image/upload/v1750354370/ComingSoon_fcbofv.png",
      MblImg5:
        "https://res.cloudinary.com/dabshzrnj/image/upload/v1750354370/ComingSoon_fcbofv.png",
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
      img1: "https://res.cloudinary.com/dabshzrnj/image/upload/v1750196021/CalculatorPoster_ivdn92.png",
      img2: "https://res.cloudinary.com/dabshzrnj/image/upload/w_1400,h_700,c_fill/MenuCalc_rj2cxi.png",
      img3: "https://res.cloudinary.com/dabshzrnj/image/upload/w_1400,h_700,c_fill/WhiteThemeCalc_bd4rh6.png",
      MblImg1:
        "https://res.cloudinary.com/dabshzrnj/image/upload/v1750354370/ComingSoon_fcbofv.png",
      MblImg2:
        "https://res.cloudinary.com/dabshzrnj/image/upload/v1750354370/ComingSoon_fcbofv.png",
      MblImg3:
        "https://res.cloudinary.com/dabshzrnj/image/upload/v1750354370/ComingSoon_fcbofv.png",
      MblImg4:
        "https://res.cloudinary.com/dabshzrnj/image/upload/v1750354370/ComingSoon_fcbofv.png",
      MblImg5:
        "https://res.cloudinary.com/dabshzrnj/image/upload/v1750354370/ComingSoon_fcbofv.png",
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
      project.btn.addEventListener("click", (push = true) => {
        loadingScrenShow();
        if (push) history.pushState({ page: "projects" }, "", "/projects");
        setTimeout(() => {
          loadingScrenShowOff();
        }, 3700);
        setTimeout(() => {
          savedScroll = ScrollSmoother.get().scrollTop();
          setTimeout(() => {
            gsap.to(window, {
              scrollTo: 0,
              duration: 0.5,
              ease: "power1.inOut",
            });
            finalHero.style.position = "absolute";
          }, 100);
          ToggleProject(project);
        }, 1000);
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

  // Desktop text animation
  let DesktopTextAnim = gsap.to(DesktopTitle, {
    xPercent: -100,
    repeat: -1,
    duration: 6,
    ease: "linear",
  });

  // Mobile text animation
  let MobileTextAnim = gsap.to(MobileTitle, {
    xPercent: -100,
    repeat: -1,
    duration: 6,
    ease: "linear",
  });

  function AddFinalHeroShow() {
    FinalHeroContent.classList.add("show");
    FinalHeroOnepartScreen.classList.add("show");
    FinalHeroTwoPartScreen.classList.add("show");
    FinalHeroText.classList.add("show");
    FinalHeroIntroText.classList.add("show");
    resumeBtnContainer.classList.add("show");
    ResumeDownloadBtn1.classList.add("show");
    ResumeDownloadBtn2.classList.add("show");

    const leaveTl = gsap.timeline();
    leaveTl
      .to(el, {
        duration: 0.5,
        text: "",
        ease: "none",
      })
      .to(el, {
        duration: 1,
        text: "Luiz Gustavo",
        ease: "none",
      });
  }

  let heroTimeout;

  function CloseFinalHeroShow() {
    FinalHeroContent.classList.remove("show");
    FinalHeroOnepartScreen.classList.remove("show");
    FinalHeroTwoPartScreen.classList.remove("show");
    FinalHeroText.classList.remove("show");
    FinalHeroIntroText.classList.remove("show");
    resumeBtnContainer.classList.remove("show");
    ResumeDownloadBtn1.classList.remove("show");
    ResumeDownloadBtn2.classList.remove("show");

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
            scrollSpacer.classList.add("removeShow");
            setTimeout(() => {
              ScrollTrigger.refresh();
            }, 100);
            AddFinalHeroShow();
          },
          onEnterBack: () => {
            scrollSpacer.classList.remove("removeShow");
            clearTimeout(heroTimeout);
            CloseFinalHeroShow();
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
        duration: 1.2,
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

  // Parllax effects
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

  gsap.set("#WorkTitleCase", {
    y: 130,
  });

  gsap.to("#WorkTitleCase", {
    y: -390,
    scrollTrigger: {
      trigger: ".work-container",
      start: "top 100%",
      scrub: true,
    },
  });

  gsap.set("#interactBallon1", {
    y: 0,
  });

  gsap.to("#interactBallon1", {
    y: -150,
    scrollTrigger: {
      trigger: ".projects-show",
      start: "top top",
      scrub: true,
    },
  });

  gsap.set("#interactBallon2", {
    y: 0,
  });

  gsap.to("#interactBallon2", {
    y: -150,
    scrollTrigger: {
      trigger: ".projects-show",
      start: "top top",
      scrub: true,
    },
  });

  gsap.set("#interactBallon3", {
    y: 0,
  });

  gsap.to("#interactBallon3", {
    y: -150,
    scrollTrigger: {
      trigger: ".projects-show",
      start: "top top",
      scrub: true,
    },
  });

  gsap.set("#projectContent1", {
    y: 0,
  });

  gsap.to("#projectContent1", {
    y: -50,
    scrollTrigger: {
      trigger: ".project1",
      start: "top 20%",
      scrub: true,
    },
  });

  gsap.set("#projectContent2", {
    y: 0,
  });

  gsap.to("#projectContent2", {
    y: -50,
    scrollTrigger: {
      trigger: ".project2",
      start: "top 20%",
      scrub: true,
    },
  });

  gsap.set("#projectContent3", {
    y: 0,
  });

  gsap.to("#projectContent3", {
    y: -50,
    scrollTrigger: {
      trigger: ".project3",
      start: "top 20%",
      scrub: true,
    },
  });

  gsap.set("#projectContent4", {
    y: 0,
  });

  gsap.to("#projectContent4", {
    y: -50,
    scrollTrigger: {
      trigger: ".project4",
      start: "top 20%",
      scrub: true,
    },
  });

  gsap.set("#projectContent5", {
    y: 0,
  });

  gsap.to("#projectContent5", {
    y: -50,
    scrollTrigger: {
      trigger: ".project5",
      start: "top 20%",
      scrub: true,
    },
  });

  // Cursor effect
  document.addEventListener("mousemove", (e) => {
    spotlight.style.left = `${e.clientX}px`;
    spotlight.style.top = `${e.clientY}px`;
  });

  document.querySelectorAll(".scroll-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const id = link.getAttribute("data-scroll");
      scrollToId(id);
    });
  });

  function scrollToId(id) {
    const element = document.querySelector(`#${id}`);
    if (element) {
      gsap.to(window, {
        scrollTo: element,
        duration: 0.5,
        ease: "power1.inOut",
      });
    }
  }
});
