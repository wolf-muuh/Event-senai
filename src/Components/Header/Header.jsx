import React from "react";
import "./Header.css";
import Container from "../Container/Container.jsx";
import PerfilUsuario from "../PerfilUsuario/PerfilUsuario.jsx"
import Nav from "../Nav/Nav.jsx"

const Header = () => {
  return (
    <header className="headerpage">
      <Container>
        <div className="header-flex">
            <img 
            src="" 
            alt="Imagem menu de barras. Serve para exibir ou esconder o menu no smartphone." 
            />

            <Nav/>

            <PerfilUsuario/>
        </div>
      </Container>
    </header>
  );
};

export default Header;