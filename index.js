function submitData(userName, userEmail){

    let formData = {
        name: userName,
        email: userEmail
    };

    let configObj ={

        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    let fetchResult = fetch("http://localhost:3000/users", configObj)
        .then(response => response.json())
        .then(object => {
            let body = getBody();
            body.appendChild(makeNewID(object));
        })
        .catch(error => {
            alert("Unauthorized Access");
            let body = getBody();
            let errorMessage = document.createElement('p');
            errorMessage.innerHTML = `${error.message}`;
            body.appendChild(errorMessage);
        });

    return fetchResult
}

function getBody(){
    return document.getElementsByTagName('body')[0]
}

function makeNewID(object){

    let newID = document.createElement('p');
    newID.innerHTML = `ID: ${object.id} Name: ${object.name} Email: ${object.email}`;
    return newID;
}