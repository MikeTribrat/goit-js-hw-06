const categoryList = document.querySelector('#categories').children;
console.log(`Number of categories: ${categoryList.length}`);

const categoryListEl = document.querySelectorAll('.item')
    .forEach((el) => {
        console.log('Category:', el.querySelector('h2').textContent);
        console.log('Elements:', el.querySelectorAll('li').length);
    })