function download() {
  var element = document.createElement('a');

  let doc = "name: \"" + document.getElementById("name").value + "\"\n";
  doc += "questions:\n";
  for (i = 1; i <= quotes; i++) {
    doc += "  - number: " + i + "\n";
    doc += "    quote: \"" + document.getElementById("quote-" + i).value + "\"\n";
    doc += "    aswer:\n"
    for (j = 1; j <= answers[i-1]; j++) {
      doc += "      - \"" + document.getElementById("answer-" + i + "-" + j).value + "\"\n";
    }
  }

  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(doc));
  element.setAttribute('download', document.getElementById("name").value + ".yaml");

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}