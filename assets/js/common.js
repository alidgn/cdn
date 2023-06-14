// FOOTER_EMAIL
(function () {
    const email = {
        address: "info@icerde.com",
        display: "info[at]icerde[.]com"
    };

    const element = document.getElementById("footer-email");
    if (element) {
        const html = `<a href="${email.address}">${email.display}</a>`;
        element.innerHTML = html;
    }
})();