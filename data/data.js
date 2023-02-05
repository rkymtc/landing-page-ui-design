// posts data
const data = [
    {
        id: 1,
        profile: ("./assets/img/photo.png"),
        author: "Jenny Molla",
        title: "Web Card Design",
        viewTime: "lastest",
        tool: "sketch",
        toolImg: ("./assets/img/sketch.svg"),
        code: 25,
        appreciate: 25,
        category: "web",
        design: ("./assets/img/card-first.png")
    },
    {
        id: 2,
        profile: ("./assets/img/photo.png"),
        author: "Jenny Mollas",
        title: "Web Card Design",
        viewTime: "popular",
        tool: "sketch",
        toolImg: ("./assets/img/sketch.svg"),
        code: 25,
        appreciate: 25,
        category: "web",
        design: ("./assets/img/card-second.png")
    },
    {
        id: 3,
        profile: ("./assets/img/photo.png"),
        author: "Jenny Molla",
        title: "Web Card Design",
        viewTime: "lastest",
        tool: "sketch",
        toolImg: ("./assets/img/sketch.svg"),
        code: 12,
        appreciate: 12,
        category: "mobile",
        design: ("./assets/img/card-third.png")
    },
    {
        id: 4,
        profile: ("./assets/img/photo-first.png"),
        author: "Lorenz",
        title: "Mobile App",
        viewTime: "popular",
        tool: "figma",
        toolImg: ("./assets/img/figma.svg"),
        code: 24,
        appreciate: 24,
        category: "mobile",
        design: ("./assets/img/card-fifth.png")
    },
    {
        id: 5,
        profile: ("./assets/img/photo-first.png"),
        author: "Nick Mehta",
        title: "Web site / 3D illustration",
        viewTime: "lastest",
        tool: "adobe-ps",
        toolImg: ("./assets/img/adobe-ps.svg"),
        code: 77,
        appreciate: 69,
        category: "uı kit",
        design: ("./assets/img/card-sixth.png")
    },
    {
        id: 6,
        profile: ("./assets/img/photo-first.png"),
        author: "Test",
        title: "Hero header concept",
        viewTime: "popular",
        tool: "adobe-xd",
        toolImg: ("./assets/img/adobe-xd.svg"),
        code: 55,
        appreciate: 88,
        category: "uı kit",
        design: ("./assets/img/card-seventh.png")
    },
    {
        id: 7,
        profile: ("./assets/img/photo-second.png"),
        author: "Test",
        title: "Coded",
        viewTime: "lastest",
        tool: "studio",
        toolImg: ("./assets/img/studio.svg"),
        code: 72,
        appreciate: 114,
        category: "coded",
        design: ("./assets/img/card-eighth.png")
    },
    {
        id: 8,
        profile: ("./assets/img/photo-second.png"),
        author: "Saidur Rahman",
        title: "Dashboard",
        viewTime: "popular",
        tool: "adobe-xd",
        toolImg: ("./assets/img/adobe-xd.svg"),
        code: 8,
        appreciate: 114,
        category: "coded",
        design: ("./assets/img/card-ninth.png")
    },
    {
        id: 9,
        profile: ("./assets/img/photo-second.png"),
        author: "John Rocha",
        title: "Web Site- Hero",
        viewTime: "lastest",
        tool: "figma",
        toolImg: ("./assets/img/figma.svg"),
        code: 76,
        appreciate: 5,
        category: "web",
        design: ("./assets/img/card-fourth.png")
    }
];

const myİtems = document.querySelector('.design-card-wrapper');
window.addEventListener("DOMContentLoaded", function () {
    const showInHtml = data.map((project) => {
        return`<div class="design-card col-md-6 col-lg-4  my-4">
        <div class="design-card-image">
          <img src=${project.design} alt="design Image" class="design-card-preview" />
          <div class="design-card-sketch">
            <img src=${project.toolImg} alt="${project.tool}">
          </div>
        </div>

        <div class="design-card-detail">
          <div class="card-detail-profile">
            <img src="${project.profile}" alt="photo" />
            <span id="designer">by <strong id="strong">${project.author}</strong></span>
          </div>

          <div class="card-detail-count">
            <img src="assets/img/code.svg" alt="photo" />
            <span>${project.code}</span>
            <img src="assets/img/appreciate.svg" alt="photo" />
            <span>${project.appreciate}</span>
          </div>
        </div>
      </div>`
    })
    myİtems.innerHTML = showInHtml.join(""); 
    // If you don’t stipulate how to perform the join (which is what toString is doing), it will default to a comma.
});