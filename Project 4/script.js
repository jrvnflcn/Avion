function updatePalette(colorClass) {
    const palettes = ["black", "black2"];
    const colors = ["bg-primary", "bg-danger", "bg-black"];

    palettes.forEach(paletteId => {
        let palette = document.getElementById(paletteId);
        colors.forEach(color => {
            palette.classList.remove(color);
        });
        palette.classList.add(colorClass);
    });
}

function paletteBlack() {
    updatePalette("bg-black");
}

function paletteRed() {
    updatePalette("bg-danger");
}

function paletteBlue() {
    updatePalette("bg-primary");
}