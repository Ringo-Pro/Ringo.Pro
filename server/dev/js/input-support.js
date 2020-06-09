/* Source: https://quirksmode.org/html5/inputs/tests/inputs_js.html */
function supportsType(input) {
  var desiredType = input.getAttribute('type');
  var supported = false;
  if (input.type === desiredType) {
    supported = true;
  }
  input.value = 'Hello world';
  var helloWorldAccepted = input.value === 'Hello world';
  switch (desiredType) {
    case 'email':
    case 'url':
      if (!input.validationMessage) {
        supported = false;
      }
      break;
    case 'color':
    case 'date':
    case 'datetime':
    case 'month':
    case 'time':
    case 'week':
      if (helloWorldAccepted) {
        supported = false;
      }
      break;
  }
  return supported;
}

function supportsDatalist() {
  /*   main check; most of the browsers have partial support i.e. support with input type text and not with input type i.e. range */
  'options' in document.createElement('datalist') ? true : false;
}

function supportsRangeDatalist() {
  //   additional test
  const tickmarks = document.getElementById('tickmarks'),
    option = tickmarks.querySelector('option');
  if (option.clientHeight === 0) {
    console.log('Tickmarks not supported with input type range');
    tickmarks.classList.add('d-none');
    // add div with markers

    return false;
  } else return true;
}
const supportsRange = supportsType('range'),
  supportsDatalist = supportDatalist();
if (supportsRange && supportDatalist) {
  supportsRangeDatalist();
}
