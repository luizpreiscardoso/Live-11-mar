const episodes = [
  {
    img: "./assets/images/episodes/episode1.svg",
    title: "When You're Lost in the Darkness",
    description:
      " In 2003, a mass fungal infection of mutated Cordyceps sparks a global pandemic. Joel flees with his daughter, Sarah, and brother, Tommy, from their Texas home; Sarah is killed by asoldier.",
  },

  {
    img: "./assets/images/episodes/episode2.svg",
    title: "Infected",
    description:
      " Two days before the worldwide outbreak, in Jakarta, Indonesia, the government shows an infected corpse to a mycologist, who tells them there is no cure or vaccine.",
  },
  {
    img: "./assets/images/episodes/episode3.svg",
    title: "Long, Long Time",
    description:
      " Joel and Ellie begin the hike to meet with Bill and Frank. Ellie sees evidence of the government's execution of innocents during the early days of the pandemic.",
  },
  {
    img: "./assets/images/episodes/episode4.svg",
    title: "Please Hold to My Hand",
    description:
      " Traveling through Missouri, Joel and Ellie are forced to take a detour through Kansas City, where they are ambushed.",
  },
];

//acesso a ul
const list = document.querySelector(".episodes-list");

//funcao para percorrer cada item de episodes
function addCard(data) {
  for (let i = 0; i < data.length; i++) {
    renderCard(data[i]);
  }
}

addCard(episodes);

function renderCard(data) {
  const listItem = document.createElement("li");
  listItem.classList.add("card");

  listItem.innerHTML = `
    <img src= ${data.img} />
    <div class="card-text">
      <h4> ${data.title}</h4>
      <p>
      ${data.description}
      </p>
    </div>
    `;

  list.appendChild(listItem);
}
