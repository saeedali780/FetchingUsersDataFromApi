
let cardDiv = document.getElementById("cardDiv");
let data = [];

const FetchTheApi = async () => {
    let Api_URL = "https://jsonplaceholder.typicode.com/users";
    
    try{
        
        let firstAwait = await fetch(Api_URL);
        let response = await firstAwait.json()

       data = response;
       createCards()
        console.log("Response: ",response)
    }catch(err){
        console.log(err)
    }
};


FetchTheApi()

console.log(data)
function createCards(){
    
    data.forEach((user) => {
        console.log("USER : ", user);

        let div = document.createElement("div");
        let h2 = document.createElement("h2");
        h2.innerText = `Name: ${user.name}`;
        let h3 = document.createElement("h3");
        h3.innerText = `Username: ${user.username}`;
        let h4 = document.createElement("h4");
        h4.innerText = ` Email: ${user.email}`;
        let p = document.createElement("p");
        p.innerText =`Address: ${user.address.street +  + user.address.city}`;
        div.append(h2,h3,h4,p);
        cardDiv.append(div);
    });
};