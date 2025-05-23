document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit-button");
    submitButton.addEventListener("click", function (event) {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;
        const email = document.getElementById("email").value;
        const data = {
            username: username,
            password: password,
            email: email
        }

        if (password !== confirmPassword) {
            const jsonData = JSON.stringify(data);
            fetch("/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: jsonData
            })
            .then(response =>{
                //Handle response
            })


    const contactForm = document.getElementById('contact-form');
    if (loginForm) {
      loginForm.addEventListener("submit", function (event) {

          const username = document.getElementById("username").value;
          const password = document.getElementById("password").value;

          const params = new URLSearchParams();
          params.append("username", username);
          params.append("password", password);

          fetch("/login", {
              method: "POST",
              headers: {
                  "Content-Type": "application/x-www-form-urlencoded"
              },
              body: params,
              credentials: "same-origin" // sends cookies
          })
          .then(response => {
              if (response.redirected) {
                  window.location.href = response.url; // follow Spring's redirect
              } else if (response.status === 401 || response.status === 403) {
                  document.getElementById("errorMessage")?.classList.remove("hidden");
              } else {
                  // Might still redirect, depends on server config
                  window.location.href = "/upload.html";
              }
          })
          .catch(error => {
              console.error("Login error:", error);
              document.getElementById("errorMessage")?.classList.remove("hidden");
          });
      });
    }
  });
  
  function logout() {
    window.location.href = "/login.html";
  }

  function handleUpload() {
    const documentFile = document.getElementById('document').files[0];
    const photoFile = document.getElementById('photo').files[0];
    const videoFile = document.getElementById('video').files[0];

    if (!documentFile && !photoFile && !videoFile) {
        alert("Please select at least one file to upload.");
        return;
    }

    alert("Files uploaded successfully!");
    // Here you can add your file upload logic (e.g., sending the files to a server)
}