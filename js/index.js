window.addEventListener("DOMContentLoaded", () => {
  const email = document.querySelector(".email"),
    pass = document.querySelector(".password"),
    docc = document.querySelector(".doc"),
    warn = document.querySelector(".warn"),
    navPassUI = document.querySelector(".passs"),
    loader = document.querySelector(".loader"),
        bbtn = document.querySelector( "form" );
    
    setTimeout( () => { 
        loader.style.opacity = 0;
        setTimeout( () => {
            loader.style.display = "none";
        }, 500)
    }, 2000 )

  bbtn.addEventListener("submit", (e) => {
    e.preventDefault();
    setTimeout(() => {
      alert("Parol va email qo'shildi");
      window.setTimeout(function () {
        window.location.reload();
      }, 1000);
    }, 2000);

    const user = {
      email: email.value,
      pass: pass.value,
    };

    e.target.reset();

    localStorage.setItem("user", JSON.stringify(user));
  });
  warn.textContent =
    " your email and password will not be deleted even you refresh the page because they are being saved in LocalStorage";

  const user = JSON.parse(localStorage.getItem("user"));
  docc.textContent = `your email: ${user.email}`;
  navPassUI.textContent = `your pass: ${user.pass}`;
});
