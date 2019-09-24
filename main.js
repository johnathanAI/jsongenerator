var n;

function welcome(){
    n=0;
    addItem();
    console.log("JavaScript Ready");
}
function addItem(){
    $('#extentArea').append('<input type="text" name="key'+n+'" id="key'+n+'" placeholder="key"/>: <input type="text" name="name'+n+'" id="value'+n+'" placeholder="value"/><br/>');
    n++;
}

function download(filename) {
    var element = document.createElement('a');
    var object = {};
    for (var i=0; i < n; i++){
        object[$('#key'+i).val()] = $('#value'+i).val();
    }
    var data = JSON.stringify(object);
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }