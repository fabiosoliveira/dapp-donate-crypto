export default function Footer() {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <p className="col-md-4 bm-0 text-body-secondary">
        &copy; 2023 Donate Crypto, Inc.
      </p>
      <ul className="nav col-md-4 justify-content-end">
        <Link href="/">Início</Link>
        <Link href="/create">Nova Campanha</Link>
        <Link href="/donate">Doar</Link>
        <Link href="/about">Sobre</Link>
      </ul>
    </footer>
  );
}

function Link({ href, children }) {
  return (
    <li className="nav-item">
      <a href={href} className="nav-link px-2 text-body-secondary">
        {children}
      </a>
    </li>
  );
}
