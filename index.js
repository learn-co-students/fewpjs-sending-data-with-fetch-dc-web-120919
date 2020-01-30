
function submitData( name, email ) {
  return fetch( "http://localhost:3000/users", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name,
      email
    })
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(object){
    return document.body.innerHTML = object[ "id" ];
  })
  .catch(function(error) {
    return document.body.innerHTML = error.message
  })
}
