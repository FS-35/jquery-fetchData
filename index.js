// $( ".inputSearch" );

// const { array } = require("yargs");

// $.get('https://fakestoreapi.com/products',  // url
//       function (data, textStatus, jqXHR) {  // success callback
//           alert('status: ' + textStatus + ', data:' + data);
//     });
var input = $(".inputSearch");
var $products = $('#products');
var Search = $('.Search_Products')
function filteritem(object,text){
    return object.filter(element=>element.toLowerCase().indexOf(text.toLowerCase())!==-1)
}
Search.click(function () {
    $.ajax({
        type:'GET',
        url:"https://fakestoreapi.com/products",
        success: function(products){
            // let filtredList = products.map(item=>item.title.trim().replace(/\s/g, "").toLowerCase())
            console.log(filteritem(products.map(item=>item.title),input.val()));
            let List = filteritem(products.map(item=>item.title),input.val())
            let L = []  // always create the list outside 
            for (let item of List){
                
                let Pro = products.filter(titre => titre.title ===item)
                L.push(Pro)
            }
            
            
            // const index = filtredList.findIndex(ele=>{
            //     ele.includes(input.val().trim().replace(/\s/g, "").toLowerCase())? true : false
            // })
            // console.log(products)
            // let product = products.filter(product=>product.title.trim().replace(/\s/g, "").toLowerCase()===input.val().trim().replace(/\s/g, "").toLowerCase())
            // console.log(product)
            //     $.each(products,function(i,product){
                // console.log(L)
                // //  console.log(products[index])
                // console.log(L[0][0])
                // console.log(L[1][0])
                   $.each(L,function(index,value){
                        console.log(value[0])
                       $products.append('<li>name: '+value[0].title+', price: '+value[0].price+'$</li>')
                   })
                // })
            


        }
    });
})