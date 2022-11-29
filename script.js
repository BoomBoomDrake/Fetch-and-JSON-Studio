window.addEventListener("load", function () {
  function addSkills(skillsArr) {
    let result = "";
    skillsArr.map((skill) => {
      result += `${skill}, `;
    });
    return result.slice(0, result.length - 2);
  }

  function activeCheck(active) {
    if (active) return `<span style="color: green"> ${active}</span>`;
    return active;
  }

  const container = document.getElementById("container");
  let title = document.querySelector("h1");
  let astronautCount = 0;

  fetch(
    "https://handlers.education.launchcode.org/static/astronauts.json"
  ).then(function (response) {
    response.json().then(function (json) {
      json.sort((a, b) => (a.hoursInSpace > b.hoursInSpace ? -1 : 1));
      json.map((astro) => {
        // const astronaut = document.createElement("div");
        // astronaut.classList.add("astronaut");
        // const bio = document.createElement("div");
        // bio.classList.add("bio");
        // const name = document.createElement("h3");
        // const list = document.createElement("ul");
        // const hours = document.createElement("li");
        // const active = document.createElement("li");
        // const skills = document.createElement("li");
        // const image = document.createElement("img");
        // image.classList.add("avatar");

        // name.textContent = `${astro.firstName} ${astro.lastName}`;
        // hours.textContent = `Hours in space: ${astro.hoursInSpace}`;
        // active.innerHTML = "Active: " + activeCheck(astro.active);
        // skills.textContent = `Skills: ${addSkills(astro.skills)}`;
        // image.setAttribute("src", `${astro.picture}`);

        // list.appendChild(hours);
        // list.appendChild(active);
        // list.appendChild(skills);

        // bio.appendChild(name);
        // bio.appendChild(list);
        // astronaut.appendChild(bio);
        // astronaut.appendChild(image);
        // container.appendChild(astronaut);

        astronautCount++;
        title.innerHTML = `Astronauts: ${astronautCount}`;
        container.innerHTML += `
            <div class="astronaut">
                <div class="bio">
                    <div>${astro.firstName} ${astro.lastName}</div>
                    <ul>
                        <li>Hours in space: ${astro.hoursInSpace}</li>
                        <li>Active: ${activeCheck(astro.active)}</li>
                        <li>Skills: ${addSkills(astro.skills)}
                    </ul>
                </div>
                <img class="avatar" src="${astro.picture}" />
            </div>
        `;
      });
    });
  });
});
