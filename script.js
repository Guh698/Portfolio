gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

document.addEventListener("DOMContentLoaded", () => {
  const smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1,
    smoothTouch: 0.1,
  });

  let savedScroll = 0;

  const spotlight = document.getElementById("cursor-spotlight");
  const mainPage = document.getElementById("main-page");
  const navContainer = document.getElementById("nav-container");
  const logo = document.querySelector("#logo img");
  const arrowLeft = document.getElementById("arrowLeft");
  const backToTop = document.getElementById("backToTop");

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
        mainPage.classList.remove("showOff");
        navContainer.classList.remove("show");
        logo.src = "imgs/BlackLogo.png";
        ScrollSmoother.get().scrollTo(savedScroll, true);
      });
    }
  }

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
        "Using Gsap ScrollTrigger and Locomotive Scroll, animations are seamlessly integrated into the page movement, creating a dynamic and engaging visual experience. The responsive design ensures that the layout adapts perfectly to different devices, maintaining the sophistication and style of the furniture store.",
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

  // Element references
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

  Object.values(pages).forEach((project) => {
    if (project.btn) {
      project.btn.addEventListener("click", () => {
        savedScroll = ScrollSmoother.get().scrollTop();
        ScrollSmoother.get().scrollTo(0, true);
        ToggleProject(project);
      });
    }
  });

  document.addEventListener("mousemove", (e) => {
    spotlight.style.left = `${e.clientX}px`;
    spotlight.style.top = `${e.clientY}px`;
  });

  function scrollToId(id) {
    const element = document.querySelector(`#${id}`);
    if (element) {
      smoother.scrollTo(element, true, "start");
    }
  }

  document.querySelectorAll(".scroll-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // Evita o comportamento padrão do link
      const id = link.getAttribute("data-scroll"); // Pega o ID do atributo data-scroll
      scrollToId(id); // Chama a função com o ID
    });
  });
});
