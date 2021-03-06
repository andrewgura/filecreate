function readBlob(opt_startByte, opt_stopByte) {

  var files = document.getElementById('files').files;
  if (!files.length) {
    alert('Please select a file!');
    return;
  }

  var file = files[0];
  var start = parseInt(opt_startByte) || 0;
  var stop = parseInt(opt_stopByte) || file.size - 1;

  var reader = new FileReader();

  reader.onloadend = function(evt) {
    if (evt.target.readyState == FileReader.DONE) { // DONE == 2
      document.getElementById('byte_content').textContent = evt.target.result;
    }
  };

  var blob = file.slice(start, stop + 1);
  reader.readAsBinaryString(blob);
}

document.querySelector('.readBytesButtons').addEventListener('click', function(evt) {
  if (evt.target.tagName.toLowerCase() == 'button') {
    var startByte = evt.target.getAttribute('data-startbyte');
    var endByte = evt.target.getAttribute('data-endbyte');
    readBlob(startByte, endByte);
  }
}, false);
