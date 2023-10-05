// console.log("hello");

// const allProducts = [];

// const resultsButton = document.getElementById("resultsButton");

// const parsedProducts = JSON.parse(localStorage.getItem("allProducts"));

function showChart() {
	// first argument is ctx
	const allProducts = JSON.parse(localStorage.getItem("allProducts"));

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
				backgroundColor: ["#264653"],
			},

			{
				label: "views",
				data: views,
				backgroundColor: ["#2A9D8F"],
			},
		],
	};
	// second argument
	new Chart(ctx, {
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

showChart();
