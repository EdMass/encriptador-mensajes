const doc = document;
const textArea = doc.querySelector(".input_texarea")
const imagenMatacho = doc.querySelector(".result_img")
const loaderPoke = doc.querySelector(".loader")
const resultTitle = doc.querySelector(".result_title")
const resultText = doc.querySelector(".result_text")
const encryptButtom = doc.querySelector(".form_btn")
const desncryptButtom = doc.querySelectorAll(".form_btn")
const copyButtom = doc.querySelector(".result_btn")

const llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

function encriptadorTexto(texto) {
    let textoEncriptado = "";
    for (let i = 0; i < texto.length; i++) {
      let letra = texto[i];
      let encriptada = letra;
      for (let j = 0; j < llaves.length; j++) {
        if (letra === llaves[j][0]) {
          encriptada = llaves[j][1]; 
          break; 
        }
      }
      textoEncriptado += encriptada;
    }
    return textoEncriptado;
    }

function desencriptadorTexto(texto) {
    let textoDesencriptado = texto;
    for (let i = 0; i < llaves.length; i++) {
      let regex = new RegExp(llaves[i][1], "g");
      textoDesencriptado = textoDesencriptado.replace(regex, llaves[i][0]);
    }
    return textoDesencriptado; 
  }

textArea.addEventListener("input", (e) => {
    imagenMatacho.style.display = "none"
    loaderPoke.classList.remove("hidden")
    resultTitle.textContent = "Capturando Mensaje"
    resultText.textContent = ""

})

encryptButtom.addEventListener("click", (e) => {
  e.preventDefault()
  let message = textArea.value.toLowerCase()
  let encryptMessage = encriptadorTexto(message)
  resultText.textContent = encryptMessage
  copyButtom.classList.remove("hidden")
  resultTitle.textContent = "El Mensaje Encriptado es: "

})

desncryptButtom[1].addEventListener("click", (e) => {
  e.preventDefault()
  let message = textArea.value.toLowerCase()
  let decryptMessage = desencriptadorTexto(message)
  resultText.textContent = decryptMessage
  copyButtom.classList.remove("hidden")
  resultTitle.textContent = "El Mensaje Desencriptado es: "

})

copyButtom.addEventListener("click", () => {
  let copiedText =resultText.textContent
  navigator.clipboard.writeText(copiedText).then(() =>{
    loaderPoke.classList.add("hidden")
    imagenMatacho.style.display = "block"
    resultTitle.textContent = "Texto Copidado"
    copyButtom.classList.add("hidden")
    resultText.textContent = ""
  })

})
