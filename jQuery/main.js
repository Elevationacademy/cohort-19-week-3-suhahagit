
//jQuery

//ex1

$('body').append(`<ul id = "list"></ul><input type="text" id="my-input" placeholder="Human Name"></input>
<button class = "btn">Add Human</button>`)

const clicker = function (){
    const newName = $("#my-input").val()
    if(newName != ''){
        $('#list').append(`<li class = "human">${newName}</li>`)
        $("#my-input").val('') //
    }
}

$("body").on("click", ".btn", clicker)

//********************************************************************************

//ex2

const remOnClick = function(){
    $(this).remove()
}

$("body").on("click", ".human", remOnClick)

//********************************************************************************

//ex4

const clicker = function(){
    if($(this).data().instock == true){
        $('#cart').append(`<p class=cart-item>${$(this).text()}</p>`)
    }
}

$(".item").click(clicker)

//********************************************************************************