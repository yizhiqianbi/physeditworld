const filterButtons = [...document.querySelectorAll("[data-scene-filter]")];
const sceneBlocks = [...document.querySelectorAll("[data-scene]")];
const pauseAllButton = document.querySelector("[data-pause-all]");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedScene = button.dataset.sceneFilter;

    filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    sceneBlocks.forEach((block) => {
      const shouldShow = selectedScene === "all" || block.dataset.scene === selectedScene;
      block.classList.toggle("is-hidden", !shouldShow);
    });
  });
});

pauseAllButton?.addEventListener("click", () => {
  document.querySelectorAll("video").forEach((video) => video.pause());
});
