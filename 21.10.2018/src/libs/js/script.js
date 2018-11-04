console.log(document.body);
var navigation = document.getElementById("navigation")
var li, a, h1;
console.log(navigation);
var names = [
 {"name": 'Home',"href": "index.html"},
 {"name":'Catalog', "href": "catalog.html"},
 {"name": 'About',"href": "about.html"},
 {"name": 'Portfolio', "href": "portfolio.html"},
 {"name": 'Contacts',"href": "contacts.html"},
 { "name": 'Item', "href": "item.html" }
];

//  заполнить навигацию 
  for (var i = 0; i < names.length; i++) {
    li = document.createElement("li");
    a = document.createElement("a");
    a.innerHTML = names[i].name;
    a.setAttribute("class", "nav-link");
    a.setAttribute("href", names[i].href);
    li.setAttribute("class", "nav-item");
    li.appendChild(a);
    navigation.appendChild(li);
    
    if (document.location.href.indexOf(names[i].href) != -1){
       h1 = document.getElementById("h1");
       h1.innerHTML = names[i].name;
       li.setAttribute("class", "active");
    }
   }

   
// document.getElementsByClassName("nav-item")[0].setAttribute("class", "active");


