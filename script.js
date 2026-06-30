const filterButtons = [...document.querySelectorAll("[data-scene-filter]")];
const sceneBlocks = [...document.querySelectorAll("[data-scene]")];
const pauseAllButton = document.querySelector("[data-pause-all]");
const heroVideo = document.querySelector("[data-hero-video]");
const heroSoundButton = document.querySelector("[data-hero-sound]");

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

heroSoundButton?.addEventListener("click", async () => {
  if (!heroVideo) return;

  const shouldEnable = heroVideo.muted;
  heroVideo.muted = !shouldEnable;
  heroVideo.volume = shouldEnable ? 0.45 : 0;
  heroSoundButton.classList.toggle("is-on", shouldEnable);
  heroSoundButton.setAttribute("aria-pressed", String(shouldEnable));

  if (shouldEnable) {
    try {
      await heroVideo.play();
    } catch {
      heroVideo.muted = true;
      heroVideo.volume = 0;
      heroSoundButton.classList.remove("is-on");
      heroSoundButton.setAttribute("aria-pressed", "false");
    }
  }
});
