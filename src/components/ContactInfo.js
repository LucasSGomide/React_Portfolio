import React from 'react';
import devInfo from '../data/devInfo';

function ContactInfo() {
  return (
    <div>
      <h1>Contato</h1>
      <h2>Ficarei feliz em responder sua consulta sem compromisso ou sinta-se a vontade para entrar em contato pelo email <span>{devInfo.links.email}</span> e pelo whatsapp : <span>{devInfo.whatsapp}</span></h2>
      <form>
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Mensagem" />
      </form>
    </div>
  )
};

export default ContactInfo;
