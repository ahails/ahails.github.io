(async () => {
    const res = (await fetch("https://api.github.com/repos/ahails/ahails.github.io/contents/photos", {
        headers: {
            "Accept": "application/vnd.github+json"
        }
    }));
    const data = await res.json();
    console.log(data)
    for (const file of data) {
        if (!file.name.match(/\.(?:png|jpg|jpeg|PNG|JPG|JPEG)/)) {
            continue;
        }
        const container = document.createElement("div");
        container.classList.add("image-container");
        const img = document.createElement("img");
        img.classList.add("photo");
        img.src = file.download_url;
        container.appendChild(img);
        document.getElementsByClassName("photo-scroller")[0].appendChild(container);
    }
    document.getElementsByClassName("loading")[0].remove();
})();