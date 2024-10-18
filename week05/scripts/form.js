// Products array
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

// Display products in the <select> dropdown
products.forEach(product => {
    let splitName = product.name.toLowerCase().split(' ');
    for (let i = 0; i < splitName.length; i++) {
        splitName[i] = splitName[i].charAt(0).toUpperCase() + splitName[i].substring(1);
    }
    product.name = splitName.join(' ');
    displayProduct(product);
});

function displayProduct(product) {
    const productName = document.createElement('option');
    productName.textContent = product.name;
    productName.value = product.id;
    document.querySelector('#product-name').append(productName);
}

// Handle form submission and localStorage review counter
document.querySelector('form').addEventListener('submit', function (event) {
    // Increment the review count in localStorage
    let reviewCount = localStorage.getItem('reviewCount');
    reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;
    localStorage.setItem('reviewCount', reviewCount);

    // Let the form submit normally to review.html
});
