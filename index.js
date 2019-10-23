let apiKey = "f88cd716a99c32b5f65a4085ea2ba6d8";
let city = "wroclaw";
let country = "poland";
let button = document.querySelector("#btn");
let input1 = document.querySelector("#input-1");
let input2 = document.querySelector("#input-2");
newFunction();
button.addEventListener("click", function(e){
e.preventDefault();
    city = input1.value;
    country = input2.value;
    
    if(city && country){
        newFunction();
        fiveDayForCast();
        setTimeout(sayHi, 50)
    }else{
        let textContainer = document.querySelector(".text-container");
        if( textContainer.innerHTML == "" ){
            
        alertMessageHandel();
        
        }else{
           
        return false;
        
        }
    }
})


function newFunction(){
    async function myfunction(){
    let raman = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${apiKey}&units=metric`)
    let said = await raman.json();
    return said;
}
myfunction()
.then(data => {
    console.log(data.weather[0].icon)
   document.querySelector(".form-1");
 
    switch(data.weather[0].icon){
        case("01d"):
        document.querySelector("form").style.backgroundImage = "url(clear-sky.jpg)";
        break;
        case("02d"):
        document.querySelector("form").style.backgroundImage = "url(4k-wallpaper-blue-sky-blur-281260.jpg)";
        break;
        case("03d"):
        document.querySelector("form").style.backgroundImage = "url(scaterd-clouds.jpg)";
        break;
        case("04d"):
        document.querySelector("form").style.backgroundImage = "url(clouds-cloudy-farm-236047.jpg)";
        break;
        case("09d"):
        document.querySelector("form").style.backgroundImage = "url(abstract-background-dew-2259232.jpg)";
        break;
        case("10d"):
        document.querySelector("form").style.backgroundImage = "url(bubble-clean-clear-1028600.jpg)";
        break;
        case("11d"):
        document.querySelector("form").style.backgroundImage = "url(clouds-dark-lightning-1118869.jpg)";
        break;
        case("13d"):
        document.querySelector("form").style.backgroundImage = "url(cold-snow-white-60561.jpg)";
        break;
        case("50d"):
        document.querySelector("form").style.backgroundImage = "url(boat-dawn-fog-1138956.jpg)";
        break;
        case("01n"):
        case("02n"):
        case("03n"):
        case("04n"):
        case("09n"):
        case("10n"):
        case("11n"):
        case("13n"):
        case("50n"):
        document.querySelector("form").style.backgroundImage = "url(cold-dark-eerie-414144.jpg)";
        break;
        default:
            break;
    }
          
            let output = ` <div class="container">
                        <img class="mgm" src="http://openweathermap.org/img/w/${data.weather[0].icon}.png">

                               <table>
  <tr>
    <th>Main:</th>
    <th>${data.weather[0].main}</th>
    
  </tr>
  <tr>
    <td>Description</td>
    <td>${data.weather[0].description}</td>
    
  </tr>
  <tr>
    <td>Temp</td>
    <td>${Math.floor(data.main.temp)} &#176 C</td>
    
  </tr>
  <tr>
    <td>Humidity</td>
    <td>${data.main.humidity} %</td>
   
  </tr>
  <tr>
    <td>Wind Speed</td>
    <td>${data.wind.speed} M/S</td>
    
  </tr>
  <tr>
    <td>Country</td>
    <td>${data.sys.country}</td>
    
  </tr>
  <tr>
    <td>City</td>
    <td>${data.name}</td>
    
  </tr>
 <tr>
    <td>Pressure</td>
    <td>${data.main.pressure} Hpa</td>
    
  </tr>
</table>

                           </div>
                         `;
          document.querySelector(".man").innerHTML = output;
        })
       
      
//-------------------        
}





function private(){
                
        
               let image = document.querySelector("img");
               let iconCode = data.weather[0].icon;
               image.setAttribute("src", "http://openweathermap.org/img/w/" + iconCode + ".png")
}

function alertMessageHandel(){
    let div = document.createElement("div");
    div.textContent = "please fill out all the fields";
    div.className = "aler-message";
    let textContainer = document.querySelector(".text-container");
    textContainer.appendChild(div);
    
}



function sayHi(){
    let textContainer = document.querySelector(".text-container");
    textContainer.innerHTML = "";
}





  let fiveDayForCast = () => {
    let myKey = "f88cd716a99c32b5f65a4085ea2ba6d8";
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${myKey}&units=metric`)
    .then(res => res.json())
    .then(data => {
        newFunctionr(data);     
    })
    .catch(err => console.log(err))
  }
  
   function newFunctionr(data){
    let outPut = "";
    for (var said in data.list) {
    if (data.list.hasOwnProperty(said)) {
    outPut +=  `   <div class="container-2">
                  <img  src="http://openweathermap.org/img/w/${data.list[said].weather[0].icon}.png">
                  <h2>${Math.floor(data.list[said].main.temp)} &#176 c</h2>
                  <h3>${data.list[said].weather[0].main}</h3>
                  <h4><span>description:</span> ${data.list[said].weather[0].description}</h4>
                  <h5><span>date:</span> ${data.list[said].dt_txt}</h5>
                  <h5><span>wind speed:</span> ${data.list[said].wind.speed} m/s</h5>
                  <h5><span>humi:</span> ${data.list[said].main.humidity} %</h5>
                  <p>${data.city.name} , ${data.city.country}</p>
          </div> `
 }
}   
  document.getElementById("container").innerHTML = outPut; 
   }










