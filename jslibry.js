let myLibrary = [];
let book1 = addNew("Harry Potter Fever", "J.K Rowling", "345", "Read", "Fiction")
let book2 = addNew("Tempest", "William Shakespeare", "101", "Not-read", "Fiction")


/* Add Books */

function book(title,author,pages,read,type,id){

   this.title = title;
   this.author = author;
   this.pages = pages;
   this.read  = read;
   this.type = type;
    this.id = crypto.randomUUID();
}

function addNew(title,author,pages,read,type){
    let a = new book(title,author,pages,read,type)
    myLibrary.push(a);
    return a; 
}


/* Forms */

let form = document.querySelector("#form");
let addBookBtn = document.querySelector(".addbook");
let submit = document.querySelector('#submit');

addBookBtn.addEventListener("click", (e)=> {
    toggle();
});

function toggle() {
    if(form.className === "hidden") {
        form.className = "grid"
        addBookBtn.textContent = "Cancel"
        addBookBtn.className = "btn-form-opened"
        

    } else if(form.className === "grid") {
        form.className = "hidden";
        addBookBtn.textContent = "Add Book";
        addBookBtn.className = "btn-closed";
        
    }
}



function getRadioValue() {
    const radios = document.getElementsByName('type');
    let selectedValue = "";
    for(let i = 0;i < radios.length; i++){
        if(radios[i].checked){
            selectedValue = radios[i].value;
            break;

        }
        
    }
    console.log(selectedValue)
    type =  selectedValue;
    return selectedValue;
} 




let slider = document.querySelector(".slider")
let checkboxInput = document.querySelector('#read')
let readValue = document.querySelector('#readvalue');


let read = 'Unread';
function checkRead() {
  
    if(readValue.textContent === "Read"){
        readValue.textContent = "Unread"
     
        
        console.log("Unread")
        read = "Unread";
        return "Unread"
    }
 else if(readValue.textContent === "Unread"){
    readValue.textContent = "Read";
   
    
    console.log("Read")
    
    read = "Read"
    return "Read"
    
}
};

checkboxInput.addEventListener("click",checkRead)



let type;
let selectedValue = '';

submit.addEventListener("click", (e) => {
    e.preventDefault();
    getRadioValue();
    myLibrary.length = 0;
    
   
    title = document.getElementById('title');
    author = document.getElementById('author');
    pages = document.getElementById('pages');
    read;
    type;
    id  = crypto.randomUUID();

    console.log(title.value,author.value,pages.value,read,type,id)
   let newBook = addNew(title.value,author.value,pages.value,read,type,id)
   

   toggle();
   
   form.reset();
   showBook(newBook);

}
)

/* Display Books */



let mainContainer = document.querySelector('.library')
let i = 0;
function showBook() {
    myLibrary.forEach(item => {
        
        let bookDisplay = document.createElement('div')
       
        bookDisplay.id = "bookDisplay" + "_" + i++;
        bookDisplay.dataset.bookId = item.id;
        
        let titleHead = document.createElement('div')
        titleHead.textContent = "Title"
        let showTitle = document.createElement("div");
        showTitle.textContent = item.title;

        let authorHead = document.createElement('div')
        authorHead.textContent = "Author"
        let showAuthor = document.createElement("div");
        showAuthor.textContent = item.author;

        let pageHead = document.createElement("div")
        pageHead.textContent = "Pages"
        let showPage = document.createElement('div');
        showPage.textContent = item.pages;

        let readHead = document.createElement('div')
        readHead.textContent = "Status"
        let showRead = document.createElement('div');
        showRead.textContent = item.read;

        let typeHead = document.createElement("div")
        typeHead.textContent = "Type"
        let showType = document.createElement('div')
        showType.textContent = item.type;

        let cancel = document.createElement('div')
        cancel.textContent = "Remove";
        
        let dele = document.createElement('button')
        dele.textContent = "delete";
        dele.className = "dele"

        bookDisplay.append(titleHead,authorHead, pageHead, readHead, typeHead, dele, showTitle, showAuthor,showPage,showRead, showType);
        mainContainer.append(bookDisplay)

        console.log(mainContainer)

    }
    ) 
}
showBook(myLibrary);

let deleteBtn = document.querySelectorAll('.dele');
deleteBtn.forEach( (deleteBtn)=> {
    deleteBtn.addEventListener('click', (e) => {
    const bookD = e.target.closest('[data-book-id]');
    const id =  bookD.dataset.bookId;
    const bookSelect = document.querySelector(`[data-book-id="${id}"]`);

    const index = myLibrary.findIndex(item => item.id === id)
    promptMessage();
    
    
    function promptMessage() {
    console.log("Delete Book?")
   
    let a = confirm("Are you sure you want to delete this book?");

    if(a === true){
        console.log("Yes. Book removed from Library.")
        if(index !== -1)myLibrary.splice(index,1);
        if(bookSelect){bookSelect.remove()};

        

    } else {
        console.log("No.")
    }
    
    }
})


})


