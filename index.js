
let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.textContent = 'Rizzo'

content.append(header)

let dogContent = document.createElement('div')

dogContent.setAttribute('class', 'dog-content')

content.append(dogContent)

let dogImage = document.createElement('img')

dogImage.setAttribute('class', 'dog-image')

dogImage.setAttribute('src', './assets/rizzo.jpg')

Dogcontent.append(dogImage)

let dogDetails = document.createElement('div')

dogDetails.setAttribute('class', 'dog-details')
dogcontent.append(dogDetails)

let headerThree = document.createElement('h3');
headerThree.textContent = 'discription';
dogDetails.append(headerthree)

let paragraph = document.createElement('p');
paragraph.textContent = "This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.";
dogdetails.append(paragraph);

let headerthreetwo = document.createElement('h3');
headerthreetwo.textContent = 'feeding times';
dogdetails.append (headerthreetwo);

let ul = document.createElement('ul');
let feedingtimes = ['9:00 am','12:00 pm', '5:00 pm']

for(let i=0; i < feedingtimes.length; i++) {
    let li = document.createElement('li');
    console.log(li)

    li.textcontent = feedingtimes[i];
    ul.append(li)
}

dogdetails.append(ul)

