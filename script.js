document.addEventListener("DOMContentLoaded", function () {
  const getEl = (id) => document.getElementById(id);

  function renderHero() {
    const nameHTML = `${data.personal.name} <span class="text-2xl md:text-3xl text-gray-500 font-normal">${data.personal.nameInDevanagari}</span><span class="blinking-cursor">|</span>`;
    getEl("main-name").innerHTML = nameHTML;

    let i = 0;
    const tagline = data.personal.tagline;
    const speed = 50;
    function typeWriter() {
      if (i < tagline.length) {
        document.querySelector(".typed-text").textContent += tagline.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
    typeWriter();
  }

  function renderAbout() {
    getEl("profile-img").src = data.personal.profileImage;
    getEl("bio").innerHTML = data.personal.about;
  }

  function renderAchievements() {
    const container = getEl("projects-container");
    container.innerHTML = "";
    data.projects.forEach((ach) => {
      const hasValidLink = ach.link && ach.link !== "link";
      const detailItems = Array.isArray(ach.points) && ach.points.length
        ? ach.points
        : ach.details
          ? [ach.details]
          : [];

      const detailMarkup = detailItems.length
        ? `<ul class="mt-3 space-y-2 text-gray-300 list-disc pl-5">
              ${detailItems
                .map((point) => `<li class="leading-relaxed">${point}</li>`)
                .join("")}
          </ul>`
        : "";

      const scoreMarkup = ach.score ? `<p class="text-sm text-gray-500">${ach.score}</p>` : "";

      const cardMarkup = `
                <div class="data-card flex items-center gap-4">
                    <div class="flex-1">
                        <h3 class="text-xl font-bold text-accent">${ach.title}</h3>
                        ${detailMarkup}
                        ${scoreMarkup}
                    </div>
                    ${
                      hasValidLink
                        ? '<span class="project-card-cta">Open project →</span>'
                        : ""
                    }
                </div>
            `;

      if (hasValidLink) {
        container.innerHTML += `
                    <a href="${ach.link}" target="_blank" rel="noopener noreferrer" class="project-card-link">
                        ${cardMarkup}
                    </a>
                `;
      } else {
        container.innerHTML += `
                    <div class="project-card-link project-card-disabled">
                        ${cardMarkup}
                    </div>
                `;
      }
    });
  }

  function renderSkills() {
    const container = getEl("skills-container");
    container.innerHTML = "";
    for (const category in data.skills) {
      const skillCategory = data.skills[category];
      container.innerHTML += `
                <div>
                    <h3 class="text-lg font-bold text-gray-400 mb-2">-- ${
                      skillCategory.title
                    }</h3>
                    <div class="skill-code-block">
                        <span class="text-accent">$</span> ${skillCategory.list.join(
                          ", "
                        )}
                    </div>
                </div>
            `;
    }
  }

  function renderTimeline(containerId, timelineData) {
    const container = getEl(containerId);
    container.innerHTML = "";
    timelineData.forEach((item) => {
      const organization = item.company || item.institution || item.organization || "";
      const description = item.description || item.details || "";

      container.innerHTML += `
                <div class="timeline-entry">
                    <div class="md:grid grid-cols-12 gap-1">
                        <div class="col-span-3">
                            <p class="font-bold text-accent text-sm">${
                              item.duration
                            }</p>
                        </div>
                        <div class="col-span-9">
                            <h4 class="font-bold text-soft-white text-lg">${
                              item.role || item.degree
                            }</h4>
                            ${organization ? `<p class="text-gray-400 mb-2">${organization}</p>` : ""}
                            ${description ? `<p class="text-sm text-gray-500 leading-relaxed">${description}</p>` : ""}
                        </div>
                    </div>
                </div>
            `;
    });
  }

  function renderCertifications() {
    const list = getEl("certifications-list");
    list.innerHTML = "";
    data.certifications.forEach((cert) => {
      list.innerHTML += `
                <div class="data-card">
                    <h4 class="font-bold text-accent">${cert.name}</h4>
                    <p class="text-sm text-gray-400">Issuer: ${cert.issuer} &bull; Date: ${cert.date}</p>
                    <a class="text-xs text-gray-600 mt-1" href="${cert.link}" target="_blank">View Credential → </p>
                </div>
            `;
    });
  }

  function renderContact() {
    getEl("linkedin-link").href = data.personal.contact.linkedin;
    getEl("github-link").href = data.personal.contact.github;
    getEl("email-link").href = `mailto:${data.personal.contact.email}`;
  }

  renderHero();
  renderAbout();
  renderAchievements();
  renderSkills();
  renderTimeline("education-timeline", data.education);
  renderTimeline("volunteering-list", data.volunteering);
  renderCertifications();
  renderContact();
});
