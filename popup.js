document.addEventListener('DOMContentLoaded', function() {

  const generateMeme = (arr) => {
    //randomly generates index
    const index = Math.floor(Math.random() * arr.length);
    const meme = arr[index]
    return meme;
  }

  const memeArr = ["https://i.giphy.com/media/GeimqsH0TLDt4tScGw/200w.webp","https://media2.giphy.com/media/AAsj7jdrHjtp6/giphy.webp?cid=ecf05e47ap2wxacyb1ojk4wvk08whe4wue3xyuogtt1n4krp&ep=v1_gifs_search&rid=giphy.webp&ct=g",
"https://i.giphy.com/media/d3mlE7uhX8KFgEmY/200w.webp","https://media0.giphy.com/media/QMHoU66sBXqqLqYvGO/200w.webp?cid=ecf05e47ap2wxacyb1ojk4wvk08whe4wue3xyuogtt1n4krp&ep=v1_gifs_search&rid=200w.webp&ct=g",
"https://i.giphy.com/media/Lopx9eUi34rbq/200w.webp",
"https://i.giphy.com/media/4pMX5rJ4PYAEM/giphy.webp","https://i.giphy.com/media/o0vwzuFwCGAFO/giphy.webp", 
"https://i.giphy.com/media/h58E0JsuK3h3d8B1do/giphy.webp", "https://i.giphy.com/media/JIX9t2j0ZTN9S/giphy.webp", 
"https://i.giphy.com/media/NEvPzZ8bd1V4Y/giphy.webp", "https://i.giphy.com/media/H5C8CevNMbpBqNqFjl/giphy.webp", 
"https://i.giphy.com/media/l22ysLe54hZP0wubek/200w.webp", "https://i.imgflip.com/prj6o.jpg?a472200", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdfSyU038OMOgXfC0Iq1hXIx-OtQ6ewI0tbg&usqp=CAU"]


  const toggle = document.getElementById('generateButton');

  const buttonToggle = () => {

    const existingImage = document.querySelector('img');

    if (existingImage) {
      existingImage.remove();
    }
      // create new img element
      const imageElement = document.createElement('img');
      // set source attribute
      imageElement.src = generateMeme(memeArr);
      // set additional styles
      imageElement.alt = 'Random Meme';
      imageElement.style.width = '200px';
      imageElement.style.margin = 'auto';
      // Get the reference to the button
      const button = document.getElementById('generateButton');
      // Insert the img element before the button in the DOM
      document.body.insertBefore(imageElement, button);
  }

  toggle.addEventListener('click', buttonToggle);
});




