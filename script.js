
    const adviceNumber = document.getElementById('advice-number');
    const adviceQuote = document.getElementById('advice-quote');
    const diceButton = document.getElementById('dice-button');

    const fetchAdvice = async () => {
        try {
            const response = await fetch('https://api.adviceslip.com/advice', { cache: "no-cache" });
            const data = await response.json();
            const { id, advice } = data.slip;
            adviceNumber.textContent = `ADVICE #${id}`;
            adviceQuote.textContent = `“${advice}”`;
        } catch (error) {
            adviceNumber.textContent = 'ADVICE #...';
            adviceQuote.textContent = '“Failed to fetch advice. Try again later.”';
        }
    };

    diceButton.addEventListener('click', fetchAdvice);

    // Fetch initial advice
    fetchAdvice();

