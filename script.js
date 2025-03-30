let lastEncryptedText = ""; // Store encrypted text for decryption

function encryptText() {
    let text = document.getElementById("message").value;
    let shift = parseInt(document.getElementById("shift").value);

    if (!text) {
        alert("Please enter a message to encrypt!");
        return;
    }
    if (isNaN(shift)) {
        alert("Please enter a valid shift value!");
        return;
    }

    let encryptedText = caesarCipher(text, shift);
    lastEncryptedText = encryptedText; // Store encrypted text for later decryption

    // Display encrypted output
    document.getElementById("encrypted-output").innerText = " ";
    document.getElementById("output").innerText = encryptedText;
}

function decryptText() {
    if (!lastEncryptedText) {
        alert("No encrypted text found! Please encrypt something first.");
        return;
    }

    let shift = parseInt(document.getElementById("shift").value);

    if (isNaN(shift)) {
        alert("Please enter a valid shift value!");
        return;
    }

    let decryptedText = caesarCipher(lastEncryptedText, -shift);

    // Display both encrypted & decrypted text
    document.getElementById("output").innerText = " " + decryptedText;
}

function caesarCipher(text, shift) {
    let result = "";
    shift = ((shift % 26) + 26) % 26; // Ensure shift stays within 0-25

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        let code = text.charCodeAt(i);

        if (code >= 65 && code <= 90) { 
            // Uppercase letters
            result += String.fromCharCode(((code - 65 + shift) % 26) + 65);
        } else if (code >= 97 && code <= 122) { 
            // Lowercase letters
            result += String.fromCharCode(((code - 97 + shift) % 26) + 97);
        } else {
            result += char; // Keep spaces and special characters unchanged
        }
    }
    return result;
}


// Function to redirect between pages
function redirectTo(page) {
    window.location.href = page;
}
