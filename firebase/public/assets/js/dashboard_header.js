function SetUserNameHeader(_firebase, _user){
    var DATABASE = firebase.database()
    DATABASE.ref(miSUser.uid).set(miSUser) // set, push


    let spanUserEmail = document.getElementById('spanUserEmail')

    let  dbRef = _firebase.database().ref(_user.uid);
    dbRef.get().then((snapshot) => {
        if (snapshot.exists()) {
            if(snapshot.val().email){
                spanUserEmail.innerHTML = snapshot.val().email
                console.log(snapshot.val())
            }
        } else {
          console.log("No data available");
        }
        }).catch((error) => {
          console.error(error);
        });
}