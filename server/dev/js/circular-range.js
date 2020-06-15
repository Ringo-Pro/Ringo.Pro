/* Source: https://github.com/thomasloven/round-slider */
const setValue = function (value, active) {
  document.querySelectorAll('round-slider').forEach(function (el) {
    if (el.value === undefined) return;
    el.value = value;
  });
  const span = document.querySelector('#value');
  span.innerHTML = value;
};
const setLow = function (value, active) {
  document.querySelectorAll('round-slider').forEach(function (el) {
    if (el.low === undefined) return;
    el.low = value;
  });
  const span = document.querySelector('#low');
  span.innerHTML = value;
};
const setHigh = function (value, active) {
  document.querySelectorAll('round-slider').forEach(function (el) {
    if (el.high === undefined) return;
    el.high = value;
  });
  const span = document.querySelector('#high');
  span.innerHTML = value;
};

document.querySelectorAll('round-slider').forEach(function (el) {
  el.addEventListener('value-changed', function (ev) {
    if (ev.detail.value !== undefined) setValue(ev.detail.value, false);
    else if (ev.detail.low !== undefined) setLow(ev.detail.low, false);
    else if (ev.detail.high !== undefined) setHigh(ev.detail.high, false);
  });

  el.addEventListener('value-changing', function (ev) {
    if (ev.detail.value !== undefined) setValue(ev.detail.value, true);
    else if (ev.detail.low !== undefined) setLow(ev.detail.low, true);
    else if (ev.detail.high !== undefined) setHigh(ev.detail.high, true);
  });
});
