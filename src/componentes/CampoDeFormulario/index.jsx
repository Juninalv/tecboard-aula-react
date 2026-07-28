import "./campo-de-formulario.css";

export function CampoDeFormulario({ children }) {
  return <fieldset className="campo-form">{children}</fieldset>;
}
