const itemList = [
    {
        name: "IPhone 13", 
        quantity: 2, 
        availability: true,
        price: 1000
    }, 

    {
        name: "IPhone 14", 
        quantity: 1, 
        availability: true,
        price: 1500
    }, 
    {
        name: "IPhone 15", 
        quantity: 0, 
        availability: false,
        price: 2000
    }
]

function displayAvailability(list) {
    list.forEach(element => {
        if (element.availability == true) {
            console.log(element.name)
        }
    });
}



displayAvailability(itemList);