const toggleTheme = document.getElementById("toggleTheme");
    
const rootHtml = document.documentElement;

//funçao para alterar o tema
function changeTheme () {
    const currenTheme = rootHtml.getAttribute("data-theme");

    currenTheme === "dark" ? rootHtml.setAttribute("data-theme","light") : rootHtml.setAttribute("data-theme","dark");
    
    toggleTheme.classList.toggle("bi-sun");
    toggleTheme.classList.toggle("bi-moon-stars");

}

toggleTheme.addEventListener("click", changeTheme);
//fim da funça mudar o tema
