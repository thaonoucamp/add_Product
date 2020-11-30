function editProduct(index) {
    // Buoc 1: dua ra o de nhap du lieu
    let newName = prompt("Hay sua lai Product ", product[index]);
    // Buoc 2: gan gia tri moi cho index
    product[index] = newName;
    // Buoc 3: hien thi lai mang
    showAllProduct();
}