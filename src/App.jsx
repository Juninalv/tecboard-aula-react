import "./App.css";
import { Banner } from "./componentes/Banner";
import { FormularioDeEvento } from "./componentes/FormularioDeEvento";
import { Tema } from "./componentes/Tema";

function App() {
  const temas = [
    {
      id: 1,
      nome: "front-end",
    },
    {
      id: 2,
      nome: "back-end",
    },
    {
      id: 3,
      nome: "devops",
    },
    {
      id: 4,
      nome: "inteligência artificial",
    },
    {
      id: 5,
      nome: "data science",
    },
    {
      id: 6,
      nome: "cloud",
    },
  ];

  const eventos = [
    {
      capa: "https:",
      tema: temas[0],
      data: new Date(),
      titulo: "Mulher no Front",
    },
  ];

  return (
    <main>
      <header>
        <img src="/logo.png" alt="logo" />
      </header>
      <Banner />
      <FormularioDeEvento />
      {temas.map(function (item) {
        return (
          <section key={item.id}>
            <Tema tema={item} />
          </section>
        );
      })}

      {/*       <section>
        <Tema tema={temas[1]} />
      </section>
      <section>
        <Tema tema={temas[2]} />
      </section>
      <section>
        <Tema tema={temas[3]} />
      </section>
      <section>
        <Tema tema={temas[4]} />
      </section>
      <section>
        <Tema tema={temas[5]} />
      </section> */}
    </main>
  );
}

export default App;
