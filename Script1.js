const h1 = document.querySelector(".text");
const text = "Hello, this maybe your first time investing with us, but that's ok. Here at International Bytes," +
    "we prioritize our client's financial education. In our app will explore the New York Stock Exchange and" +
    "what it has to offer with different learning tools regarding investing your stock portfolio.";

function textTypingEffect(element, text, i = 0) {
    if (i === 0) {
        element.textContent = "";
    }
    element.textContent += text[i];

    if (i === text.length - 1) {
        return;
    }
    setTimeout(() => textTypingEffect(element, text, i + 1), 50);
}

textTypingEffect(h1, text);
