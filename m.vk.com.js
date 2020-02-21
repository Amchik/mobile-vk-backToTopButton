async function update() {
    if (document.getElementById("__ex_a_top_link") == null) {
        let elem = document.createElement("a");
        elem.id = "__ex_a_top_link";
        elem.onclick = () => {
            window.scrollTo(0, 0);
        };
        elem.innerText = "Back to top";
        elem.style.position = "fixed";
        elem.style.color = "#3F8AE0";
        elem.style.fontFamily = "-apple-system,BlinkMacSystemFont,Roboto,Segoe UI,Segoe WP,Helvetica Neue,Lucida Grande,Verdana,Tahoma,Arial,sans-serif";
        document.getElementsByClassName("layout__header")[0].insertBefore(elem, document.getElementsByClassName("layout__header")[0].firstChild);
    }
    console.log("[m.vk.com Back to top button] Page updated.");
}
update();
