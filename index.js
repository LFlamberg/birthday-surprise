const fireBtn = document.querySelector(".fire-btn");
const sound = document.getElementById("confetti-sound");

fireBtn.addEventListener("click", () => {
    // 🔊 Audio abspielen
    if (sound) {
        sound.currentTime = 0;
        sound.play().catch(e => console.warn("Audio konnte nicht abgespielt werden:", e));
    }

    // 🎉 Konfetti mit tsparticles
    const duration = 12 * 1000;
    const animationEnd = Date.now() + duration;

    const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            clearInterval(interval);
            return;
        }

        const particleCount = 50 * (timeLeft / duration);

        confetti({
            spread: 500,
            startVelocity: 100,
            particleCount: particleCount,
            origin: { x: 0.2, y: 0.1 },
        });

        confetti({
            spread: 500,
            startVelocity: 100,
            particleCount: particleCount,
            origin: { x: 0.8, y: 0.1 },
        });
    }, 250);
    setTimeout(() => {
        alert("🎉 Happy 23rd birthday! ");
    }, 12000);

});
