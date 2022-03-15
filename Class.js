
ratingData = [
    {restaurent: 'KFC', rating: 5},
    {restaurent: 'KFC', rating: 4},
    {restaurent: 'Burger king', rating: 2},
    {restaurent: 'Domino', rating: 5},
    {restaurent: 'Domino', rating: 1},
    {restaurent: 'Pizza hut', rating: 3},
    {restaurent: 'Subway', rating: 3},
    {restaurent: 'Subway', rating: 4},
    ]

    const uniqueRes = Array.from(new Set(ratingData.map(({restaurant})=>restaurant)))

    console.log(uniqueRes);

    var arr=[]  ;  
    uniqueRes.map(resName=>{
        const resEntry = ratingData.filter(obj=>obj.restaurant == resName );

        let outputObj = {
            restaurant:resName,
            averageRating: resEntry.reduce((x,y)=>x + y.rating,0)/resEntry.length
        }

        arr.push(outputObj)

    })
    console.log(arr)

    const xx = arr.filter(x=>x.averageRating < 4)
    console.log(xx)

