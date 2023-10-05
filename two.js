console.log("hello");

const allProducts = [];

function Product(name, src, views, clicks) {
	this.name = name;
	this.src = src;
	this.views = views;
	this.clicks = clicks;

	allProducts.push(this);
}

const resultsButton = document.getElementById("resultsButton");

const parsedProducts = JSON.parse(localStorage.getItem("allProducts"));

const handleButtonClick = function showChart() {
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
};

resultsButton.addEventListener("click", handleButtonClick);
