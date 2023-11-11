import logo from './logo.svg';
import './App.css';

function App() {
  return (
<>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">TextUtils</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/">About</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle active" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Login/Register
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/"></a></li>
            <li><a className="dropdown-item" href="/">Login</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="/">Register</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-disabled="page">Community</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-disabled="page">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-disabled="page">FAQs</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<div className="container">
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">Home</a></li>
      <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">About</a></li>
      <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">Contact</a></li>
      <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">Community</a></li>
      <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">FAQs</a></li>
    </ul>
    <p className="text-center text-body-secondary">© 2023 TextUtils, Inc</p>
  </footer>
</div>
</>
  );
}

export default App;
