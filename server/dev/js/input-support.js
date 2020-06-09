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
  //   false -> insert select
}
const supportsRange = supportsType('range'),
  datalist = supportDatalist();
