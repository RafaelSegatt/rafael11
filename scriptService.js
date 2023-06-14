async function getserviceList() {
  console.log('geserviceList')
  const response = await fetch('http://localhost:3000/api/service')
  const data = await response.json()
  
  const service = document.querySelectorAll('tr > td')

  service.forEach(td => {
    const tr = td.parentNode
    tr.remove()
  })

  const serviceListContainer = document.getElementById('service-list-container')

  data.forEach(service => {
      const newserviceTr = document.createElement('tr')
      
      newserviceTr.id = service.id
      newserviceTr.innerHTML = `
        <td>${service.nameService}</td>
        <td>${service.price}</td>
        <td>${service.duration}</td>
      `

      serviceListContainer.appendChild(newserviceTr)
  })
}

getserviceList()

const createServiceButton = document.getElementById('create-service-button')

createServiceButton.addEventListener('click', async (event) => {
  event.preventDefault()

  const nameService = document.querySelector('input[name="nameService"]').value
  const price = document.querySelector('input[name="price"]').value
  const duration = document.querySelector('input[name="duration"]').value
  await fetch('http://localhost:3000/api/service', {
      method: 'POST',
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
          nameService,
          price,
          duration
      })
  })

  await getserviceList()
})