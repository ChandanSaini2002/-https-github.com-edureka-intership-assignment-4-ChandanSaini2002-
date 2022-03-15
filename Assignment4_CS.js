ratingData = [
    {restaurent: 'KFC', rating: 5},
    {restaurent: 'Burger king', rating: 4},
    {restaurent: 'KFC', rating: 3},
    {restaurent: 'Domino', rating: 2},
    {restaurent: 'Subway', rating: 3},
    {restaurent: 'Domino', rating: 1},
    {restaurent: 'Subway', rating: 4},
    {restaurent: 'Pizza hut', rating: 5},
]

const uniqueReastaurent = Array.from(new Set(ratingData.map(({restaurent})=> restaurent)));
console.log(uniqueReastaurent);

let arr = [];
uniqueReastaurent.map(resName=>{
    const resRatings = ratingData.filter(obj=> obj.restaurent == resName);
    let outputObj = {
        restaurent: resName,
        avgRating: resRatings.reduce((x, y)=> x + y.rating,0)/resRatings.length
    }
    arr.push(outputObj);
})

console.log(arr);

const xx = arr.filter(x=>x.rating >= 4);
console.log(xx);
