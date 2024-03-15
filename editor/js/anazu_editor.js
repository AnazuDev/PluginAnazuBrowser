var codeTextarea = document.getElementById('code');
var lineNumbers = document.getElementById('line-numbers');
var saveButton = document.getElementById('save-button');
var undoButton = document.getElementById('undo-button');
var redoButton = document.getElementById('redo-button');



function updateLineNumbers() {
  var code = codeTextarea.value;
  var lines = code.split('\n');
  var lineNumbersHTML = '';

  for (var i = 0; i < lines.length; i++) {
    lineNumbersHTML += (i + 1) + '\n';
  }

  lineNumbers.innerText = lineNumbersHTML;
}


updateLineNumbers();
codeTextarea.addEventListener('input', updateLineNumbers);


function highlightSyntax() {
  var code = codeTextarea.value;
  var highlightedCode = syntaxHighlight(code);
  codeTextarea.innerHTML = highlightedCode;
}

function syntaxHighlight(code) {
  var keywords = {
    'function': 'blue',
    'var': 'blue',
    'if': 'green',
    'else': 'green',
    'for': 'green',
    'while': 'green'
  };

  var highlightedCode = code;

  for (var keyword in keywords) {
    if (keywords.hasOwnProperty(keyword)) {
      var regex = new RegExp('\\b' + keyword + '\\b', 'g');
      highlightedCode = highlightedCode.replace(regex, '<span style="color: ' + keywords[keyword] + ';">' + keyword + '</span>');
    }
  }

  return highlightedCode;
}

highlightSyntax();



var undoStack = [];
var redoStack = [];


function saveCode() {
  var code = codeTextarea.value;
  
  console.log('Kode disimpan:', code);
}


function undo() {
  if (undoStack.length > 0) {
    var previousState = undoStack.pop();
    redoStack.push(codeTextarea.value);
    codeTextarea.value = previousState;
  }
}


function redo() {
  if (redoStack.length > 0) {
    var nextState = redoStack.pop();
    undoStack.push(codeTextarea.value);
    codeTextarea.value = nextState;
  }
}
saveButton.addEventListener('click', saveCode);
undoButton.addEventListener('click', undo);
redoButton.addEventListener('click', redo);

codeTextarea.addEventListener('input', function() {
  undoStack.push(codeTextarea.value);
});
