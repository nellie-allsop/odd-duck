console.log("Hello world");

let productContainer = document.querySelector("section");
let image1 = document.querySelector("section img:first-child");
let image2 = document.querySelector("section img:nth-child(2)");
let image3 = document.querySelector("section img:last-child");

function Product(name, src) {
	this.name = name;
	this.src = src;
	this.views = 0;
	this.clicks = 0;
}

function getRandomIndex() {
	return Math.floor(Math.random() * allProducts.length);
}

function createProducts() {
	let product1Index = getRandomIndex();
	let product2Index = getRandomIndex();
	let product3Index = getRandomIndex();

	while (product1Index === product2Index) {
		product2Index = getRandomIndex();
	}

	image1.src = allProducts[product1Index].src;
	image2.src = allProducts[product2Index].src;
	image3.src = allProducts[product3Index].src;
	image1.alt = allProducts[product1Index].name;
	image2.alt = allProducts[product2Index].name;
	image3.alt = allProducts[product3Index].name;

	allProducts[product1Index].views++;
	allProducts[product2Index].views++;
	allProducts[product3Index].views++;
}

function handleProductClick(event) {
	let clickedProduct = event.target.alt;

	if (event.target === productContainer) {
		alert("Please choose a product");
	} else {
		createProducts();
	}

	for (let i = 0; i < allProducts.length; i++) {
		if (clickedProduct === allProducts[i].name) {
			allProducts[i].clicks++;
			break;
		}
	}
}

const allProducts = [
	new Product("Banana", "./Images/banana.jpg"),

	new Product("Bathroom", "./Images/bathroom.jpg"),

	new Product("Boots", "./Images/boots.jpg"),

	new Product("Breakfast", "./Images/breakfast.jpg"),

	new Product("Bubblegum", "./Images/bubblegum.jpg"),

	new Product("Chair", "./Images/chair.jpg"),

	new Product("Cthulu", "./Images/cthulhu.jpg"),

	new Product("Dog duck", "./Images/dog-duck.jpg"),

	new Product("Dragon", "./Images/dragon.jpg"),

	new Product("Pen", "./Images/pen.jpg"),

	new Product("Pet sweep", "./Images/pet-sweep.jpg"),

	new Product("Bag", "./Images/bag.jpg"),

	new Product("Scissors", "./Images/scissors.jpg"),

	new Product("Shark", "./Images/shark.jpg"),

	new Product("Sweep", "./Images/sweep.png"),

	new Product("Tauntaun", "./Images/tauntaun.jpg"),

	new Product("Unicorn", "./Images/unicorn.jpg"),

	new Product("Water can", "./Images/water-can.jpg"),

	new Product("Wine glass", "./Images/wine-glass.jpg"),
];

productContainer.addEventListener("click", handleProductClick);

createProducts();
