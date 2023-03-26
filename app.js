const products=[
    {
        id:1,
        price:5000,
        colors:[
            {
                title:"JBL Tune 510BT",
                code:"blue",
                img:"./source/on head/pngwing.com.png"
            },
            {
                title:"JBL Tune 510BT white",
                code:"rgb(217, 213, 204)",
                img:"./source/on head/pngwing.com (1).png"
            },
            {
                title:"JBL Tune 510BT red",
                code:"red",
                img:"./source/on head/pngwing.com (2).png"
            }
        ],
        description:"On Ear Wireless Headphones with Mic, up to 40 Hours Playtime, Pure Bass, Quick Charging, Dual Pairing, Bluetooth 5.0 & Voice Assistant Support for Mobile Phones (Blue)"
    },
    {
        id:2,
        price:4000,
        colors:[
            {
                title:"AmazonBasic",
                code:"rgb(58, 52, 105)",
                img:"./source/neck band/kindpng_5470937.png"
            },
            {
                title:"AmazonBasic Y909 light blue",
                code:"rgb(54, 39, 176)",
                img:"./source/neck band/kindpng_2091689.png"
            },
            {
                title:"AmazonBasic Y909 light brown",
                code:"rgb(135, 115, 12)",
                img:"./source/neck band/kindpng_7414657.png"
            }
        ],
        description:"Truly Wireless in Ear Earbuds with Built-in Mic, Touch Control, IPX5 Water Resistant, Bluetooth 5.3, Up to 25 Hours Playtime and Fast Charging "
    },
    {
        id:3,
        price:6000,
        colors:[
            {
                title:"SoundPEATS p-945",
                code:"black",
                img:"./source/ear buds/peats.png"
            },
            {
                title:"JBL ear buds je-488",
                code:"rgb(87, 84, 85)",
                img:"./source/ear buds/PngItem_5956227.png"
            },
            {
                title:"JBL ear-buds JL-508",
                code:"rgb(7, 126, 237)",
                img:"./source/ear buds/gbl.png"
            }
            
        ],
        description:"TrueFree+ True Wireless Earbuds Bluetooth 5.0 in-Ear Headphones, Earphones with Built-in Mic, 650 mAh Battery, 35 Hours Playtime"
    },
    {
        id:4,
        price:2000,
        colors:[
            {
                title:"Marshall 4090940",
                code:"rgb(247, 208, 12)",
                img:"./source/wiredEar phones/PngItem_3093372.png"
            },
            {
                title:"Marshall 256405",
                code:"black",
                img:"./source/wiredEar phones/PngItem_2078302.png"
            },
            {
                title:"Ironman Sweat-Resistant",
                code:"rgb(145, 55, 23)",
                img:"./source/wiredEar phones/PngItem_1752508.png"
            }
        ],
        description:"Mode EQ Wired in Ear Headphone with Mic (Brass)"
    }

]
var daysTag = document.getElementById("daysleft");
var hrsTag = document.getElementById("hrsleft");
var minTag = document.getElementById("minsleft");
var secTag = document.getElementById("secleft");
var discountDate = document.querySelector(".discountDate");
function offerTimer(){
    var currentDate = new Date();
    var dateNew = new Date(currentDate.getFullYear(),currentDate.getMonth(),currentDate.getDate()+2,4,0,0);
    var milliSeconds = (dateNew-currentDate)/1000;
    var daysLeft = Math.floor(milliSeconds/3600/24);
    var hrsLeft = Math.floor(milliSeconds/3600)%24;
    var minutesLeft = Math.floor(milliSeconds/60)%60;
    var secondsLeft = Math.floor(milliSeconds)%60;
    daysTag.innerHTML = `${daysLeft} <span>:</span>`;
    hrsTag.innerHTML = `${hrsLeft} <span>:</span>`;
    minTag.innerHTML = `${minutesLeft} <span>:</span>`;
    secTag.innerHTML = `${secondsLeft}`;
    discountDate.innerHTML = `${dateNew.getDate()}/${dateNew.getMonth()}/${dateNew.getFullYear()}`;
}

offerTimer();
setInterval(offerTimer,1000);

var selectedProduct = products[0];
var productSelectedImageTag = document.querySelector(".productImageSelected");
var productTitleTag = document.querySelector(".titleOfProduct");
var productPriceTag = document.querySelector(".priceOfProduct");
var productDescriptionTag = document.querySelector(".descriptionOfProduct");
var productSelectedColor =  document.querySelectorAll(".color");



const slideWrapper = document.querySelector(".sliderWrapper");
const productSelected = document.querySelectorAll(".availableProducts");
productSelected.forEach((itemSelected,index)=>{
    itemSelected.addEventListener("click",()=>{
        slideWrapper.style.transform = `translateX(${-100*index}vw)`;
        selectedProduct=products[index];

        //show the selected product in product template
        productTitleTag.textContent = selectedProduct.colors[0].title; 
        productPriceTag.textContent = "₹ "+selectedProduct.price;
        productDescriptionTag.textContent = selectedProduct.description;
        productSelectedImageTag.src = selectedProduct.colors[0].img

        // change the product by colors
        productSelectedColor.forEach((color,index)=>{
            color.style.backgroundColor = selectedProduct.colors[index].code;
            productTitleTag.textContent = selectedProduct.colors[index].title; 
        });
    });
});


productSelectedColor.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        productSelectedImageTag.src = selectedProduct.colors[index].img
    });
});