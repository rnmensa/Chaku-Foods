function submitForm() {
    const formData = {
        name: document.getElementById("name").value,
        organization: document.getElementById("organization").value,
        role: document.getElementById("role").value,
        businessUnit: document.getElementById("businessUnit").value,
        country: document.getElementById("country").value,
        cityState: document.getElementById("cityState").value,
        crop: document.getElementById("crop").value,
        varietals: document.getElementById("varietals").value,
        quantity: document.getElementById("quantity").value,
        unit: document.getElementById("unitquantity").value,
        productType: document.getElementById("product-type").value,
        timeNeeded: document.getElementById("timeNeeded").value,
        interests: Array.from(document.querySelectorAll('input[name="interest"]:checked')).map(checkbox => checkbox.value)
    };

    // Displaying the submitted form data in an alert
    alert(`Your request has been submitted:\n${JSON.stringify(formData, null, 2)}`);
}
