
      document.querySelectorAll("header nav a").forEach(link => {
        link.addEventListener("click", event => {
          event.preventDefault();
          document.querySelector(link.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
          });
          document.querySelectorAll("header nav a").forEach(navLink => {
            navLink.classList.remove("active");
          });
          link.classList.add("active");
        });
      });
      document.getElementById("contactForm").addEventListener("submit", function(e) {
        e.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        if (!email.includes("@")) {
          alert("Please enter a valid email address.");
          return;
        }
        if (message.length < 10) {
          alert("Message too short.");
          return;
        }
        const message = document.getElementById("message").value.trim();
        if (name && email.includes("@") && message.length >= 10) {
          alert("Form submitted successfully!");
        } else {
          alert("Please fill all fields correctly.");
        }
      });