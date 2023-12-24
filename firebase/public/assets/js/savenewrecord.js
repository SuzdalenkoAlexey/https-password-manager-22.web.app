document.getElementById('saveNewRecordData').addEventListener('click', () => {
    let currentTime    = 'x'+ new Date().valueOf()
    let modalEmail     = document.getElementById('modalEmail')
    let modalPassword  = document.getElementById('modalPassword')
    let modalTextarea  = document.getElementById('modalTextarea')
    let floatingSelect = document.getElementById('floatingSelect')

    if(!modalEmail.value.trim() || !modalPassword.value.trim()) { alert('Empty values'); return; }

    FIRESTORE.collection('users').doc(miSUser.uid).collection('password').doc(currentTime).set({
        id: currentTime,
        date: getCurrentDate(),    
        category: floatingSelect.value.trim().substring(0, 22), 
        email:    modalEmail.value.trim().substring(0, 22) , 
        password: modalPassword.value.trim().substring(0, 22),
        comment: modalTextarea.value.trim().substring(0, 111)
    }).then(() => {
        console.log("Objeto guardado en Firestore con éxito")
        modalEmail.value    = ''
        modalPassword.value = ''
        modalTextarea.value = ''
        alert('¡Saved!')
    }).catch((error) => {
        console.error("Error al guardar objeto en Firestore:", error)
        alert('Error '+error)
    })
})

document.getElementById('saveNewCategoryData').addEventListener('click', () => {
    let currentTime    = 'x'+ new Date().valueOf()
    let modalCategory  = document.getElementById('modalCategory')
    if(!modalCategory.value.trim()) { alert('Empty value'); return; }

    FIRESTORE.collection('users').doc(miSUser.uid).collection('category').doc().set({
        id: currentTime,
        category: modalCategory.value.trim().substring(0, 22)
    }).then(() => {
        modalCategory.value = ''
        alert('¡Saved!')
    }).catch((error) => {
        console.error("Error al guardar objeto en Firestore:", error)
    })
    
})


function getCurrentDate() {
    let now = new Date();
    let year = now.getFullYear();
    let month = String(now.getMonth() + 1).padStart(2, '0');
    let day = String(now.getDate()).padStart(2, '0');
    return `${day}-${month}-${year}`;
}

function functionCurrentCategory(x){
    CURRENT_CATEGORY = x
    pushCategoryToPage()
}