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
    olChapSerum(preExcelDB)
    break;
  case "acg":
    olChapPlasma(preExcelDB)
    break;
  case "ach":
    olChapWholeBlood(preExcelDB)
    break;
  case "aci":
    olChapRCR(preExcelDB)
    break;
  case "adf":
    olPorchSerum(preExcelDB)
    break;
  case "adg":
    olPorchPlasma(preExcelDB)
    break;
  case "adh":
    olPorchWholeBlood(preExcelDB)
    break;
  case "adi":
    olPorchRCR(preExcelDB)
    break;
  case "aef":
    olLatinxSerum(preExcelDB)
    break;
  case "aeg":
    olLatinxPlasma(preExcelDB)
    break;
  case "aeh":
    olLatinxWholeBlood(preExcelDB)
    break;
  case "aei":
    olLatinxRCR(preExcelDB)
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


const olChapPlasma = (preExcelDB) => {
  let newUpdatedDB = []


  preExcelDB.forEach(array => {
    if (array.some(element => element !== "" && element != null)){
      const range = parseRange(array[8])
      if (range.length === 0) return
      const [start, end] = range
      let pushedArray = [`${array[0]}`, "", `${array[2]}`, `${array[1]}`, "Plasma", "Available", "CHAP 2", parseInt(array[5]) || 0, parseInt(array[6]) || 0, parseInt(array[7]) || 0, `${array[8]}`, 0, "Plasma", 49, "SCP7", 500, 500]

      for (let i = start; i <= end; i++) {
        let pushedArryCopy = [...pushedArray]
        pushedArryCopy[10] = parseInt(i)

        newUpdatedDB.push(pushedArryCopy)
      }
    }
  });

  postExcel.updateData(newUpdatedDB)
}
const olChapSerum = (preExcelDB) => {
  let newUpdatedDB = []

  preExcelDB.forEach(array => {
    if (array.some(element => element !== "" && element != null)){
      const range = parseRange(array[8])
      if (range.length === 0) return
      const [start, end] = range
      let pushedArray = [`${array[0]}`, "", `${array[2]}`, `${array[1]}`, "Serum", "Available", "CHAP 2", parseInt(array[5]) || 0, parseInt(array[6]) || 0, parseInt(array[7]) || 0, `${array[8]}`, 0, "Serum", 48, "SCP7", 500, 500]

      for (let i = start; i <= end; i++) {
        let pushedArryCopy = [...pushedArray]
        pushedArryCopy[10] = parseInt(i)

        newUpdatedDB.push(pushedArryCopy)
      }
    }
  });

  postExcel.updateData(newUpdatedDB)
}
const olChapWholeBlood = (preExcelDB) => {
  let newUpdatedDB = []

  preExcelDB.forEach(array => {
    if (array.some(element => element !== "" && element != null)){
      const range = parseRange(array[8])
      if (range.length === 0) return
      const [start, end] = range
      let pushedArray = [`${array[0]}`, "", `${array[2]}`, `${array[1]}`, "Whole Blood", "Available", "CHAP 2", parseInt(array[5]) || 0, parseInt(array[6]) || 0, parseInt(array[7]) || 0, `${array[8]}`, 0, "Whole Blood", 47, "LAV 10ml", 1, 1]

      for (let i = start; i <= end; i++) {
        let pushedArryCopy = [...pushedArray]
        pushedArryCopy[10] = parseInt(i)

        newUpdatedDB.push(pushedArryCopy)
      }
    }
  });

  postExcel.updateData(newUpdatedDB)
}
const olChapRCR = (preExcelDB) => {
  let newUpdatedDB = []

  preExcelDB.forEach(array => {
    if (array.some(element => element !== "" && element != null)){
      const range = parseRange(array[8])
      if (range.length === 0) return
      const [start, end] = range
      let pushedArray = [`${array[0]}`, "", `${array[2]}`, `${array[1]}`, "Red Cells", "Available", "CHAP 2", parseInt(array[5]) || 0, parseInt(array[6]) || 0, parseInt(array[7]) || 0, `${array[8]}`, 0, "Red Cells", "", "LAV RCR", 1, 1]

      for (let i = start; i <= end; i++) {
        let pushedArryCopy = [...pushedArray]
        pushedArryCopy[10] = parseInt(i)

        newUpdatedDB.push(pushedArryCopy)
      }
    }
  });

  postExcel.updateData(newUpdatedDB)
}
const olPorchPlasma = (preExcelDB) => {
  let newUpdatedDB = []

  preExcelDB.forEach(array => {
    if (array.some(element => element !== "" && element != null)){
      const range = parseRange(array[8])
      if (range.length === 0) return
      const [start, end] = range
      let pushedArray = [`${array[0]}`, "", `${array[2]}`, `${array[1]}`, "Plasma", "Available", "PORCH 2", parseInt(array[5]) || 0, parseInt(array[6]) || 0, parseInt(array[7]) || 0, `${array[8]}`, 0, "Plasma", 49, `${array[2]}`, 500, 500]

      for (let i = start; i <= end; i++) {
        let pushedArryCopy = [...pushedArray]
        pushedArryCopy[10] = parseInt(i)

        newUpdatedDB.push(pushedArryCopy)
      }
    }
  });

  postExcel.updateData(newUpdatedDB)
}
const olPorchWholeBlood = (preExcelDB) => {
  let newUpdatedDB = []

  preExcelDB.forEach(array => {
    if (array.some(element => element !== "" && element != null)){
      const range = parseRange(array[8])
      if (range.length === 0) return
      const [start, end] = range
      let pushedArray = [`${array[0]}`, "", `${array[2]}`, `${array[1]}`, "Whole Blood", "Available", "PORCH 2", parseInt(array[5]) || 0, parseInt(array[6]) || 0, parseInt(array[7]) || 0, `${array[8]}`, 0, "Whole Blood", 47, "LAV 10ml", 1, 1]

      for (let i = start; i <= end; i++) {
        let pushedArryCopy = [...pushedArray]
        pushedArryCopy[10] = parseInt(i)

        newUpdatedDB.push(pushedArryCopy)
      }
    }
  });

  postExcel.updateData(newUpdatedDB)
}

const olPorchSerum = (preExcelDB) => {
  let newUpdatedDB = []

  preExcelDB.forEach(array => {
    if (array.some(element => element !== "" && element != null)){
      const range = parseRange(array[8])
      if (range.length === 0) return
      const [start, end] = range
      let pushedArray = [`${array[0]}`, "", `${array[2]}`, `${array[1]}`, "Serum", "Available", "PORCH 2", parseInt(array[5]) || 0, parseInt(array[6]) || 0, parseInt(array[7]) || 0, `${array[8]}`, 0, "Serum", 48, `${array[2]}`, 500, 500]

      for (let i = start; i <= end; i++) {
        let pushedArryCopy = [...pushedArray]
        pushedArryCopy[10] = parseInt(i)

        newUpdatedDB.push(pushedArryCopy)
      }
    }
  });

  postExcel.updateData(newUpdatedDB)
}

const olPorchRCR = (preExcelDB) => {
  let newUpdatedDB = []

  preExcelDB.forEach(array => {
    if (array.some(element => element !== "" && element != null)){
      const range = parseRange(array[8])
      if (range.length === 0) return
      const [start, end] = range
      let pushedArray = [`${array[0]}`, "", `${array[2]}`, `${array[1]}`, "Red Cells", "Available", "PORCH 2", parseInt(array[5]) || 0, parseInt(array[6]) || 0, parseInt(array[7]) || 0, `${array[8]}`, 0, "Red Cells", "", "LAV RCR", 1, 1]

      for (let i = start; i <= end; i++) {
        let pushedArryCopy = [...pushedArray]
        pushedArryCopy[10] = parseInt(i)

        newUpdatedDB.push(pushedArryCopy)
      }
    }
  });

  postExcel.updateData(newUpdatedDB)
}

const olLatinxPlasma = (preExcelDB) => {
  let newUpdatedDB = []

  preExcelDB.forEach(array => {
    if (array.some(element => element !== "" && element != null)){
      const range = parseRange(array[8])
      if (range.length === 0) return
      const [start, end] = range
      let pushedArray = [`${array[0]}`, "", `${array[2]}`, `${array[1]}`, "Plasma", "Available", "CHAP 2", parseInt(array[5]) || 0, parseInt(array[6]) || 0, parseInt(array[7]) || 0, `${array[8]}`, 0, "Plasma", 49, "SCP7", 500, 500]

      for (let i = start; i <= end; i++) {
        let pushedArryCopy = [...pushedArray]
        pushedArryCopy[10] = parseInt(i)

        newUpdatedDB.push(pushedArryCopy)
      }
    }
  });

  postExcel.updateData(newUpdatedDB)
}

const olLatinxSerum = (preExcelDB) => {
  let newUpdatedDB = []

  preExcelDB.forEach(array => {
    if (array.some(element => element !== "" && element != null)){
      const range = parseRange(array[8])
      if (range.length === 0) return
      const [start, end] = range
      let pushedArray = [`${array[0]}`, "", `${array[2]}`, `${array[1]}`, "Plasma", "Available", "CHAP 2", parseInt(array[5]) || 0, parseInt(array[6]) || 0, parseInt(array[7]) || 0, `${array[8]}`, 0, "Plasma", 49, "SCP7", 500, 500]

      for (let i = start; i <= end; i++) {
        let pushedArryCopy = [...pushedArray]
        pushedArryCopy[10] = parseInt(i)

        newUpdatedDB.push(pushedArryCopy)
      }
    }
  });

  postExcel.updateData(newUpdatedDB)
}

const olLatinxWholeBlood = (preExcelDB) => {
  let newUpdatedDB = []

  preExcelDB.forEach(array => {
    if (array.some(element => element !== "" && element != null)){
      const range = parseRange(array[8])
      if (range.length === 0) return
      const [start, end] = range
      let pushedArray = [`${array[0]}`, "", `${array[2]}`, `${array[1]}`, "Whole Blood", "Available", "CHAP 2", parseInt(array[5]) || 0, parseInt(array[6]) || 0, parseInt(array[7]) || 0, `${array[8]}`, 0, "Whole Blood", 47, "LAV 10ml", 1, 1]

      for (let i = start; i <= end; i++) {
        let pushedArryCopy = [...pushedArray]
        pushedArryCopy[10] = parseInt(i)

        newUpdatedDB.push(pushedArryCopy)
      }
    }
  });

  postExcel.updateData(newUpdatedDB)
}

const olLatinxRCR = (preExcelDB) => {
  let newUpdatedDB = []

  preExcelDB.forEach(array => {
    if (array.some(element => element !== "" && element != null)){
      const range = parseRange(array[8])
      if (range.length === 0) return
      const [start, end] = range
      let pushedArray = [`${array[0]}`, "", `${array[2]}`, `${array[1]}`, "Red Cells", "Available", "CHAP 2", parseInt(array[5]) || 0, parseInt(array[6]) || 0, parseInt(array[7]) || 0, `${array[8]}`, 0, "Red Cells", "", "LAV RCR", 1, 1]

      for (let i = start; i <= end; i++) {
        let pushedArryCopy = [...pushedArray]
        pushedArryCopy[10] = parseInt(i)

        newUpdatedDB.push(pushedArryCopy)
      }
    }
  });

  postExcel.updateData(newUpdatedDB)
}