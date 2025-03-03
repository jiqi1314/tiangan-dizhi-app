function addText(text) {
  const result = document.getElementById('result');
  result.value += text;
}

function backspace() {
  const result = document.getElementById('result');
  result.value = result.value.slice(0, -1);
}

function clearAll() {
  const result = document.getElementById('result');
  result.value = '';
}

function copyText() {
  const result = document.getElementById('result');
  result.select();
  document.execCommand('copy');
  alert('已複製到剪貼簿！');
}