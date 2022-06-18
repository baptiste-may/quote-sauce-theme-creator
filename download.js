
const fs = require('fs');
const yaml = require('js-yaml');

function download() {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent("name: \"" + document.getElementById("name").value + "\""));
  element.setAttribute('download', document.getElementById("name").value);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}