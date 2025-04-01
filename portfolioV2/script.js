document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    document.getElementById("confirmation").classList.remove("hidden");
    this.reset();
});