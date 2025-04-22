
 
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
  
    document.getElementById("vcard-form").addEventListener("submit", function (e) {
      e.preventDefault();

      const firstName = document.getElementById("firstName").value.trim();
      const lastName = document.getElementById("lastName").value.trim();
      const org = document.getElementById("org").value;
      const title = document.getElementById("titleField").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const url = document.getElementById("url").value;
      const address = document.getElementById("address").value;
    
    
      const lines = [
        "BEGIN:VCARD",
        "VERSION:3.0"
      ];
      
      if (lastName.trim()){
        lines.push(`N:${lastName};${firstName}`); 
      }
      else{
        lines.push(`N:${firstName}`); 
      }

      if (org.trim()) lines.push(`ORG:${org}`);
      if (title.trim()) lines.push(`TITLE:${title}`);
      if (email.trim()) lines.push(`EMAIL:${email}`);
      if (phone.trim()) lines.push(`TEL;CELL:${phone}`);
      if (url.trim()) lines.push(`URL:${url}`);
      if (address.trim()) lines.push(`ADR;WORK:;;${address}`);
      
      lines.push("END:VCARD");
      
      const vCard = lines.join("\n");
      console.log(vCard);
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
  });
  