export default function Navbar(props) {


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="navbar-brand" aria-current="page">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page">Apple</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page">Samsung</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page">Huawei</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page">Xiaomi</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}