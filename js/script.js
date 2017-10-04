$(function(){
    
    var carouselList = $("#carousel ul");
    
    setInterval (changeImage, 3000);

    function changeImage() {
        carouselList.animate ({'marginLeft': -400}, 500, moveFirstSlide);
    }

    function moveFirstSlide() {        
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({marginLeft: 0});
    }
});

function Phone(brand, price, color) {
    this.brand = brand;
    this.price = price;
    this.color = color;
}

Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".")
}

var SamsungGalaxyS6 = new Phone("Samsung", 2000, "black");
var iPhone6s = new Phone("Apple", 3000, "silver");
var OnePlusOne = new Phone("One", 1000, "red");

SamsungGalaxyS6.printInfo();