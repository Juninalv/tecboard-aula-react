import "./formulario-evento.css";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { TituloFormulario } from "../TituloFormulario";
import { CampoDeDados } from "../CampoDeDados";
import { Label } from "../Label";
import { Botao } from "../Botao";
import { ListaSuspensa } from "../ListaSuspensa";

export function FormularioDeEvento({ temas }) {
  function aoFormSubmetido(formData) {
    console.log("opa, tá na hora de criar um novo evento", formData);
    const evento = {
      capa: formData.get("capa "),
      tema: temas.find(function (item) {
        return item.id == formData.get("tema");
      }),
      data: new Date(formData.get("dataEvento")),
      titulo: formData.get("nomeEvento"),
    };
    console.log("esse é o evento", evento);
  }

  return (
    <form className="form-evento" action={aoFormSubmetido}>
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
      <div className="campos">
        <CampoDeFormulario>
          <Label htmlFor="nomeEvento">Qual é o nome do evento?</Label>
          <CampoDeDados type="text" id="nomeEvento" name="nomeEvento" />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="capaEvento">
            Qual é o endereço da imagem de capa?
          </Label>
          <CampoDeDados
            type="text"
            id="capaEvento"
            placeholder="http://..."
            name="nomeEvento"
          />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="dataEvento">Data do evento:</Label>
          <CampoDeDados
            type="date"
            id="dataEvento"
            placeholder="Summer dev hits"
            name="dataEvento"
          />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="temaEvento">Tema do evento:</Label>
          <ListaSuspensa id="temaEvento" name="tema" itens={temas} />
        </CampoDeFormulario>
      </div>
      <div className="acoes">
        <Botao>Criar Evento</Botao>
      </div>
    </form>
  );
}
