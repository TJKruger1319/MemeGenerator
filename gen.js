const form = document.querySelector('#memeform');
const results = document.querySelector('#results');

form.addEventListener(
    'submit', function(e) {
    e.preventDefault();
    const image = document.querySelector('input[name="image"]:checked').id;
    const textInput = document.querySelector('input[name="memetext"]').value;
    newMeme = createMeme(image, textInput);
    results.appendChild(newMeme);
    form.reset();
    }
);

function createMeme(image, text) {
    const meme = document.createElement('div');
    meme.classList.add("newDiv");
    const img = document.createElement("img");
    const p = document.createElement("p");
    p.innerText = text;
    meme.appendChild(p);
    p.classList.add("memeText");
    img.src = "/meme_generator/images/"+image+".jpg";
    img.classList.add("newMeme");
    meme.append(img);
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete!";
    deleteButton.addEventListener('click', function(e){
        results.innerHTML = '';  
    }); 
    deleteButton.classList.add("deleteButton");
    meme.appendChild(deleteButton);
        
    return meme;
}