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
  let preExcelDB = preExcel.getData()

  const selectedLabRadio = document.querySelector('input[name="labOptions"]:checked');
  const selectedStudyRadio = document.querySelector('input[name="studyOption"]:checked');
  const selectedsampleTypeRadio = document.querySelector('input[name="sampleTypeOption"]:checked');

  let selection = selectedLabRadio.value + selectedStudyRadio.value + selectedsampleTypeRadio.value

  switch (selection) {
  case "acf":
    converter(preExcelDB, "serum", "chap", "ol")
    break;
  case "acg":
    converter(preExcelDB, "plasma", "chap", "ol")
    break;
  case "ach":
    converter(preExcelDB, "wholeblood", "chap", "ol")
    break;
  case "aci":
    converter(preExcelDB, "rcr", "chap", "ol")
    break;
  case "adf":
    converter(preExcelDB, "serum", "porch", "ol")
    break;
  case "adg":
    converter(preExcelDB, "plasma", "porch", "ol")
    break;
  case "adh":
    converter(preExcelDB, "wholeblood", "porch", "ol")
    break;
  case "adi":
    converter(preExcelDB, "rcr", "porch", "ol")
    break;
  case "aef":
    converter(preExcelDB, "serum", "latinx", "ol")
    break;
  case "aeg":
    converter(preExcelDB, "plasma", "latinx", "ol")
    break;
  case "aeh":
    converter(preExcelDB, "wholeblood", "latinx", "ol")
    break;
  case "aei":
    converter(preExcelDB, "rcr", "latinx", "ol")
    break;
  case "bcf":
    converter(preExcelDB, "serum", "chap", "cohn")
    break;
  case "bcg":
    converter(preExcelDB, "plasma", "chap", "cohn")
    break;
  case "bch":
    converter(preExcelDB, "wholeblood", "chap", "cohn")
    break;
  case "bci":
    converter(preExcelDB, "rcr", "chap", "cohn")
    break;
  case "bdf":
    converter(preExcelDB, "serum", "porch", "cohn")
    break;
  case "bdg":
    converter(preExcelDB, "plasma", "porch", "cohn")
    break;
  case "bdh":
    converter(preExcelDB, "wholeblood", "porch", "cohn")
    break;
  case "bdi":
    converter(preExcelDB, "rcr", "porch", "cohn")
    break;
  default:
    console.log("didnt work")
}
})

// Helper: safely parse a range like "1-5" or a single value "3".
const parseRange = (val) => {
  if (val == null || val === "") return [];
  const parts = val.toString().split("-").map(s => parseInt(s, 10));
  if (isNaN(parts[0])) return [];
  if (parts.length === 1 || isNaN(parts[1])) parts[1] = parts[0];
  return [parts[0], parts[1]];
}

const pushedArrayMethod = (array, sampleType, studyCode, site) => {
  let pushedArry = [];

  if (studyCode === "chap") {
    switch(sampleType) {
      case "plasma":
        pushedArry = site == "ol" ? [`${array[0]}`, "", `${array[2]}`, `${array[1]}`, "Plasma", "Available", "CHAP 2", parseInt(array[5]) || 0, parseInt(array[6]) || 0, parseInt(array[7]) || 0, `${array[8]}`, 0, "Plasma", 49, "SCP7", 500, 500] :
         [`${array[0]}`, "", `${array[2]}`, `${array[1]}`, "Plasma", "Available", "CHAP 1", parseInt(array[5]) || 0, parseInt(array[6]) || 0, parseInt(array[7]) || 0, `${array[8]}`, 0, "Plasma", 49, "SCP7", 500, 500] 
        break;
      case "serum":
        pushedArry = site == "ol" ? [`${array[0]}`, "", `${array[2]}`, `${array[1]}`, "Serum", "Available", "CHAP 2", parseInt(array[5]) || 0, parseInt(array[6]) || 0, parseInt(array[7]) || 0, `${array[8]}`, 0, "Serum", 48, "SCP7", 500, 500] :
          [`${array[0]}`, "", `${array[2]}`, `${array[1]}`, "Serum", "Available", "CHAP 1", parseInt(array[5]) || 0, parseInt(array[6]) || 0, parseInt(array[7]) || 0, `${array[8]}`, 0, "Serum", 48, "SCP7", 500, 500]
        break;
      case "wholeblood":
        pushedArry = site == "ol" ? [`${array[0]}`, "", `${array[2]}`, `${array[1]}`, "Whole Blood", "Available", "CHAP 2", parseInt(array[5]) || 0, parseInt(array[6]) || 0, parseInt(array[7]) || 0, `${array[8]}`, 0, "Whole Blood", 47, "LAV 10ml", 1, 1] :
          [`${array[0]}`, "", `${array[2]}`, `${array[1]}`, "Whole Blood", "Available", "CHAP 1", parseInt(array[5]) || 0, parseInt(array[6]) || 0, parseInt(array[7]) || 0, `${array[8]}`, 0, "Whole Blood", 47, "LAV 10ml", 1, 1]
        break;
      case "rcr":
        pushedArry = site == "ol" ? [`${array[0]}`, "", `${array[2]}`, `${array[1]}`, "Red Cells", "Available", "CHAP 2", parseInt(array[5]) || 0, parseInt(array[6]) || 0, parseInt(array[7]) || 0, `${array[8]}`, 0, "Red Cells", "", "LAV RCR", 1, 1] :
          [`${array[0]}`, "", `${array[2]}`, `${array[1]}`, "Red Cells", "Available", "CHAP 1", parseInt(array[5]) || 0, parseInt(array[6]) || 0, parseInt(array[7]) || 0, `${array[8]}`, 0, "Red Cells", "", "LAV RCR", 1, 1]
        break;
    }
  }

  if (studyCode === "porch") {
    switch(sampleType) {
      case "plasma":
        pushedArry = site == "ol" ? [`${array[0]}`, "", `${array[2]}`, `${array[1]}`, "Plasma", "Available", "PORCH 2", parseInt(array[5]) || 0, parseInt(array[6]) || 0, parseInt(array[7]) || 0, `${array[8]}`, 0, "Plasma", 49, `${array[2]}`, 500, 500] :
          [`${array[0]}`, "", `${array[2]}`, `${array[1]}`, "Plasma", "Available", "PORCH 1", parseInt(array[5]) || 0, parseInt(array[6]) || 0, parseInt(array[7]) || 0, `${array[8]}`, 0, "Plasma", 49, `${array[2]}`, 500, 500]
        break;
      case "serum":
        pushedArry = site == "ol" ? [`${array[0]}`, "", `${array[2]}`, `${array[1]}`, "Serum", "Available", "PORCH 2", parseInt(array[5]) || 0, parseInt(array[6]) || 0, parseInt(array[7]) || 0, `${array[8]}`, 0, "Serum", 48, `${array[2]}`, 500, 500] :
          [`${array[0]}`, "", `${array[2]}`, `${array[1]}`, "Serum", "Available", "PORCH 1", parseInt(array[5]) || 0, parseInt(array[6]) || 0, parseInt(array[7]) || 0, `${array[8]}`, 0, "Serum", 48, `${array[2]}`, 500, 500]
        break;
      case "wholeblood":
        pushedArry = site == "ol" ? [`${array[0]}`, "", `${array[2]}`, `${array[1]}`, "Whole Blood", "Available", "PORCH 2", parseInt(array[5]) || 0, parseInt(array[6]) || 0, parseInt(array[7]) || 0, `${array[8]}`, 0, "Whole Blood", 47, "LAV 10ml", 1, 1] :
          [`${array[0]}`, "", `${array[2]}`, `${array[1]}`, "Whole Blood", "Available", "PORCH 1", parseInt(array[5]) || 0, parseInt(array[6]) || 0, parseInt(array[7]) || 0, `${array[8]}`, 0, "Whole Blood", 47, "LAV 10ml", 1, 1]
        break;
      case "rcr":
        pushedArry = site == "ol" ? [`${array[0]}`, "", `${array[2]}`, `${array[1]}`, "Red Cells", "Available", "PORCH 2", parseInt(array[5]) || 0, parseInt(array[6]) || 0, parseInt(array[7]) || 0, `${array[8]}`, 0, "Red Cells", "", "LAV RCR", 1, 1] :
          [`${array[0]}`, "", `${array[2]}`, `${array[1]}`, "Red Cells", "Available", "PORCH 1", parseInt(array[5]) || 0, parseInt(array[6]) || 0, parseInt(array[7]) || 0, `${array[8]}`, 0, "Red Cells", "", "LAV RCR", 1, 1]
        break
      default:
        console.log("yes")
    }
  }

  if (studyCode === "latinx") {
    switch(sampleType) {
      case "plasma":
        pushedArry = [`${array[0]}`, "", `${array[2]}`, `${array[1]}`, "Plasma", "Available", "CHAP 3", parseInt(array[5]) || 0, parseInt(array[6]) || 0, parseInt(array[7]) || 0, `${array[8]}`, 0, "Plasma", 49, "SCP7", 500, 500]
        break;
      case "serum":
        pushedArry = [`${array[0]}`, "", `${array[2]}`, `${array[1]}`, "Serum", "Available", "CHAP 3", parseInt(array[5]) || 0, parseInt(array[6]) || 0, parseInt(array[7]) || 0, `${array[8]}`, 0, "Serum", 48, "SCP7", 500, 500]
        break;
      case "wholeblood":
        pushedArry = [`${array[0]}`, "", `${array[2]}`, `${array[1]}`, "Whole Blood", "Available", "CHAP 3", parseInt(array[5]) || 0, parseInt(array[6]) || 0, parseInt(array[7]) || 0, `${array[8]}`, 0, "Whole Blood", 47, "LAV 10ml", 1, 1];
        break;
      case "rcr":
        pushedArry = [`${array[0]}`, "", `${array[2]}`, `${array[1]}`, "Red Cells", "Available", "CHAP 3", parseInt(array[5]) || 0, parseInt(array[6]) || 0, parseInt(array[7]) || 0, `${array[8]}`, 0, "Red Cells", "", "LAV RCR", 1, 1];
        break;
    }
  }

  return pushedArry;
} 

const converter = (preExcelDB, sampleType, studyCode, site) => {
  let newUpdatedDB = [];

  preExcelDB.forEach(array => {
    if (array.some(element => element !== "" && element != null)) {
      const range = parseRange(array[8])
      if (range.length === 0) return
      const [start, end] = range

      let pushedArray = pushedArrayMethod(array, sampleType, studyCode, site);

      for (let i = start; i <= end; i++) {
        let pushedArryCopy = [...pushedArray]
        pushedArryCopy[10] = parseInt(i)

        newUpdatedDB.push(pushedArryCopy)
      }
    }
  })

  postExcel.updateData(newUpdatedDB)
}