const preChangedData = document.querySelector('#preExcelData');
const postChangedData = document.querySelector('#postExcelData');
const convertButton = document.querySelector(".convert")

const data = [
  ["", ""],
  ["", ""],
  ["", ""],
  ["", ""],
];

const preExcel = new Handsontable(preChangedData, {
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

const postExcel = new Handsontable(postChangedData, {
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


convertButton.addEventListener("click", function(){
  console.log("this works")
  let preExcelDB = preExcel.getData()

  preExcelDB.forEach(element => {
    if (element.some(str => str !== "")){
      console.log(element)
    }
  });
  postExcel.updateData(preExcelDB)
})