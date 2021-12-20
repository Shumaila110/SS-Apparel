const getButton = document.getElementById('btn');
const listOfEntities = document.getElementById('list');
var count = 0

  const getData = () => {
    console.log("GET DATA");

    if (count >=20) {
        alert("You arrived end of the list")
        return
    }
    axios.get(`https://fakestoreapi.com/products`)
        .then(result => {
      // console.log(result.data[0])
      const list = result.data;

      const flexItem = document.createElement("div");
      flexItem.className = "product-center"

      for (i = count; i < count + 4; i++) {
        const listItem = document.createElement("div");
        listItem.className = "pcontainer";

        const pItem = document.createElement("img");
        pItem.className = "pimg";
        pItem.id = "img";
        // const img = document.getElementById('id');
       pItem.src = list[i].image

        const pItem2 = document.createElement("p");
        pItem2.className = "title";
        pItem2.textContent = list[i].title;

        const pItem3 = document.createElement("p");
        pItem3.className = "description";
        pItem3.textContent = list[i].price;


        listItem.appendChild(pItem);
        listItem.appendChild(pItem2);
        listItem.appendChild(pItem3);
        flexItem.appendChild(listItem);

      }

      listOfEntities.appendChild(flexItem);
      count = count + 4
    }).catch(error => {
      console.log('error', error);
    }) 
  };
getData()
getButton.addEventListener('click', getData);
