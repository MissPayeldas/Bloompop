const productContainer = document.querySelector( ".popular-dress-container");

if (productContainer) {
    displayProducts();
}

function displayProducts (){
    Products.forEach(Product => {
        const productCard = Document .createElement("div");
        productCard.classList.add("product-card")
        productCard.innerHTML = `
            <div class ="img-box">
                <img src="$(Product.colors[0].mainImage)">
            </div>
            <h2 class ="title">${Product.title}</h2>
            <span class ="price">${product.price}</span>
        
        `;
        productContainer.appendChild(productCard);

        const imgBox = productCard.querySelector(".img.box");
        imgBox.addEventListener("click", () =>{
            sessionStorage.setItem("selectProduct", JSON.stringify(product));
            window.location.href = " product-details.html";
        });
    });

}

