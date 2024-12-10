const app = Vue.createApp({
    data() {
        return {
            title: "QuickTask",
            tasks: [],
        };
    },

    methods: {
        submitTask() {
            if (input.value.trim() !== "") {
                this.tasks.push(input.value);
                input.value = "";
            }
        },
    },
});

app.mount("#app");

const input = document.getElementById("input-task");

const images = document.querySelectorAll("img");
for (const img of images) {
    img.setAttribute("draggable", false);
}
