const addButton = document.querySelector('.addImg')
const removeButton = document.querySelector('.removeImg')
const container = document.querySelector('#content');
let i = 1;

addButton.addEventListener("click", ()=>{
    //creating div tag
    const div1 = document.createElement('div')
    //add divproPerty css
    div1.classList.add('divProperty')
    //assigning img1,2,3...id to each new created div so that on the basis of this id we can remove and add div tag
    div1.id = `img-${i}`;
    //creating img tag and store it in image1 varibale
    const image1 = document.createElement('img')
    //adding image css to image1
    image1.classList.add('image')
    //setting source of image on evry click i will be change
    image1.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    //appneding new image into new creted div 
    div1.append(image1)
    //its time to append final div into oru main container of html
    container.append(div1)
    //increase the value of i by 1 for next image
    i++
    //if the page will full of images then the page will automatically scrolled up for the next images 
    container.scrollTo({
        top: container.scrollHeight,
        behavior: 'smooth'
    });
})
// code for removing images from web page when use click drop button
removeButton.addEventListener("click", ()=>{
    if(i > 1)
    {
        i--;
        const removeElement = document.getElementById(`img-${i}`);
        if (removeElement) {
            removeElement.remove();
        } else {
            alert('pokemon does not exist');
        }
    }
    else 
    {
        alert("No pokemon is available")
    }
})


