function testGS(){
  var url = "https://script.google.com/macros/s/AKfycby5e74utExDwDzLlyGa5SO5WG3jqDsj3wI4c70SFiUNDpZC4ek/exec"

  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.getElementById("app").textContent = data[0].status
  
    })
}

function addGS(){
  var url = "https://script.google.com/macros/s/AKfycby5e74utExDwDzLlyGa5SO5WG3jqDsj3wI4c70SFiUNDpZC4ek/exec"

  fetch(url, {
    method: "POST",
    mode: "no-cors",
    cache: "no-cache",
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    body: JSON.stringify({name: "Olivia"})

  })
}

document.getElementById("read-btn").addEventListener("click", testGS)
document.getElementById("create-btn").addEventListener("click", addGS)


