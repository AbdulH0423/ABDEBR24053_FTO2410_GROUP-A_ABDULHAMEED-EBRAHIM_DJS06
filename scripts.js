// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//forEach basics:
names.forEach(name => console.log(name));

provinces.forEach(province => console.log(province));

names.forEach((name, index) => console.log(`${name}(${provinces[index]})`));


//Uppercase Transformation:
const upperCaseProvinces = provinces.map(province => province.toUpperCase());
console.log("Uppercase Transformation " ,upperCaseProvinces);


//Name Lengths:
const nameLengths = names.map(name => name.length);
console.log("Name Lengths: " ,nameLengths);


//Sorting:
const sortedProvinces = [...provinces].sort();
console.log("Sorting", sortedProvinces);


//Filtering Cape:
const filteredProvincesByCape = provinces.filter(province => !province.includes("Cape"));
console.log("Filtering Cape", filteredProvincesByCape.length);


//Finding 'S': 
const nameWithS = names.find(name => name.includes("S"));
console.log("Finding 'S'" , nameWithS);


//Creating Object Mapping:
const nameProvince = names.reduce((acc, name, index)=>{
  acc[name] = provinces[index];
  return acc;
},{});
console.log("Finding 'S'" , nameProvince);


//Advanced Exercies:
//Log Products:
console.log(products.forEach(product =>console.log(product.product)));


//Filter by name length:
console.log(products.filter(product=> product.product.length <= 5));

//Price Manipulation:
console.log(products.filter(product => product.price && product.price.toString().trim() !== "")
.map(product => ({...product, price:Number(product.price)})).reduce((total, product) => total + product.price, 0));

//Concatenate Product Names:
console.log(products.reduce((acc,product)=> acc + product.product, ""));


//Find Extremes in Prices:
const prices = products.filter(product=> product.price && product.price.toString().trim() !=="")
.map(product => ({...product, price:Number(product.price)}));
const highestPrice = Math.max(...prices.map(product =>product.price));
const lowestPrice = Math.min(...prices.map(product => product.price));
console.log(`Highest: ${highestPrice}. Lowest: ${lowestPrice}`);


// Object Transformation: 
console.log(Object.entries(products).reduce((acc,[index,product])=>{
  acc[index] = {name:product.product, cost:product.price};

  return acc;

},{}));