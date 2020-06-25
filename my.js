function testGS(){
  var url = "https://script.google.com/macros/s/AKfycby5e74utExDwDzLlyGa5SO5WG3jqDsj3wI4c70SFiUNDpZC4ek/exec"

  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.getElementById("app").textContent = data[0].status
  
    })
}

document.getElementById("btn").addEventListener("click", testGS)


