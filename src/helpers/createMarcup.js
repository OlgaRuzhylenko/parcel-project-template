function createMarkup(arr, list) {
    let  markup;
    if (arr.length) {
   markup = arr.
   map(({id, img, name}) => 
`<li data-id=${id} class="js-card">
<img src="${img}" alt="${name}" width="200">
<h2>${name} </h2>
<p>
<a href="#" class="js-info">More information</a>
</p>
<div>
<button class ="js-favorite">Add to favorite</button>
<button class ="js-basket">Add to basket</button>
</div>
</li>` )
.join('');
    } else {
        markup = `<li >
        <img src="https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.picturequotes.com%2Ffeeling-empty-quote-6-picture-quote-664742&psig=AOvVaw2f-dYhrVURvXEir5B6RDYL&ust=1698083270890000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIDEh6SbioIDFQAAAAAdAAAAABAE" alt="404" width="600">
                </li>`
    }
list.innerHTML = markup;
}
export {createMarkup}