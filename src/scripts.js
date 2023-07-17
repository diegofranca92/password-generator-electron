const passInput = document.querySelector('#passInput') 
const passView = document.querySelector('#passwordView') 
const btnGeneratePass = document.querySelector('#btnGeneratePass') 

function generatePass() {
  passView.innerHTML = ''
  let charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let newPass = ''
  
  if (passInput.value === '') {
    alert('Digite o tamanho da sua senha!')
    return;
  }

  for (let index = 0, size = charset.length; index < passInput.value; index++ ) {
    newPass += charset.charAt(Math.floor( Math.random() * size));  
  }

  let result = document.createTextNode(newPass)

  passInput.value = ''
  passInput.focus()

  return passView.appendChild(result)
}

btnGeneratePass.addEventListener('click', generatePass)