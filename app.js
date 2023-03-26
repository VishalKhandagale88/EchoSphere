const products=[
    {
        id:1,
        title:"JBL Tune 510BT",
        price:5000,
        colors:[
            {
                code:"blue",
                img:"./source/on head/pngwing.com.png"
            },
            {
                code:"rgb(217, 213, 204)",
                img:"./source/on head/pngwing.com (1).png"
            },
            {
                code:"red",
                img:"./source/on head/pngwing.com (2).png"
            }
        ],
        description:"JBL PURE BASS SOUND: For over 70 years, JBL has engineered the precise, impressive sound found in big venues around the world. These Bluetooth headphones reproduce that same JBL sound, punching out bass that’s both deep and powerful."
    },
    {
        id:2,
        title:"TUne i ",
        price:4000,
        colors:[
            {
                code:"rgb(58, 52, 105)",
                img:"./source/neck band/kindpng_5470937.png"
            },
            {
                code:"rgb(54, 39, 176)",
                img:"./source/neck band/kindpng_2091689.png"
            },
            {
                code:"rgb(135, 115, 12)",
                img:"./source/neck band/kindpng_7414657.png"
            }
        ],
        description:"GOOGLE FAST PAIR: Thanks to Fast Pair enabled by Google, the JBL Tune 760NC are immediately connected to your Android device. You can also pair multiple devices just by tapping on the devices’ screen."
    },
    {
        id:3,
        title:"SoundsPeats",
        price:6000,
        colors:[
            {
                code:"black",
                img:"./source/ear buds/peats.png"
            },
            {
                code:"rgb(87, 84, 85)",
                img:"./source/ear buds/0.jpg"
            },
            {
                code:"rgb(32, 171, 164)",
                img:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/612ekjdsxvL._SX522_.jpg"
            }
            
        ],
        description:"omplete wireless & latest Bluetooth 5. 0: Thanks to the latest Bluetooth 5. 0 With high resolution decoder built-in and AAC/SBC audio coding technology, both speed and range in communication have dramatically improved. By improving communication problems of conventional Bluetooth earphones and minimizing sound skipping and interruption, you can enjoy Music comfortably even in the bustle of the city"
    },
    {
        id:4,
        title:"Marshall",
        price:4000,
        colors:[
            {
                code:"rgb(247, 208, 12)",
                img:"./source/wiredEar phones/PngItem_3093372.png"
            },
            {
                code:"black",
                img:"./source/wiredEar phones/PngItem_2078302.png"
            },
            {
                code:"rgb(145, 55, 23)",
                img:"./source/wiredEar phones/PngItem_1752508.png"
            }
        ],
        description:"Marshall. Frequency Response : 20 Hz-20kHz. Sensitivity : 100 dB SPL. Driver Impedance: 18 Ω Mode eq sports the iconic marshall logo on the cable clip and marshall m logo on its earphones"
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

        // change the product by colors
        productSelectedColor.forEach((color,index)=>{
            color.style.backgroundColor = selectedProduct.colors[index].code;
        })
    });
});

productSelectedColor.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        productSelectedImageTag.src = selectedProduct.colors[index].img
    });
});