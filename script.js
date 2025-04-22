document.addEventListener("DOMContentLoaded", () => {
  const spotlight = document.getElementById("cursor-spotlight");
  const mainPage = document.getElementById("main-page");
  const navContainer = document.getElementById("nav-container");
  const logo = document.querySelector("#logo img");
  const arrowLeft = document.getElementById("arrowLeft");

  mainPage.classList.add("show"); // esconde a home

  let scroll;

  const pages = {
    project1: {
      btn: document.getElementById("project1-btn"),
      img1: "imgs/HomeWoode.png",
      img2: "imgs/catalog.png",
      img3: "imgs/productPage.png",
      textTime: "1 Month,",
      textData: "Launched in April 2025",
      video: "imgs/woodeVideo.mp4",
    },
    project2: {
      btn: document.getElementById("project2-btn"),
      img1: "imgs/HomeCloudParis.png",
      img2: "imgs/CloudCatalog.png",
      img3: "imgs/cloudParisSearch.png",
      textTime: "7 days,",
      textData: "Launched in March 2025",
      video: "imgs/cloudParisvideo.mp4",
    },
    project3: {
      btn: document.getElementById("project3-btn"),
      img1: "imgs/HomeCafe.png",
      img2: "imgs/cafeCatalog.png",
      img3: "imgs/aboutCafe.png",
      textTime: "7 days,",
      textData: "Launched in February 2025",
      video: "imgs/cafeVideo.mp4",
    },
    project4: {
      btn: document.getElementById("project4-btn"),
      img1: "imgs/HomeCalc.png",
      img2: "imgs/MenuCalc.png",
      img3: "imgs/WhiteThemeCalc.png",
      textTime: "1 Month,",
      textData: "Launched in January 2025",
      video: "imgs/CalcVideo.mp4",
    },
  };

  // Element references
  const projectPage = document.getElementById("project-page");
  const img1 = document.getElementById("projectImage1");
  const img2 = document.getElementById("projectImage2");
  const img3 = document.getElementById("projectImage3");
  const textTime = document.getElementById("text1");
  const textData = document.getElementById("text2");
  const video = document.getElementById("projectVideo");

  let scrollPosition = 0;

  function ToggleProject(projectData) {
    let anyProjectPageOpen = false;
    scrollPosition = scroll.scroll.instance.scroll.y;
    scroll.scrollTo(0, { duration: 1 });

    img1.src = projectData.img1;
    img2.src = projectData.img2;
    img3.src = projectData.img3;
    video.src = projectData.video;
    projectPage.classList.add("show");
    textTime.innerHTML = projectData.textTime;
    textData.innerHTML = projectData.textData;

    if (projectPage.classList.contains("show")) {
      anyProjectPageOpen = true;
    } else {
      anyProjectPageOpen = false;
    }

    if (anyProjectPageOpen) {
      mainPage.classList.remove("show");
      navContainer.classList.add("show");
      logo.src = "imgs/WhiteLogo.png";
    } else {
      mainPage.classList.add("show");
      navContainer.classList.remove("show");
      logo.src = "imgs/BlackLogo.png";
    }

    if (arrowLeft) {
      arrowLeft.addEventListener("click", () => {
        projectPage.classList.remove("show");
        mainPage.classList.add("show");
        navContainer.classList.remove("show");
        logo.src = "imgs/BlackLogo.png";
        scroll.scrollTo(scrollPosition, { duration: 3 });
      });
    }
  }

  Object.values(pages).forEach((project) => {
    if (project.btn) {
      project.btn.addEventListener("click", () => ToggleProject(project));
    }
  });

  document.addEventListener("mousemove", (e) => {
    spotlight.style.left = `${e.clientX}px`;
    spotlight.style.top = `${e.clientY}px`;
  });

  window.addEventListener("load", () => {
    // Inicialize o LocomotiveScroll
    scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      inertia: 0.8,
      lerp: 0.1,
      multiplier: 2,
    });

    // Pegando todos os links da navbar
    document.querySelectorAll(".navbar-items a").forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault(); // Evita o comportamento padrão do navegador

        let targetId = this.getAttribute("href"); // Pega o ID do destino
        let targetElement = document.querySelector(targetId); // Encontra o elemento no DOM

        if (targetElement) {
          scroll.scrollTo(targetElement); // Usa Locomotive Scroll para ir até o destino
        }
      });
    });

    // Condicional para o GSAP não rodar no mobile
    if (window.innerWidth > 768) {
      // ou o valor que você quiser como breakpoint
      gsap.registerPlugin(ScrollTrigger);

      // Integração do Locomotive com o ScrollTrigger
      ScrollTrigger.scrollerProxy("[data-scroll-container]", {
        scrollTop(value) {
          return arguments.length
            ? scroll.scrollTo(value, 0, 0)
            : scroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: document.querySelector("[data-scroll-container]").style
          .transform
          ? "transform"
          : "fixed",
      });

      // Atualiza o ScrollTrigger quando o Locomotive scrollar
      scroll.on("scroll", ScrollTrigger.update);
      ScrollTrigger.addEventListener("refresh", () => scroll.update());
      ScrollTrigger.refresh();

      // Cria a animação
      gsap.to(".specialties-container ul li", {
        opacity: 1,
        y: 0,
        duration: 0.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".specialties-container",
          start: "top center+=100",
          end: "bottom center+=100",
          scrub: true,
          scroller: "[data-scroll-container]", // importante para funcionar com locomotive
        },
      });
    }
  });
});
