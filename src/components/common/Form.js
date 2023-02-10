export default function Form(props) {
  return (
    <form id="form" action={props.action}>
      <fieldset>
        <div className="form-group">
          <label htmlFor="username">Usuário: </label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="form-group">
          <label htmlFor="username">Senha: </label>
          <input type="text" id="username" name="username" />
        </div>
      </fieldset>
      <fieldset>
        <div>
          <input type="radio"></input>
        </div>
        <select>
          <option>Op1</option>
          <option>Op2</option>
          <option>Op3</option>
        </select>
      </fieldset>
      <button>Enviar</button>
    </form>
  );
}

/*const [validated, setValidated] = useState(false);

const handleSubmit = (event) => {
  const form = event.currentTarget;
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  }

  setValidated(true);
};

return (
  <Form noValidate validated={validated} onSubmit={handleSubmit}>
*/
