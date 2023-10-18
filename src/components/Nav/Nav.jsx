import "./Nav.css";

function Nav( {fnSubmit} ) {
  return (
    <header>
      <nav>
        <form id="formNav" onSubmit={fnSubmit}>
          <input type="text"/>
          <button type="submit">Buscar</button>
        </form>
      </nav>
    </header>
  );
}

export default Nav;
