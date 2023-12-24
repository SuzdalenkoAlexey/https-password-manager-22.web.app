/* mostrar email en el header y
   refrescar datos usuario en database */

function SetUserNameHeader(_firebase, _user){
    var DATABASE = firebase.database()
    DATABASE.ref(miSUser.uid).set(miSUser) // set, push


    let spanUserEmail = document.getElementById('spanUserEmail')

    let  dbRef = _firebase.database().ref(_user.uid);
    dbRef.get().then((snapshot) => {
        if (snapshot.exists()) {
            if(snapshot.val().email){
                USER_EMAIL              = snapshot.val().email
                spanUserEmail.innerHTML = USER_EMAIL
                
            }
        } else {
            console.log("No data available")
            spanUserEmail.innerHTML = ''
        }
        }).catch((error) => {
            console.error(error)
            spanUserEmail.innerHTML = ''
        })
}