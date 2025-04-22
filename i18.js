const translations = {
    en: {
      title: "QR vCard Generator",
      firstName: "First Name",
      lastName: "Last Name",
      organization: "Organization",
      titleField: "Title",
      email: "Email",
      phone: "Phone",
      url: "Website",
      address: "Address",
      generate: "Generate QR"
    },
    es: {
      title: "Generador de QR vCard",
      firstName: "Nombre",
      lastName: "Apellido",
      organization: "Organización",
      titleField: "Cargo",
      email: "Correo electrónico",
      phone: "Teléfono",
      url: "Sitio web",
      address: "Dirección",
      generate: "Generar QR"
    }
  };
  
  let currentLang = navigator.language.startsWith("es") ? "es" : "en";
  