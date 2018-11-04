var products = [
	{"name": "Snickers #1","price": 125.55,"image": "bg-01.jpg","description": "You should buy it!"},
	{"name": "Snickers #2","price": 180.45,"image": "bg-02.jpg","description": "You should buy it!"},
	{"name": "Snickers #3","price": 240.55,"image": "bg-03.jpg","description": "You should buy it!"},
	{"name": "Snickers #4","price": 199.99,"image": "bg-04.jpg","description": "You should buy it!"},
	{"name": "Snickers #5","price": 355.20,"image": "bg-05.jpg","description": "You should buy it!"},
	{"name": "Snickers #6","price": 125.55,"image": "bg-06.jpg","description": "You should buy it!"},
	{"name": "Snickers #7","price": 125.55,"image": "bg-07.jpg","description": "You should buy it!"},
	{"name": "Snickers #8","price": 125.55,"image": "bg-08.jpg","description": "You should buy it!"},
];

{/* <div class="col-lg-3 col-md-6 mb-2 catalog-item">
<div class = "card" >
	<img class = "card-img-top" src = "/images/bg-01.jpg" alt = "Card image cap" >
	<div class = "card-body" >
	<h5 class = "card-title" > Card title </h5> 
	<p class = "card-text" > Some quick example text to build on the card title and make up the bulk of the card 's content.</p> 
	<a href = "#" class = "btn btn-danger" > Buy now < /a> </div> 
	</div> 
</div> 
*/}
function createNewElement(tag, innerContent=null, classStr=null, attr=null) {
	var el = document.createElement(tag);
	el.innerHTML = (innerContent) ? innerContent:"";
	el.className = (classStr) ? classStr : "";
	
	if(attr){
		attr.map((attr_el) => el.setAttribute(attr_el.name, attr_el.value));
	}
	return el;
}
 
function createCard(product) {
	var link = createNewElement("a", "Add to card", "btn btn-danger", [{"name": "href","value": "#"}]);
	var p = createNewElement("p", product.description, "card-text");
	var price = createNewElement("h4", "$" + product.price, "card-text");
	var title = createNewElement("h5", product.name, "card-title");

	var cardBody = attachChildtoParent(createNewElement("div", null, "card-body"), [title, price, p, link]);

	var image = createNewElement("img", null, "card-img-top", [{"name": "src", "value":"images/"+product.image},{"name": "alt", "value": product.name}]);
	var card = createNewElement("div", null, "card");
	card.appendChild(image);
	card.appendChild(cardBody);

	var catalogItem = createNewElement("div", null, "col-lg-3 col-md-6 mb-2 catalog-item");
	catalogItem.appendChild(card);
	return catalogItem;
}

function attachChildtoParent(html, array_el) {
	array_el.map((el) => html.appendChild(el));
	return html;
}

var catalog = document.getElementById("catalog");
products.map((el) => catalog.appendChild(createCard(el)));

var innerCatalog = document.getElementById("catalog");
var catalogArray = products.map((listEl) => innerCatalog.appendChild(createCard(listEl)));
console.log(catalogArray.length);
var listPagination = [
	{"name": "&laquo;","linkPagination": "#"},
	{"name": "1","linkPagination": "#"},
	{"name": "2","linkPagination": "#"},
	{"name": "3","linkPagination": "#"},
	{"name": "&raquo;","linkPagination": "#"}
];

function createPagination(arrStrk) {
	var ul = createNewElement("ul", null, "pagination justify-content-center");
	var li, a;
	for (var i = 0; i < arrStrk.length; i++) {
		li = createNewElement("li", null, "page-item");
		a = createNewElement("a", arrStrk[i].name, "page-link", [{"name": "href","value": arrStrk[i].linkPagination}]);
		li.appendChild(a);
		ul.appendChild(li);
	}
	return ul;
}

var pagin = document.getElementById("pagination");
pagin.appendChild(createPagination(listPagination));

var items = document.getElementById("amountItem");
items.appendChild(createNewElement("p", "Items on the page: " + catalogArray.length));

