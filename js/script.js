function setFavicon() {
    const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const favicon = document.querySelector("link[rel='icon']");
    favicon.href = dark ? "img/logo-dark.theme.png" : "img/logo-light.theme.png";}
    setFavicon();
window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", setFavicon);

function ir(id) {
        document.getElementById(id).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
}
