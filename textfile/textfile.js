(function () {
var textFile = null,
  makeTextFile = function (text) {
    var data = new Blob([text], {type: 'text/plain'});

    // If we are replacing a previously generated file we need to
    // manually revoke the object URL to avoid memory leaks.
    if (textFile !== null) {
      window.URL.revokeObjectURL(textFile);
    }

    textFile = window.URL.createObjectURL(data);

    return textFile;
  };


  var create = document.getElementById('create');
    textbx = document.getElementById("bos").textContent;

  create.addEventListener('click', function () {
    
    var txt1 = document.getElementById('tx1').value;
    textbx = textbx.replace(' verb', txt1);
    var txt2 = document.getElementById('tx2').value;
    textbx = textbx.replace(' adjective', txt2);
    var txt3 = document.getElementById('tx3').value;
    textbx = textbx.replace(' verb', txt3);

    var link = document.getElementById('downloadlink');
    link.href = makeTextFile(textbx);
    link.style.display = 'block';
  }, false);
})();
