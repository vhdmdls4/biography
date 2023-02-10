export default function SendingData(props) {
  const myForm = document.getElementById("form");
  myForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(this);

    fetch(props.url);
  });
}

/* fetch('URL')
.then(response => response.text())*/

/*fetch('URL', {
method: 'POST', // Specify the HTTP method
body: new FormData(document.querySelector('form'))})
.then(response => response.text()) */

async function buscaAlgo(oquebusca) {
  let url = new URL();

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: body,
  });
  if (!response.ok) {
    return "Ocorreu um erro na consulta de dados. Favor tentar novamente.";
  }
  const data = await response.json(); // Extracting data as a JSON Object from the response

  //console.log("dados")
  //console.log(data)
  return data;
}
