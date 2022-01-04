//[8 kyu] Safen User Input Part I - htmlspecialchars
const chars = {
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '&': '&amp;',
  }
  const htmlspecialchars = formData => formData.replace(/[<>"&]/g, c => { return chars[c] });