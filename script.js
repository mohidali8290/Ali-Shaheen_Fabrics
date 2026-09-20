function orderWhatsApp(product, price) {

    // Apna WhatsApp number yahan likhein
    // Example: 923001234567
    let phone = "92 331 9653017";

    let message;

    if (price === 0) {
        message =
            "Assalam o Alaikum, I want to contact Ali Shaheen Fabric.";
    } else {
        message =
            "Assalam o Alaikum, I want to order:\n\n" +
            "Product: " + product + "\n" +
            "Price: Rs. " + price + "\n" +
            "Quantity: 1\n\n" +
            "Name: \n" +
            "Address: ";
    }

    let url =
        "https://wa.me/" +
        phone +
        "?text=" +
        encodeURIComponent(message);

    window.open(url, "_blank");
}