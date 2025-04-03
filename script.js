// Script to update price based on bike type and rental duration
document.getElementById('rental-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let bikeType = document.getElementById('bike-type').value;
    let rentalDuration = parseInt(document.getElementById('rental-duration').value);
    let pricePerHour = 10;

    // Adjust pricing based on bike type
    if (bikeType === 'mountain') {
        pricePerHour = 15;
    } else if (bikeType === 'road') {
        pricePerHour = 12;
    }

    let totalPrice = rentalDuration * pricePerHour;

    document.getElementById('price').textContent = totalPrice;
});
