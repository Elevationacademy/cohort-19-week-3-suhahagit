
//Dom Traversal with jQuery

$(".generator").on('click', function(){
    const arr = []

    const processorID = ($(this).closest(".processor").prop('id'))
    console.log(`Processor ID: ${processorID}`)

    const computerDataId = $(this).closest(".computer").data().id
    arr.push({cmp_id: computerDataId})
    console.log(`Computer's data-id: ${computerDataId}`)

    const busNum = $(this).closest(".computer").find('.BUS').text()
    console.log(`BUS: ${busNum}`)
})

$(".validator").on('click', function(){
    const gText = $(this).closest(".computer").find('.generator').text()
    console.log(`The generator's text: ${gText}`)

    const theMB = $(this).closest(".computer").find('.MB').text()
    console.log(`The MB: ${theMB}`)

    const QR = $(this).closest(".computer").find('.QR').each(function(){
        console.log(`QR: ${$(this).text()} `)
    })  
})