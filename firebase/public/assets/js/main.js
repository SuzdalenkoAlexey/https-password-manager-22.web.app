function HelloMessage0Records(x){
    document.getElementById('helloMessagesSection').style.display = x
}

function ShowTablesWitchPass(x){
    document.getElementById('pageTitleContent').style.display = x
    document.getElementById('tableSectionContent').style.display = x
}

function pushCategoryToPage(){
    /* push list categories to menu */
    let componentsNav = document.getElementById('components-nav')
    let htmlContentCat = ''
    LIST_REAL_CATEGORY.forEach(categoryName => {
        htmlContentCat += `<li onclick="functionCurrentCategory('`+categoryName+`')"><a href="#"><i class="bi bi-circle"></i><span>`+categoryName+`</span></a></li>`
    })
    componentsNav.innerHTML = htmlContentCat

    if(LIST_PASSWORD.length > 0){
        HelloMessage0Records('none')
        ShowTablesWitchPass('block')
    } else {
        HelloMessage0Records('block') 
        ShowTablesWitchPass('none')
    }

    /* push list categories to form create record */
    htmlContentCat = '<option selected="" value="Default">Default</option>'
    let indexCount = 0
    LIST_REAL_CATEGORY.forEach(categoryName => {
        if(indexCount != 0) { htmlContentCat += `<option value="`+categoryName+`">`+categoryName+`</option>'>`; }
        indexCount++
    })
    document.getElementById('floatingSelect').innerHTML = htmlContentCat

    /* push content to password list table */
    htmlContentCat = ''
    LIST_PASSWORD.forEach(x =>  {
        if(CURRENT_CATEGORY == 'All'){
            htmlContentCat += `<tr><td>`+x.date+`</td><td>`+x.category+`</td><td>`+x.email+`</td><td>`+x.pass+`</td><td>`+x.comment+`</td></tr>`
        } else {
            if(CURRENT_CATEGORY == x.category){
                htmlContentCat += `<tr><td>`+x.date+`</td><td>`+x.category+`</td><td>`+x.email+`</td><td>`+x.pass+`</td><td>`+x.comment+`</td></tr>`
            }
        }
    })
    document.getElementById('table_content_password').innerHTML = htmlContentCat
    document.getElementById('setCurrentCategory').innerHTML     = CURRENT_CATEGORY

    pushEmailSimbolTuSimbol()
}


function pushEmailSimbolTuSimbol(x){
    let userEmailSplited = USER_EMAIL.split('')
    let indeX = 0
    let res     = ''
    let stopInterval = setInterval(() => {
        res += userEmailSplited[indeX]
        indeX++
        document.getElementById('spanUserEmail').innerHTML = res
        if(indeX >= userEmailSplited.length){
            clearInterval(stopInterval)
        }
    }, 1)
    
    
    
}