const phrases = [
    "console myself for not buying a house in fourth grade",
    "understand why humans are behaving like this",
    "transform waste into works of art",  
    "use Generative AI to finish this sentence",    
  ];
  let currentPhrase = 0;
  const textElement = document.getElementById('dynamic-text');
  const typingDelay = 3500; // Duration for each phrase to show
  
  function typePhrase() {
    textElement.innerHTML = phrases[currentPhrase];
    textElement.style.width = '0'; // Reset width to 0 to restart the typing effect
    textElement.style.animation = 'none'; // Remove the animation to reset it
  
    setTimeout(() => {
      textElement.style.animation = 'typing 3.5s steps(40, end) forwards, blink-caret .75s step-end infinite'; // Reapply the typing animation
      textElement.style.width = ''; // Remove the width style to allow animation to proceed
    }, 10); // Very short delay to ensure the animation resets properly
  
    currentPhrase = (currentPhrase + 1) % phrases.length;
    setTimeout(typePhrase, typingDelay + 3500); // Wait for the typing animation to finish before starting the next phrase
  }
  
  document.addEventListener('DOMContentLoaded', typePhrase);
  