//[7 kyu] Printer Errors
const printerError = s => s.length - s.match(/[a-m]/g).length + '/' + s.length;