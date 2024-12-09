const app = Vue.createApp({
    data() {
        return {
            title: "QuickTask",
        };
    },
});

app.mount("#app");

const images = document.querySelectorAll("img");
for (const img of images) {
    img.setAttribute("draggable", false);
}
