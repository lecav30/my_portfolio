const select = (el, all = false) => {
  el = el.trim();
  if (all) {
    return [...document.querySelectorAll(el)];
  } else {
    return document.querySelector(el);
  }
};

bars = select(".bars");
bars.addEventListener("click", () => {
  navbar = select(".nav-bar");
  navbar.classList.toggle("active");
});

const onscroll = (el, listener) => {
  el.addEventListener("scroll", listener);
};

navbar_links = select(".scrollto", true);

const navbar_links_active = () => {
  let position = window.scrollY + 200;
  navbar_links.forEach((navbar_link) => {
    if (!navbar_link.hash) return;
    let section = select(navbar_link.hash);
    if (!section) return;
    if (
      position >= section.offsetTop &&
      position <= section.offsetTop + section.offsetHeight
    ) {
      navbar_link.classList.add("active");
    } else {
      navbar_link.classList.remove("active");
    }
  });
};
window.addEventListener("load", navbar_links_active);
onscroll(document, navbar_links_active);

const card_toggle = (tech) => {
  my_tech = select(`#${tech}`);
  my_tech.addEventListener("click", () => {
    my_tech.classList.add("remove-hover");

    technologies = select(`#${tech}-technologies`);
    technologies.classList.toggle("hidden");

    description = select(`#${tech}-description`);
    description.classList.toggle("hidden");

    setTimeout(() => my_tech.classList.remove("remove-hover"), 1000);
  });
};

card_toggle("backend");
card_toggle("frontend");
card_toggle("mobile");

const contactForm = select(".contact-form");
let name = select("#POST-name");
let email = select("#POST-email");
let subject = select("#POST-subject");
let message = select("#POST-message");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let formData = {
    name: name.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  };

  console.log(formData);

  let xhr = new XMLHttpRequest();

  xhr.open("POST", "/");
  xhr.setRequestHeader("content-type", "application/json");

  xhr.onload = function () {
    console.log(xhr.responseText);
    if (xhr.responseText == "success") {
      alert("Email sent");
      name.value = "";
      email.value = "";
      subject.value = "";
      message.value = "";
    } else {
      alert("Something went wrong!");
    }
  };

  xhr.send(JSON.stringify(formData));
});
