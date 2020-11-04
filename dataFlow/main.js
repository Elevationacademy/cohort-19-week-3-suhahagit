const posts = []

const render = function (){
    
    $('#posts').empty()

    for(let post of posts){
        $("#posts").append(`<div class="post">${post.name}: ${post.text}</div>`)
    }
}

render()

const clicked = function(){
    const name = $("#name").val()
    const text = $('#text').val()
    $('#name').val("")
    $('#text').val("")
    posts.push({name: name, text: text})
    render()
}

$('#btn').on('click', clicked)