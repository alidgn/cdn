// FOOTER_EMAIL
(function () {
    const email = {
        address: "info@icerde.com",
        display: "info[at]icerde[.]com"
    };

    const element = document.getElementById("footer-email");
    if (element) {
        const html = `<a href="mailto:${email.address}" class="email">${email.display}</a>`;
        element.innerHTML = html;
    }

    var css = 'a.email { text-decoration: none !important; } a#footer-email { text-decoration: none !important; }',
        head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');

    head.appendChild(style);
    style.type = 'text/css';

    if (style.styleSheet) {
        // This is required for IE8 and below.
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
})();