async function getatendimentoList() {
  console.log('geatendimentoList')
  const response = await fetch('http://localhost:3000/api/atendimento')
  const data = await response.json()
  
  const atendimento = document.querySelectorAll('tr > td')

  atendimento.forEach(td => {
    const tr = td.parentNode
    tr.remove()
  })

  const atendimentoListContainer = document.getElementById('atendimento-list-container')

  data.forEach(atendimento => {
      const newatendimentoTr = document.createElement('tr')
      
      newatendimentoTr.id = atendimento.id
      newatendimentoTr.innerHTML = `
        <td>${atendimento.serviceType}</td>
        <td>${atendimento.animal}</td>
        <td>${atendimento.scheduledDate}</td>
      `

      atendimentoListContainer.appendChild(newatendimentoTr)
  })
}

getatendimentoList()

const createatendimentoButton = document.getElementById('create-atendimento-button')

createatendimentoButton.addEventListener('click', async (event) => {
  event.preventDefault()

  const serviceType = document.querySelector('input[name="serviceTypes"]').value
  const animal = document.querySelector('input[name="animal"]').value
  const scheduledDate = document.querySelector('input[name="scheduledDate]"]').value
  await fetch('http://localhost:3000/api/atendimento', {
      method: 'POST',
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
         serviceType,
         animal,
         scheduledDate
      })
  })

  await getatendimentoList()
})