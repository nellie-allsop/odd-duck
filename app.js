let productContainer = document.querySelector("section");
let image1 = document.querySelector("section img:first-child");
let image2 = document.querySelector("section img:nth-child(2)");
let image3 = document.querySelector("section img:last-child");
let canvas = document.querySelector("canvas");

let userClicks = 0;
let maxClicks = 5;

const products = [];

// name is the parameter within the brackets
// a constructor function
function Product(name, src, views, clicks) {
	this.name = name;
	this.src = src;
	this.views = views;
	this.clicks = clicks;

	products.push(this);
}

if (localStorage === 0) {
	new Product("Banana", "./Images/banana.jpg", 0, 0);

	new Product("Bathroom", "./Images/bathroom.jpg", 0, 0);

	new Product("Boots", "./Images/boots.jpg", 0, 0);

	new Product("Breakfast", "./Images/breakfast.jpg", 0, 0);

	new Product("Bubblegum", "./Images/bubblegum.jpg", 0, 0);

	new Product("Chair", "./Images/chair.jpg", 0, 0);

	new Product("Cthulu", "./Images/cthulhu.jpg", 0, 0);

	new Product("Dog duck", "./Images/dog-duck.jpg", 0, 0);

	new Product("Dragon", "./Images/dragon.jpg", 0, 0);

	new Product("Pen", "./Images/pen.jpg", 0, 0);

	new Product("Pet sweep", "./Images/pet-sweep.jpg", 0, 0);

	new Product("Bag", "./Images/bag.jpg", 0, 0);

	new Product("Scissors", "./Images/scissors.jpg", 0, 0);

	new Product("Shark", "./Images/shark.jpg", 0, 0);

	new Product("Sweep", "./Images/sweep.png", 0, 0);

	new Product("Tauntaun", "./Images/tauntaun.jpg", 0, 0);

	new Product("Unicorn", "./Images/unicorn.jpg", 0, 0);

	new Product("Water can", "./Images/water-can.jpg", 0, 0);

	new Product("Wine glass", "./Images/wine-glass.jpg", 0, 0);
} else {
	localStorage.getItem(products);
	// if there is something in localStorage then get that and turn into my products
}

function getRandomIndex() {
	return Math.floor(Math.random() * allProducts.length);
}

// not the actual products but indexes
function createProducts() {
	let product1Index = getRandomIndex();
	let product2Index = getRandomIndex();
	let product3Index = getRandomIndex();

	while (
		product1Index === product2Index ||
		product1Index === product3Index ||
		product2Index === product3Index
	) {
		product2Index = getRandomIndex();
		product3Index = getRandomIndex();
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

// trying out for lab

// If selected in last trio then don’t show in next
// Turn the trio into an array and then for loop through that, if anything in that array comes up then
// break the loop and randomly generate three more images

// let createProducts() =

// for (let i = 0; i < allProducts.length; i++) {
// 	if (createProducts === allProducts[i].name) {
// 		createProducts.getRandomIndex
// 	}
// 		//break stops the loop because we've found what we're looking for
// product1Index = getRandomIndex();
// product2Index = getRandomIndex();
// product3Index = getRandomIndex();

function handleProductClick(event) {
	if (userClicks === maxClicks) {
		alert("You have run out of votes");
		// now don't run the rest of the function if it's true
		showChart();
		localStorage.getItem(products); // put up to date products array into local storage
		return;
	}

	userClicks++;

	let clickedProduct = event.target.alt;

	if (event.target === productContainer) {
		alert("Please choose a product");
	} else {
		createProducts();
	}
	// increasing the clicks of the product
	for (let i = 0; i < allProducts.length; i++) {
		if (clickedProduct === allProducts[i].name) {
			allProducts[i].clicks++;
			//break stops the loop because we've found what we're looking for
			break;
		}
	}

	createProducts();
}

// the array for the JSON, only if nothing in local storage

//trying out lab 13

// send the Array
// take the array

// function checkLocal(){
// 	const prodsFromLS = JSON.parse(localStorage.getItem("Product"));

// 	if (prodsFromLS){
// 		for (let i = 0; i < prodsFromLS.length; i++){
// 			const newProd
// 		}
// 	}

// // wanting to put the votes array into local storage, so 25 clicks worth

// // tapping into all products[i].clicks or this.clicks? - also need to take into account views

// // want to have votes come up in the console

// function putIntoLocalStorage(){
// 	const votesStringified = JSON.stringify(products)
// }

productContainer.addEventListener("click", handleProductClick);

function showChart() {
	// first argument is ctx
	const ctx = document.getElementById("resultsChart");
	let productName = [];
	let views = [];
	let clicks = [];

	for (let i = 0; i < allProducts.length; i++) {
		productName.push(allProducts[i].name);
		views.push(allProducts[i].views);
		clicks.push(allProducts[i].clicks);
	}

	const data = {
		labels: productName,
		datasets: [
			{
				label: "clicks",
				data: clicks,
				backgroundColor: ["red", "orange", "yellow", "green", "blue", "purple"],
			},

			{
				label: "views",
				data: views,
				backgroundColor: ["red", "orange", "yellow", "green", "blue", "purple"],
			},
		],
	};
	// second argument
	const config = new Chart(ctx, {
		type: "bar",
		data: data,
		options: {
			scales: {
				y: {
					beginAtZero: true,
				},
			},
		},
	});
}

// happens when the page loads
createProducts();

// const viewResults = document.getElementById("view-results");
// viewResults.addEventListener("click", showResults);

// function showResults() {
// 	let results = document.querySelector("ul");
// 	// loop through products and make li for each one
// 	for (let i = 0; i < allProducts.length; i++) {
// 		const li = document.createElement("li");
// 		// const Product = Products[i];
// 		li.textContent =
// 			allProducts[i].name +
// 			" was viewed " +
// 			allProducts[i].views +
// 			" times and clicked " +
// 			allProducts[i].clicks +
// 			" times. ";
// 		results.appendChild(li);
// 	}
// }
