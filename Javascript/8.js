let costPrice = 1000;
let sellingPrice = 1200;

if (sellingPrice > costPrice) {
    let profit = sellingPrice - costPrice;
    console.log("Profit = " + profit);
} else if (sellingPrice < costPrice) {
    let loss = costPrice - sellingPrice;
    console.log("Loss = " + loss);
} else {
    console.log("No Profit, No Loss");
}