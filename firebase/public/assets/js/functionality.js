async function GetAllUserData(_firebase, _user){
    FIRESTORE          = firebase.firestore()
    LIST_REAL_CATEGORY = ['Default']
    getCategories(FIRESTORE)
    getPasswords(FIRESTORE)  
}

function getRealCategoryList(){
    LIST_CATEGORY.forEach(miCategory => {
        if(!LIST_REAL_CATEGORY.includes(miCategory.category)){
            if(miCategory.category) LIST_REAL_CATEGORY.push(miCategory.category)
        }
    })
    LIST_PASSWORD.forEach(miCategory => {
        if(!LIST_REAL_CATEGORY.includes(miCategory.category)){
            if(miCategory.category) LIST_REAL_CATEGORY.push(miCategory.category)
        }
    })
    pushCategoryToPage()
}


/* traer todas las categorias */
function getCategories(_firestore){
    _firestore.collection('users').doc(miSUser.uid).collection('category').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
                let category = { id: doc.id, category: doc.data().category }        
                LIST_CATEGORY.push(category)
        })
        getRealCategoryList()
        }).catch((error) => {
            console.log("Error getting documents: ", error)
        })
}
/* traer todas las categorias y passwords */
function getPasswords(_firestore){
    _firestore.collection('users').doc(miSUser.uid).collection('password').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
                let miD = doc.data()
                let category = { id: doc.id, category: miD.category, date: miD.date, email: miD.email, pass: miD.password, comment: miD.comment }
                LIST_PASSWORD.push(category)
        })
        getRealCategoryList()
        }).catch((error) => {
            console.log("Error getting documents: ", error)
        })
}
