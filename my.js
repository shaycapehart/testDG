function getGS(){
  var url = "https://script.google.com/macros/s/AKfycby5e74utExDwDzLlyGa5SO5WG3jqDsj3wI4c70SFiUNDpZC4ek/exec"

  fetch(url)
    .then(status)
    .then(json)
    .then(data => console.log("Request succeeded with JSON response", data))
    .catch(error => console.log("Request failed", error))
}

function addGS(){
  var url = "https://script.google.com/macros/s/AKfycby5e74utExDwDzLlyGa5SO5WG3jqDsj3wI4c70SFiUNDpZC4ek/exec"

  fetch(url, {
    method: "POST",
    mode: "no-cors",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({First: "Olivia",Last: "Newton"})
  })
  .then(response => console.log(response))
  // .then(json)
  // .then(data => console.log("Request succeeded with JSON response", data))
  // .catch(error => console.log("Request failed", error))
}

function status(response){
  if (response.status >= 200 && response.status <= 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

function json(response) {
  return response.json()
}

document.getElementById("read-btn").addEventListener("click", getGS)
document.getElementById("create-btn").addEventListener("click", addGS)

