const fetch_promise = fetch("https://fakestoreapi.com/products");
fetch_promise.then(response => {
  const json_promise = response.json();
  json_promise.then(json_data => {
    // console.log(json_data);
    display(json_data);
  })
});

const display = data => {
  // console.log(data);
  const parent = document.getElementById("product_container");
  for(let i = 0; i < data.length; i = i + 1) {
    const single_data = data[i];
    const title = single_data.title;
    const image = single_data.image;
    const price = single_data.price;
    
    const img_element = document.createElement("img");
    img_element.src = image;

    const h4_element = document.createElement("h4");
    h4_element.innerText = title;

    const price_element = document.createElement("p");
    price_element.innerText = price;

    const add_to_cart = document.createElement("");

    const container_element = document.createElement("div");
    container_element.appendChild(img_element);
    container_element.appendChild(h4_element);
    container_element.appendChild(price_element);

    parent.appendChild(container_element);
  }
}