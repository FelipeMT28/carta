const envelope = document.querySelector('.envelope-wrapper');
const letter = document.querySelector('.letter');

document.addEventListener('click', (e) => {
    const isEnvelopeClick = e.target.closest(".envelope");
    const isHeartClick = e.target.closest(".heart");
    const isTapClick = e.target.closest(".tap-left, .tap-right");
    const isLetterContent = e.target.closest(".letter .text");

    if ((isEnvelopeClick || isHeartClick || isTapClick) && !letter.classList.contains("opened")) {
        // Abrir la carta
        envelope.classList.toggle('flap');
        
        setTimeout(() => {
            letter.classList.add('letter-opening');
            setTimeout(() => {
                letter.classList.remove('letter-opening');
                letter.classList.add('opened');
            }, 500);
        }, 1000);
    } else if (!isLetterContent && letter.classList.contains("opened")) {
        // Cerrar la carta SOLO si el clic fue fuera del contenido
        envelope.classList.remove('flap');
        letter.classList.add("closing-letter");

        setTimeout(() => {
            letter.classList.remove("closing-letter");
            letter.classList.remove("opened");
        }, 500);
    }
});
