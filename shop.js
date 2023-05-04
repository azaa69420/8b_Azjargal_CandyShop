const products = [
    {
      name: "snickers",
      price: 3200,
      description: "Candy",
      type: "chocolate",
      image:
        "https://www.snickers.com/sites/g/files/fnmzdf616/files/migrate-product-files/dryeqrv2efldaaoyceat.png",
    },
    {
      name: "twix",
      price: 3500,
      description: "Candy",
      type: "gummy",
      image:
        "https://cdn.shopify.com/s/files/1/0015/0611/5642/products/twix_50g_single_1024x.jpg?v=1569463380",
    },
    {
      name: "kitkat",
      price: 2300,
      description: "Candy",
      type: "chocolate",
      image:
        "https://p7.hiclipart.com/preview/175/135/581/chocolate-bar-kit-kat-milk-white-chocolate-milk-thumbnail.jpg",
    },
    {
      name: "haribo",
      price: 5000,
      description: "Candy",
      type: "gummy",
      image:
        "https://cdn.imgbin.com/9/2/12/imgbin-gummi-candy-gummy-bear-cola-red-fox-haribo-candy-CAR2cFEvArcNdLbK5KGPBRs8y.jpg",
    },
    {
      name: "skittles",
      price: 4200,
      description: "Candy",
      type: "chocolate",
      image:
        "https://www.skittles.com/cdn-cgi/image/width=472,height=472,f=auto,quality=90/sites/g/files/fnmzdf586/files/migrate-product-files/bam8afcev37jvz2mfpnk.png",
    },
  ];
  
  function PrintProducts() {
    const productsContainer = document.getElementById("products");
    let newDiv = "";
  
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
  
      
  
      const div = document.createElement("div");
      div.classList.add("product");
      div.innerHTML = `
        <img class='productImage' src="${product.image}"
        <h3 class="title">${product.name}</h3>
        <p>${product.description}</p>
        <p id="price">${product.price}</p>
        <button onclick="AddItem('${product.name}')">add</button>
        <button onclick="MinusItem('${product.name}')">minus</button>
      `;
  
      newDiv += div.outerHTML;
    }
  
    productsContainer.innerHTML = newDiv;
  }
  
  window.onload = PrintProducts;
  
  const userbasket = [];
  
  function AddItem(itemName) {
    const itemIndex = userbasket.findIndex((item) => item.name === itemName);
  
    if (itemIndex !== -1) {
      userbasket[itemIndex].quantity += 1;
    } else {
      userbasket.push({ name: itemName, quantity: 1 });
    }
  
    Basket();
  }
  
  function MinusItem(itemName) {
    const itemIndex = userbasket.findIndex((item) => item.name === itemName);
  
    if (itemIndex !== -1) {
      userbasket[itemIndex].quantity -= 1;
  
      if (userbasket[itemIndex].quantity === 0) {
        userbasket.splice(itemIndex, 1);
      }
    }
  
    Basket();
  }
  
  function Purchase() {
    let total = 0;
    for (let i = 0; i < userbasket.length; i++) {
      const { name, quantity } = userbasket[i];
      const product = products.find((p) => p.name === name);
      if (product) {
        total += product.price * quantity;
      }
    }
  
    document.getElementById("total").innerHTML = total;
    Clear();
  }
  
  function Clear() {
    userbasket = [];
  }
  
  function Basket() {
    const basketDiv = document.getElementById("basket");
    const basketHtml = userbasket
      .map(
        ({ name, quantity }) => `
      <h1>${name} - ${quantity}</h1>
    `
      )
      .join("");
    basketDiv.innerHTML = basketHtml;
  }