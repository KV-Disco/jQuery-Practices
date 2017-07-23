$('#f1-calculate').on('click', function (e) {
  e.preventDefault()

  $('#f1-result').val(($('#f1-a').val() / 100) * $('#f1-b').val())

  if (isNaN($('#f1-result').val()) === true) { //
    $('#f1').addClass('has-error')             // Esta es la parte de la funcion que oculta el bloke
  } else { $('#f1').removeClass('has-error') } //
})

$('#f2-calculate').on('click', function (e) {
  e.preventDefault()

  $('#f2-result').val(($('#f2-a').val() * 100) / $('#f2-b').val())

  if (isNaN($('#f2-result').val()) === true) { //
    $('#f2').addClass('has-error')            // lireralmente se copia y pega aqui y se cambian los f1 a f2
  } else { $('#f2').removeClass('has-error') }//
})

$('#f3-calculate').on('click', function (e) {
  e.preventDefault()

  $('#f3-result').val((($('#f3-b').val() - $('#f3-a').val()) / $('#f3-a').val() * 100) - 100)

  if (isNaN($('#f3-result').val()) === true) { //
    $('#f3').addClass('has-error')            // Igual aca, pero con f3
  } else { $('#f3').removeClass('has-error') }//
})
