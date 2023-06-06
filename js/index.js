/* MODULE */

const images = document.querySelectorAll(".portfolioImg");
function modalBuilder() {
    for (let i = 0; i < images.length; i++) {
        const image = images[i];
        image.addEventListener("click", function () {
            const container = document.querySelector(".projectContainer");
            const dialog = document.createElement("dialog");
            dialog.classList.add("portModal");
            dialog.style.display = "block";
            container.append(dialog);
            dialog.append(image.cloneNode(true));

            document.addEventListener("click", function (event) {
                if (
                    !container.contains(event.target) &&
                    !image.contains(event.target)
                ) {
                    dialog.remove();
                }
            });
        });
    }
}

modalBuilder();