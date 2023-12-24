const firebaseConfig = { 
    apiKey: "AIzaSyA0vros7UR7JvBOalLEEyCr9aTnUVogm8w",
    authDomain: "password-manager-22.firebaseapp.com",
    databaseURL: "https://password-manager-22-default-rtdb.firebaseio.com",
    projectId: "password-manager-22",
    storageBucket: "password-manager-22.appspot.com",
    messagingSenderId: "492101239942",
    appId: "1:492101239942:web:304ac9796d4deda8463d07",  
    measurementId: "G-3TH444YE6M"
}
  
class SUser {
    constructor(uid, email, password){
        this.uid = uid
        this.email = email
        this.password = password
        let currentdate = new Date(); 
        let datetime = "Last Sync: "+currentdate.getDate()+"/"+(currentdate.getMonth()+1)+"/"+currentdate.getFullYear()+" "+currentdate.getHours()+":"+currentdate.getMinutes()+":"+currentdate.getSeconds()
        this.time = datetime
    }
}

var miSUser            = new SUser(localStorage.getItem('uid'), localStorage.getItem('email'), localStorage.getItem('password'))
var LIST_CATEGORY      = []
var LIST_PASSWORD      = []
var LIST_REAL_CATEGORY = []
var FIRESTORE          = null
var CURRENT_CATEGORY   = 'All'
var USER_EMAIL         = 'Cargando..'
var ACTION_ACTUALIZAT  = false
var ACTUALIZACION_BASE = false // por ahora no se usa