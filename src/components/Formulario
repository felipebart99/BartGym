import { useRef } from "react";
import emailjs from "emailjs-com";

const FormularioContato = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5woe038",
        "template_oi3d2de",
        form.current,
        "ArHDw9nA-Ldnxfjq4"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("✅ Mensagem enviada com sucesso!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("❌ Ocorreu um erro. Tente novamente.");
        }
      );
  };

  return (
    <div id="formulario" className="container my-5">
      <h2 className="mb-4">Fale Conosco</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-3">
          <label className="form-label">Nome</label>
          <input
            type="text"
            name="user_name"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="user_email"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Mensagem</label>
          <textarea name="message" className="form-control" rows="4" required />
        </div>
        <button type="submit" className="btn btn-success">
          Enviar Mensagem
        </button>
      </form>
    </div>
  );
};

export default FormularioContato;
