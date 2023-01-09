const notesEl = document.querySelector(".notes");
const addBtn= document.querySelector('.note-add')


function createNote (title, text) {
    const noteEl = document.createElement('div')
    noteEl.classList.add('note')
    noteEl.innerHTML = 
    `
        <div class="notes-header">         
            <p id="noteTitle">${title}</p>
            <textarea placeholder="Заголовок" id="noteTitleInput" class="hidden" type="text">${title}</textarea>
            <div class="note-actions">
                <button class="note-edit"><i class="fa-solid fa-pen"></i></button>
                <button class="note-delete"><i class="fa-solid fa-trash"></i></button>
            </div>           
        </div>
        <p id="noteText">${text}</p>
        <textarea placeholder="Запись" id="noteTextarea" class="hidden">${text}</textarea>
    `
    localStorage.setItem('wrapperContent', noteEl)
    const editBtn = noteEl.querySelector('.note-edit')
    const deleteBtn = noteEl.querySelector('.note-delete')
    const titleEl = noteEl.querySelector('#noteTitle')
    const textEl = noteEl.querySelector('#noteText')
    const titleTextareaEl = noteEl.querySelector('#noteTextarea')
    const textInputEl = noteEl.querySelector('#noteTitleInput')
    editBtn.addEventListener('click', (e) => {
        titleEl.classList.toggle('hidden')
        textEl.classList.toggle('hidden')
        titleTextareaEl.classList.toggle('hidden')
        textInputEl.classList.toggle('hidden')
    
    })
    
    deleteBtn.addEventListener('click', (e) => {
        noteEl.remove()
    })
    
    titleTextareaEl.addEventListener('input', (e)=> {
        textEl.innerText = e.target.value
        
    })
    
    textInputEl.addEventListener('input', (e)=> {
        titleEl.innerText = e.target.value
    })
    
    return noteEl
}

addBtn.addEventListener('click', function () {
    const el = createNote("", "")
    notesEl.appendChild(el)
    localStorage.getItem('wrapperContent')
})







