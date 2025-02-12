let frutas = ["piña","manzana","sandia","sandia","piña","manzana","manzana","piña","sandia","manzanaa","piña","manzana","sandia","sandia","piña","manzana","manzana","piña","sandia","manzanaa","piña","manzana","sandia","sandia","piña","manzana","manzana","piña","sandia","manzanaa","piña","manzana","sandia","sandia","piña","manzana","manzana"];
let piñaCount = 0;
let manzanaCount = 0;
let sandiaCount = 0;
let i = 0;
while (i < frutas.length){
    let fruta = frutas[i];
    if (fruta === "piña"){
        piñaCount++;
    } else if (fruta === "manzana"){
        manzanaCount++;
    } else if (fruta === "sandia"){
        sandiaCount++;
    }
    i++;
}
console.log("Piñas:", piñaCount);
console.log("Manzanas:", manzanaCount);
console.log("Sandias:", sandiaCount);