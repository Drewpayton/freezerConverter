// This file expects Handsontable to be loaded from CDN as a global (Handsontable)
// See index.html which includes handsontable.full.min.js

const container = document.querySelector('#example');

const data = [
  ["", ""],
  ["", ""],
  ["", ""],
  ["", ""],
];

const hot = new Handsontable(container, {
  data,
  rowHeaders: true,
  colHeaders: true,
  contextMenu: true,
  dropdownMenu: true,
  manualColumnResize: true,
  manualRowResize: true,
  fillHandle: true,
  copyPaste: true,
  licenseKey: 'non-commercial-and-evaluation',
  stretchH: 'all',
  height: 400
});
