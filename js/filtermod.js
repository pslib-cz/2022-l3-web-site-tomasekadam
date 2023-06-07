let referenceItems;

export default function (menu, elmlist) {
    console.log(menu)
}

function normalizeText(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replaceAll(/\s+/g, "-")
}

