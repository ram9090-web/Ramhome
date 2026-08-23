const PASSWORD = "Ram9090";

const loginScreen =
    document.getElementById("loginScreen");

const mainContent =
    document.getElementById("mainContent");

const passwordInput =
    document.getElementById("passwordInput");

const errorMessage =
    document.getElementById("errorMessage");


function checkPassword() {

    if (passwordInput.value === PASSWORD) {

        loginScreen.style.display = "none";
        mainContent.classList.remove("hidden");

        sessionStorage.setItem("ramkrishnaAccess", "granted");

    } else {

        errorMessage.textContent =
            "Incorrect password.";

        passwordInput.value = "";
        passwordInput.focus();

    }
}


/* Press Enter to open */
passwordInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        checkPassword();
    }

});


/* Remember access during this browser session */
if (sessionStorage.getItem("ramkrishnaAccess") === "granted") {

    loginScreen.style.display = "none";
    mainContent.classList.remove("hidden");

}


/* ---------- TOOL SEARCH ---------- */

const searchInput =
    document.getElementById("searchInput");

const toolCards =
    document.querySelectorAll(".tool-card");


searchInput.addEventListener("input", function() {

    const searchText =
        this.value.toLowerCase().trim();

    toolCards.forEach(function(card) {

        const text =
            card.innerText.toLowerCase();

        card.style.display =
            text.includes(searchText) ? "" : "none";

    });

});
