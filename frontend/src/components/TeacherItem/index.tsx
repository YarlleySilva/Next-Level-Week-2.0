import React from 'react';

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8aa7a4b9-524e-47e3-8560-b4abe94b7547/ddy9tbm-b900e631-ba72-45b9-96e0-88e1b5c276b1.png/v1/fill/w_722,h_1107,q_70,strp/dullahan_by_abysswatchers_ddy9tbm-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xNTcxIiwicGF0aCI6IlwvZlwvOGFhN2E0YjktNTI0ZS00N2UzLTg1NjAtYjRhYmU5NGI3NTQ3XC9kZHk5dGJtLWI5MDBlNjMxLWJhNzItNDViOS05NmUwLTg4ZTFiNWMyNzZiMS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Od1ADZeOO_v7Di9CwbBzJ-1EUzzElP0k8ciQVCzBDd0" alt="Dullahan" />

        <div>
          <strong>Dullahan</strong>
          <span>Spectro</span>
        </div>

      </header>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, rem perferendis facere asperiores possimus adipisci
      <br></br>
      fuga veritatis quia cum cumque suscipit itaque. Vitae sint, mollitia ab natus enim fugit facere?
    </p>

      <footer>
        <p>
          Preço/Hora
        <strong>R$ 100,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
        Entrar em contato.
      </button>

      </footer>

    </article>
  );
}

export default TeacherItem;