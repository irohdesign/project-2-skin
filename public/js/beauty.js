// home page product search
$("#productBtn").on("click", function(event) {
    event.preventDefault();

    var product = $("#productSearch").val().trim();
    var brand = $("#brandSearch").val().trim();
    var summary = "As a 100% vegan and cruelty-free brand, Kat Von D Beauty is committed to creating hyper-performance beauty products that are completely free of animal-derived ingredients, and never tested on animals. That means you can conceal, contour and create with confidence—knowing your products aren’t harming animals.We never use common cosmetic ingredients such as beeswax and carmine (a red dye made from beetles), and instead opt for kinder alternatives, without ever compromising on color. Now you can make compassionate choices without sacrificing bold, beautiful pigment and everlasting wear!";
    var imgSrc = "https://www.sephora.com/productimages/sku/s1848522-main-hero-300.jpg";

    // create the search object
    var beautySearch = {
        product: product,
        brand: brand,
        summary: summary,
        imgSrc: imgSrc
    };

    beautyResult(beautySearch);

    // $.post("/api/beautySearch", beautySearch)
    // .then(function(data) {
    //     console.log(data);
    //     // run function for displaying info
    // });

    // build results

    // empty inputs
    $("#productSearch").val("");
    $("#brandSearch").val("");
});

// displaying info
function beautyResult(e) {
    console.log(e);
    resultBuild(e);

    // create info based on data returned
}

function resultBuild(e) {

    // build results container
    var resultContainer = $("<section>");
    $(resultContainer).text(e.product);
    $("#results").append(resultContainer);

    // build row to contain the columns

    // img in column (background-img) for size adjustment?

    // column with text
        // product name and brand
        // product category

        // ingredients

        // warnings/testing

}