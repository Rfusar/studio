function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function animateText(element, text, delay) {
    for (const t of text) {
        element.innerHTML += t
        await sleep(delay)
    }
}

export {animateText}
