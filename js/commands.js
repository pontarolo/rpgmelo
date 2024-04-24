const input = document.getElementById('cli');

input.addEventListener('keypress', function (event) {
    if (input.value === "Type 'help' to print all the commands") {
        input.value = '';
    } else if (event.key === "Enter" && input.value === "help") {
        window.alert("help\t print all the commands.\nblog\t redirects to my blog.\nresume\t shows my resume.\nlinkedin\t redirects to my linkedin profile.\ngithub\tredirects to my github profile.\ngoodreads\tredirects to my goodreads profile.\nemail\tto contact me.");
    } else if (event.key === "Enter" && input.value === "blog") {
        location.href = "archives/index.html";
    } else if (event.key === "Enter" && input.value == "resume") {
        location.href = "";
    } else if (event.key === "Enter" && input.value == "linkedin") {
        location.href = "https://www.linkedin.com/in/rodrigo-granemann/";
    } else if (event.key === "Enter" && input.value == "github") {
        location.href = "https://github.com/pontarolo";
    } else if (event.key === "Enter" && input.value == "goodreads") {
        location.href = "https://www.goodreads.com/user/show/177224558-rodrigo-melo";
    } else if (event.key === "Enter" && input.value == "email") {
        location.href = "mailto:rodrigo@pontarolo.org";
    }
});