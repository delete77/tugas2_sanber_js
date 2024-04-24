const prompt = require('prompt-sync')({ sigint: true });

// Response API
let productBin = {
    "requestId": null,
    "data": [
      {
        "id": 100000057465,
        "storageId": 10000008207,
        "code": "A01-01-01-A",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR00040101",
        "quantity": 76,
        "createdTime": "2021-12-21T13:54:48Z",
      },
      {
        "id": 100000057466,
        "storageId": 10000002181,
        "code": "A01-01-01-B",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR00040101",
        "quantity": 71,
        "createdTime": "2021-12-21T13:54:48Z",
      },
      {
        "id": 100000065224,
        "storageId": 10000008884,
        "code": "Tgt00-A-A-01",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR00040101",
        "quantity": 10,
        "createdTime": "2022-02-08T10:35:19Z",
      }
    ],
    "message": "success"
  };
  
  //Hitung total quantity untuk FBR00040101
  function HitungTotalQuantity(productBin, productCode) {
    let totalQuantity = 0;
  
    // Loop tiap item
    productBin.data.forEach(item => {
      // jika kode prdouk sama
      if (item.productCode === productCode) {
        // jumlahkan 
        totalQuantity += item.quantity;
      }
    });
  
    return totalQuantity;
  }
  
  //Deklarasi untuk FBR00040101 dan nama produk
  let search_Code = "FBR00040101";
  let product_name = "FloBrand-DressBSPink";
  
  //Hitung total quantity untuk FBR00040101
  let totalQuantity = HitungTotalQuantity(productBin, search_Code);
  
  //Menampilkan hasil
  console.log("Jumlah total quantity kode produk", search_Code,"(", product_name, ")","adalah:", totalQuantity);
  