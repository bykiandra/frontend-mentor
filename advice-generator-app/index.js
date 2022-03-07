const apiUrl = 'https://api.adviceslip.com/advice'

const getAdvice = async () => {
  const advice = await fetch(apiUrl).then(res => {
    return res.json()
  }).then(data => {
    return data.slip
  })

  const idSpan = document.getElementById('advice_id')
  const textSpan = document.getElementById('advice_text')

  idSpan.textContent = advice.id
  textSpan.textContent = advice.advice
}

window.onload = getAdvice