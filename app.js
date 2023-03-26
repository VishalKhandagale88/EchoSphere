const products=[
    {
        id:1,
        title:"on head",
        price:5000,
        colors:[
            {
                code:"red",
                img:"./source/on head/pngwing.com.png"
            },
            {
                code:"while",
                img:"./source/on head/pngwing.com (1).png"
            },
        ],
        description:"ksdnkavlllllllsdjbkalsLDBLVVUSBSLI6565sldngahu16545ksjjbaiogsadlilnfpn6544688"
    },
    {
        id:2,
        title:"neck band",
        price:4000,
        colors:[
            {
                code:"yellow",
                img:"./source/neck band/kindpng_5470937.png"
            },
            {
                code:"black gold",
                img:"./source/neck band/kindpng_7414657.png"
            },
        ],
        description:"ksdnkavlllllllsdjbkalsLDBLVVUSBSLI6565sldngahu16545ksjjbaiog"
    },
    {
        id:3,
        title:"Ear buds",
        price:6000,
        colors:[
            {
                code:"blackgreen",
                img:"./source/ear buds/peats.png"
            },
            {
                code:"red gray",
                img:"./source/ear buds/PngItem_5956227.png"
            },
        ],
        description:"ksdnkavlllllllsdjbkalsLDBLVVUSBSLI6565sldngahu16545"
    },
    {
        id:4,
        title:"wire",
        price:2000,
        colors:[
            {
                code:"brown black",
                img:"./source/wiredEar phones/PngItem_3093372.png"
            },
            {
                code:"black",
                img:"./source/wiredEar phones/PngItem_2078302.png"
            },
        ],
        description:"ksdnkavlllllllsdjbkalsLDBLVVUSBSLI"
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

console.log(productPriceTag);

const slideWrapper = document.querySelector(".sliderWrapper");
const productSelected = document.querySelectorAll(".availableProducts");
productSelected.forEach((itemSelected,index)=>{
    itemSelected.addEventListener("click",()=>{
        slideWrapper.style.transform = `translateX(${-100*index}vw)`;
        selectedProduct=products[index];

        //show the selected product in product template
        productTitleTag.textContent = selectedProduct.title; 
        productPriceTag.textContent = "₹ "+selectedProduct.price;
        productDescriptionTag.textContent = selectedProduct.description;
        productSelectedImageTag.src = selectedProduct.colors[0].img

        // chage the product by colors
        productSelectedColor.forEach((color,index)=>{
            color.style.backgroundColor = selectedProduct.colors[index].code;
        })
    });
});
