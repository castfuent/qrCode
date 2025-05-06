
 
  function translatePage() {
    const t = translations[currentLang];
    document.title = t.title;
    document.getElementById("title").textContent = t.title;
  
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (t[key]) el.textContent = t[key];
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    translatePage();

    document.getElementById("lang-toggle").addEventListener("click", () => {
      currentLang = currentLang === "es" ? "en" : "es";
      translatePage();
    });
  });


  document.getElementById("vcard-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const org = document.getElementById("org").value.trim();
    const title = document.getElementById("titleField").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const url = document.getElementById("url").value.trim();
    const address = document.getElementById("address").value.trim();
  
    const lines = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      `N:${lastName};${firstName};;;`,
      `FN:${firstName} ${lastName}`
    ];
  
    if (org) lines.push(`ORG:${org}`);
    if (title) lines.push(`TITLE:${title}`);
    if (email) lines.push(`EMAIL;TYPE=INTERNET:${email}`);
    if (phone) lines.push(`TEL;TYPE=CELL:${phone}`);
    if (url) lines.push(`URL:${url}`);
    if (address) {
      const parts = address.split(",").map(x => x.trim());
      const street = parts[0] || "";
      const city = parts[1] || "";
      const region = parts[2] || "";
      const zip = parts[3] || "";
      const country = parts[4] || "";
      
      lines.push(`ADR;TYPE=WORK:;;${street};${city};${region};${zip};${country}`);
    }

  
    lines.push("END:VCARD");
  
    const vCard = lines.join("\n");
    console.log(vCard); // para depurar
  
    QRCode.toDataURL(vCard)
      .then(url => {
        document.getElementById("qrcode").innerHTML =
          `<img src="${url}" alt="QR Code" class="img-fluid" />`;
      })
      .catch(err => {
        console.error(err);
        alert("Error generating QR");
      });
  });
  