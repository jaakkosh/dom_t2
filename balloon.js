// Put code of task B here

main = document.querySelector('main')
let balloon=document.getElementById('balloon');
balloon.style.fontSize='50px';
window.addEventListener('keydown', (e)=>{
  
  let sizeAsInteger = parseInt(balloon.style.fontSize, 10);

  if(e.key=='ArrowUp'){
  sizeAsInteger += 10;
  if(sizeAsInteger>70){
    console.log('boom')
    balloon.event.stopPropagation()
  }
}

  else if(e.key=='ArrowDown'){
    sizeAsInteger -= 10;
    
  }
  
  balloon.style.fontSize = sizeAsInteger + 'px';
  console.log(balloon)
});



















// when the  img elements added with innerHTML are clicked,
// log src attribute to console

// const images = document.querySelectorAll('img');

// images.forEach((image) => {
//   image.addEventListener('click', (evt) => {
//     console.log(evt.currentTarget.src);
//   });
// });
// // when the img element is clicked,
//   // log src attribute to console
//   img.addEventListener('click', (evt)=> {
//     console.log(evt.currentTarget.src);
//   })
