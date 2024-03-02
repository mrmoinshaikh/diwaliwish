
document.getElementById('generateButton').addEventListener('click', function() {
    const nameInput = document.getElementById('nameInput').value;
    const diwaliWish = document.getElementById('diwaliWish');

    if (nameInput.trim() !== '') {
        const wish = `Happy Diwali, ${nameInput}!`; // Customize your wish here
        diwaliWish.textContent = wish;

        // Trigger the rocket animation (if it's still not working)
        triggerRocketAnimation();
    } else {
        diwaliWish.textContent = 'Please enter your name!';
    }
});



function shareName() {
    const name = document.getElementById('nameInput').value;
    const shareURL = `${window.location.origin}${window.location.pathname}?name=${encodeURIComponent(name)}`;
    const shareText = `Check out my name: ${name} on this Diwali Wishing Website! ${shareURL}`;
    
    alert(shareText);
}

document.getElementById('shareButton').addEventListener('click', shareName);


// Function to trigger the firecracker animation
function triggerFirecrackerAnimation() {
    const firecracker = document.getElementById('firecracker');
    firecracker.classList.add('explode');
}

// Event listener to trigger the animation
document.getElementById('generateButton').addEventListener('click', () => {
    triggerFirecrackerAnimation();
});
