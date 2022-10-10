// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito22


const nome = prompt('Come ti chiami?');
const cognome = prompt('Quale è il tuo cognome?');
const colorePreferito = prompt('Dimmi il tuo colore preferito?')


document.getElementById('password').innerHTML = `
  ${nome}${cognome}${colorePreferito}22.
`;
