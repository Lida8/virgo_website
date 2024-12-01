emailjs.init('7AxtOjHvPO2F4YwWM');

  document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const email = document.getElementById('email').value;

    const templateParams = {
      name: name,
      message: message,
      email: email,
    };
    
    console.log(templateParams);

    emailjs.send('service_eilt109', 'template_10wzwzv', templateParams)
      .then((response) => {
        document.getElementById('response-message').textContent = 'Message sent successfully!';
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        document.getElementById('response-message').textContent = 'Failed to send the message. Try again later.';
      });
  });

const partnersContainer = document.getElementById('partners-container');
if (partnersContainer) {
  const section = document.createElement("section");
  section.id = "partners";

  // Create and append the header
  const header = document.createElement("h2");
  header.textContent = "Partners";
  section.appendChild(header);

  // Add a line break
  section.appendChild(document.createElement("br"));

  // Create the container for partners
  const flexColumns = document.createElement("div");
  flexColumns.className = "flex-columns";

  // List of partners
  const partners = [
    "UCLouvain (BE)", "MPG (DE)", "CEA (FR)", "NCBJ (PL)", "UNIMAN (UK)", "GSSI (IT)",
    "UNIGE (CH)", "JIV-ERIC (NL)", "FAU (DE)", "IFAE-CERCA (ES)", "OU (UK)", "BUW (DE)",
    "NOA (EL)", "EGO (IT)", "KIT (DE)", "LMU MUENCHEN (DE)", "NWO-I (NL)", "UCAM (UK)",
    "UU (SE)", "LOFAR ERIC (NL)", "IRAM (FR)", "INFN (IT)", "USC (ES)", "UBER (DE)",
    "CNIG (ES)", "CTAO GGMBH (DE)", "QUB (IE)", "UMK (PL)", "AALTO (FI)", "EPFL (CH)",
    "AUTH (EL)", "INAF (IT)", "IRA NASU (UA)"
  ];

  // Loop through the partners and add them to the container
  partners.forEach(partner => {
    const partnerDiv = document.createElement("div");
    partnerDiv.textContent = partner;
    flexColumns.appendChild(partnerDiv);
  });

  // Append the container to the section
  section.appendChild(flexColumns);

  // Add two line breaks
  section.appendChild(document.createElement("br"));
  section.appendChild(document.createElement("br"));

  // Append the section to the partners container
  partnersContainer.appendChild(section);
}