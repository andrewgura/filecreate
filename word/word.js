var create = document.getElementById('create');
var textbx = document.getElementById("bos").textContent;



create.addEventListener('click', function () {

//replace textbox values with user input
  var txt1 = document.getElementById('tx1').value;
  textbx = textbx.replace(' verb', txt1);
  var txt2 = document.getElementById('tx2').value;
  textbx = textbx.replace(' adjective', txt2);
  var txt3 = document.getElementById('tx3').value;
  textbx = textbx.replace(' verb', txt3);

//write to doc file
  var html, blob, url;
  html = window.bos.innerHTML;
  blob = new Blob([html + textbx], {
    type: "application/msword;charset=utf-8"
  });
  url = URL.createObjectURL(blob);

//Create download link
 var dl = document.getElementById('downloadlink');
  dl.href = url;
  dl.download = 'Document';
  dl.style.display = 'block';

}, false);
