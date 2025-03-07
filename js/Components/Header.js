export default class Header {
  constructor() {
    this.container = document.querySelector(".container");
    this.setHeader();
    this.headerFunction();
  }

  setHeader = () => {
    const header = document.createElement("header");
    header.innerHTML = `
        <section class="profile">
        <figure class="profile-picture">
            <img src="img/poza-cv.jpg" alt="">
        </figure>
        <article class="text">
            <h1>Văduva Melania Ancuța</h1>
            <p>SOFTWARE ENGINEER</p>
        </article>
        <ul>
            
            <li><a href="https://github.com/vaduva-anca" target="_blank"><i class="fab fa-github"></i></a></li>
            
            <li><a href="https://www.linkedin.com/in/melania-ancuta-vaduva-9299592b0/" target="_blank"><i class="fab fa-linkedin"></i></a></li>
        </ul>
    </section>
        `;
    this.container.appendChild(header);
  };

  headerFunction = () => {
    const profile = document.querySelector(".profile");

    window.addEventListener("load", function () {
      profile.style.transform = "scale(1)";
      profile.style.opacity = "1";
    });
  };
}
