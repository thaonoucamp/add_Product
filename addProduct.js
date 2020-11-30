function addNewProduct() {
    // Buoc 1: lay ten sp tu input
    let newP = document.getElementById("newProduct").value;
    // Buoc 2: them sp moi vao mang
    product.push(newP);
    // Buoc 3: hien thi danh sach moi
    showAllProduct();
    // Buoc 4:
    document.getElementById("newProduct").value = "";
}