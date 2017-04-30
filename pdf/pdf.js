var create = document.getElementById('create');
var textbx = document.getElementById("bos").textContent;



create.addEventListener('click', function () {

  var txt1 = document.getElementById('tx1').value;
  textbx = textbx.replace(' verb', txt1);
  var txt2 = document.getElementById('tx2').value;
  textbx = textbx.replace(' adjective', txt2);
  var txt3 = document.getElementById('tx3').value;
  textbx = textbx.replace(' verb', txt3);

  var link = document.getElementById('downloadlink');
  link.style.display = 'block';
}, false);

//Create PDF file
function dnld(){
var doc = new jsPDF()

doc.text(textbx, 10, 10);

doc.save('a4.pdf');
}
