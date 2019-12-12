var fontSize = 4;

function setup() {
    change('fontSize', 0);
}

function change(command){
    document.execCommand(command);
}

function change (command, change){
    fontSize += change;

    if (fontSize > 7) {
        fontSize = 7;
    } else if (fontSize < 1) {
        fontSize = 1;
    }

    document.execCommand(command, false, fontSize);
}

function openNav() {
    document.getElementById("main").style.width = "75%";
    document.getElementById("navBar").style.display = "block";
    document.getElementById("openNav").style.display = 'none';
    document.getElementById("closeNav").style.display = 'inline-block';
  }
  
  function closeNav() {
    document.getElementById("main").style.width = "100%";
    document.getElementById("navBar").style.display = "none";
    document.getElementById("openNav").style.display = 'inline-block';
    document.getElementById("closeNav").style.display = 'none';
  }