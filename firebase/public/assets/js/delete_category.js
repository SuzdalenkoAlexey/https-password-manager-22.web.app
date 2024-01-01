document.getElementById('setCurrentCategory').addEventListener('click', () => {
    
    let currentCategory = document.getElementById('setCurrentCategory').innerText.trim()
    let deleteThisCategory = confirm("Delete this category?")
    if(deleteThisCategory){
        let categoryInUse = false
        LIST_PASSWORD.forEach( item => {
            if(currentCategory == item.category.trim()){
                categoryInUse = true
            }
        })

        if(categoryInUse){
            alert('The category cannot be deleted because it is in use.')
            return
        } else {
            let savedCategoryList = JSON.parse(localStorage.getItem('savedCategoryList')) || []
            savedCategoryList.forEach(item => {
                console.log(item)
                if(item.category.trim() == currentCategory){
                    let db = firebase.firestore()
                    let docRef = db.collection('users').doc(miSUser.uid).collection('category').doc(item.id)
                    docRef.delete().then(() => {
                        CURRENT_CATEGORY = 'All'
                        GetAllUserData(firebase, miSUser)
                    }).catch((error) => {
                        console.error("Error removing document: ", error);
                    })
                }
            })
        }

    }

})