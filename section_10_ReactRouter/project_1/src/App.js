import './App.css';
import { BrowserRouter as Router, Link, Route, NavLink, Switch } from 'react-router-dom'
function App() {
  return (
    <Router>
      <>
        <nav>
          <ul>
            {/* <li><a href="/">Strona główna</a></li>
          <li><a href="/contact">Kontakt</a></li>
          <li><a href="/gallery">Galeria</a></li>
          <li><a href="/info">Informacje</a></li> */}

            <li><NavLink exact to="/" ><div className="navElementWrapper">Strona główna<div className="indicator"></div></div></NavLink></li>
            <li><NavLink to="/contact"><div className="navElementWrapper">Kontakt<div className="indicator"></div></div></NavLink></li>
            <li><NavLink to="/gallery"><div className="navElementWrapper">Galeria<div className="indicator"></div></div></NavLink></li>
            <li><NavLink to="/info"><div className="navElementWrapper">Informacje<div className="indicator"></div></div></NavLink></li>
          </ul>
        </nav>
        <section>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/info" component={Info} />
            <Route component={ErrorPage} />
          </Switch>
        </section>
      </>
    </Router >
  );
}

export default App;

const Home = () => {
  return (
    <>
      <h1>Strona główna</h1>
    </>
  )
}

const Contact = () => {
  return (
    <>
      <h1>Kontakt</h1>
    </>
  )
}

const Gallery = () => {
  return (
    <>
      <h1>Galeria</h1>
    </>
  )
}

const Info = () => {
  return (
    <>
      <h1>Informacje</h1>
    </>
  )
}

const ErrorPage = () => {
  return (
    <>
      <h1>Nie ma takiej strony 404 </h1>
    </>
  )
}
