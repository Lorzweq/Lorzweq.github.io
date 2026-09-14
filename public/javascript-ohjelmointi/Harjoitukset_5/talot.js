// Lataa JSON-tiedoston palvelimelta ja palauttaa datan
async function getHouses() {
    const response = await fetch("data.json");
    const houses = await response.json();
    return houses;
}

// Muodostaa talolistauksen sivulle DOMia muokkaamalla
async function renderHouses() {
    let houses = await getHouses();
    console.log(houses);

    let housediv = document.getElementById("houses");

    houses.forEach(house => {
        let housecontainer = document.createElement("div");
        housecontainer.className = "houseContainer";

        let image = document.createElement("img");
        image.src = house.image;
        image.className = "houseImage";

        let header = document.createElement("p");
        header.className = "header";
        header.innerHTML = house.address;

        let size = document.createElement("p");
        size.innerHTML = house.size + " m²";

        let text = document.createElement("p");
        text.className = "text";
        text.innerHTML = house.text;

        let numberstr = new Intl.NumberFormat("fi-FI").format(house.price);
        let price = document.createElement("p");
        price.className = "header";
        price.innerHTML = numberstr + " €";

        housecontainer.appendChild(image);
        housecontainer.appendChild(header);
        housecontainer.appendChild(size);
        housecontainer.appendChild(text);
        housecontainer.appendChild(price);

        housediv.appendChild(housecontainer);
    });
}

renderHouses();