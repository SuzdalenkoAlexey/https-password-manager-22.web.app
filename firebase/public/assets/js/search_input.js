let searchPasswordInput = document.getElementById('searchPasswordInput')
searchPasswordInput.addEventListener('input', () => {
    let x = searchPasswordInput.value.trim().toLowerCase()
    let arrayContaines = []

    LIST_PASSWORD.forEach(item => {
        if(item.date.includes(x) || item.category.toLowerCase().includes(x) || item.email.toLowerCase().includes(x) || item.pass.toLowerCase().includes(x) || item.comment.toLowerCase().includes(x)){
            arrayContaines.push(item)
        }
    })

    pushSearchData(arrayContaines)
})

function pushSearchData(x){
     /* push content to password list table */
    let htmlContentCat = ''
    let intLineCounter = 0
    x.forEach(x =>  {
         if(CURRENT_CATEGORY == 'All'){
             htmlContentCat += `<tr><td>`+x.date+`</td><td>`+x.category+`</td><td>`+x.email+`</td><td>`+x.pass+`</td><td>`+x.comment+`</td>
                 <td>
                     <!-- <i onclick="actionFromThis('`+x.id+`', 'change')" class="actionsIcons bi bi-pencil-fill"></i> -->
                     <i onclick="actionFromThis('`+x.id+`', 'delete')" class="actionsIcons bi bi-archive-fill"></i>
                 </td>
             </tr>`
             intLineCounter++
         } else {
             if(CURRENT_CATEGORY == x.category){
                 htmlContentCat += `<tr><td>`+x.date+`</td><td>`+x.category+`</td><td>`+x.email+`</td><td>`+x.pass+`</td><td>`+x.comment+`</td>
                     <td>
                         <!-- <i onclick="actionFromThis('`+x.id+`', 'change')" class="actionsIcons bi bi-pencil-fill"></i> -->
                         <i onclick="actionFromThis('`+x.id+`', 'delete')" class="actionsIcons bi bi-archive-fill"></i>
                     </td>
                 </tr>`
                 intLineCounter++
             }
         }
     })
     document.getElementById('table_content_password').innerHTML = htmlContentCat
     document.getElementById('setCurrentCategory').innerHTML     = CURRENT_CATEGORY
     document.getElementById('counterLines').innerHTML           = intLineCounter
}