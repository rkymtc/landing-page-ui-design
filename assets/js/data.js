// posts data
const data = [
    {
        id: 1,
        category: "web",
        design: ("./assets/img/card-first.png"),
        profile: ("./assets/img/photo.png"),
        author: "Jenny Molla",
        title: "Web",
        viewTime: "lastest",
        tool: "sketch",
        toolImg: ("./assets/img/sketch.svg"),
        code: 25,
        appreciate: 25,
    },
    {
        id: 2, 
        category: "web",
        design: ("./assets/img/card-second.png"),
        profile: ("./assets/img/photo.png"),
        author: "Jenny Mollas",
        title: "Web",
        viewTime: "popular",
        tool: "sketch",
        toolImg: ("./assets/img/sketch.svg"),
        code: 25,
        appreciate: 25,
    },
    {
        id: 3,
        category: "web",
        design: ("./assets/img/card-third.png"),
        profile: ("./assets/img/photo.png"),
        author: "Jenny Molla",
        title: "Web",
        viewTime: "lastest",
        tool: "sketch",
        toolImg: ("./assets/img/sketch.svg"),
        code: 12,
        appreciate: 12,
        
    },
    {
        id: 4, 
        category: "mobile",
        design: ("./assets/img/card-fifth.png"),
        profile: ("./assets/img/photo-first.png"),
        author: "Lorenz",
        title: "Mobile App",
        viewTime: "popular",
        tool: "figma",
        toolImg: ("./assets/img/figma.svg"),
        code: 24,
        appreciate: 24,
      
    },
    {
        id: 5, 
        category: "uı kit",
        design: ("./assets/img/card-sixth.png"),
        profile: ("./assets/img/photo-first.png"),
        author: "Nick Mehta",
        title: "Web 3D illustration",
        viewTime: "lastest",
        tool: "adobe-ps",
        toolImg: ("./assets/img/adobe-ps.svg"),
        code: 77,
        appreciate: 69,
       
    },
    {
        id: 6,
        category: "uı kit",
        design: ("./assets/img/card-seventh.png"),
        profile: ("./assets/img/photo-first.png"),
        author: "Test",
        title: "Web 3D illustration",
        viewTime: "popular",
        tool: "adobe-xd",
        toolImg: ("./assets/img/adobe-xd.svg"),
        code: 55,
        appreciate: 88,
        
    },
    {
        id: 7,
        category: "coded",
        design: ("./assets/img/card-eighth.png"),
        profile: ("./assets/img/photo-second.png"),
        author: "Test",
        title: "Coded",
        viewTime: "lastest",
        tool: "studio",
        toolImg: ("./assets/img/studio.svg"),
        code: 72,
        appreciate: 114,
        
    },
    {
        id: 8,
        category: "coded",
        design: ("./assets/img/card-ninth.png"),
        profile: ("./assets/img/photo-second.png"),
        author: "Saidur Rahman",
        title: "Coded",
        viewTime: "popular",
        tool: "adobe-xd",
        toolImg: ("./assets/img/adobe-xd.svg"),
        code: 8,
        appreciate: 114,
        
    },
    {
        id: 9,
        category: "web",
        design: ("./assets/img/card-fourth.png"),
        profile: ("./assets/img/photo-second.png"),
        author: "John Rocha",
        title: "Web",
        viewTime: "lastest",
        tool: "figma",
        toolImg: ("./assets/img/figma.svg"),
        code: 76,
        appreciate: 5,
        
    }
];
const myItems = document.querySelector('.design-card-wrapper');
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
    myItems.innerHTML = showInHtml.join(""); 
    // If you don’t stipulate how to perform the join (which is what toString is doing), it will default to a comma.
});
