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

  console.log(selection)
  switch (selection) {
  case "acf":
    olChapSerum(preExcelDB)
    break;
  case "acg":
    olChapPlasma(preExcelDB)
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
    // Code to execute if none of the cases match
    console.log("didnt work")
}


  // olChapPlasma(preExcelDB)
})


const olChapPlasma = (preExcelDB) => {
  let newUpdatedDB = []

  preExcelDB.forEach(array => {
    if (array.some(element => element !== "" && element != null)){
      splitnumber = array[8].toString().split("-")
      let pushedArray = [`${array[0]}`, "", `${array[2]}`, `${array[1]}`, "Plasma", "Available", "CHAP 2", parseInt(array[5]), parseInt(array[6]), parseInt(array[7]), `${array[8]}`, 0, "Plasma", 49, "SCP7", 500, 500]

      splitnumber = array[8].toString().split("-")
      for (let i = splitnumber[0]; i <= splitnumber[1]; i++) {
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
      splitnumber = array[8].toString().split("-")
      let pushedArray = [`${array[0]}`, "", `${array[2]}`, `${array[1]}`, "Serum", "Available", "CHAP 2", parseInt(array[5]), parseInt(array[6]), parseInt(array[7]), `${array[8]}`, 0, "Serum", 48, "SCP7", 500, 500]

      splitnumber = array[8].toString().split("-")
      for (let i = splitnumber[0]; i <= splitnumber[1]; i++) {
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
      splitnumber = array[8].toString().split("-")
      let pushedArray = [`${array[0]}`, "", `${array[2]}`, `${array[1]}`, "Whole Blood", "Available", "CHAP 2", parseInt(array[5]), parseInt(array[6]), parseInt(array[7]), `${array[8]}`, 0, "Whole Blood", 47, "LAV 10ml", 1, 1]

      splitnumber = array[8].toString().split("-")
      for (let i = splitnumber[0]; i <= splitnumber[1]; i++) {
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
      splitnumber = array[8].toString().split("-")
      let pushedArray = [`${array[0]}`, "", `${array[2]}`, `${array[1]}`, "Red Cells", "Available", "CHAP 2", parseInt(array[5]), parseInt(array[6]), parseInt(array[7]), `${array[8]}`, 0, "Red Cells", "", "LAV RCR", 1, 1]

      splitnumber = array[8].toString().split("-")
      for (let i = splitnumber[0]; i <= splitnumber[1]; i++) {
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
      splitnumber = array[8].toString().split("-")
      let pushedArray = [`${array[0]}`, "", `${array[2]}`, `${array[1]}`, "Plasma", "Available", "PORCH 2", parseInt(array[5]), parseInt(array[6]), parseInt(array[7]), `${array[8]}`, 0, "Plasma", 49, `${array[2]}`, 500, 500]

      splitnumber = array[8].toString().split("-")
      for (let i = splitnumber[0]; i <= splitnumber[1]; i++) {
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
      splitnumber = array[8].toString().split("-")
      let pushedArray = [`${array[0]}`, "", `${array[2]}`, `${array[1]}`, "Whole Blood", "Available", "PORCH 2", parseInt(array[5]), parseInt(array[6]), parseInt(array[7]), `${array[8]}`, 0, "Whole Blood", 47, "LAV 10ml", 1, 1]

      splitnumber = array[8].toString().split("-")
      for (let i = splitnumber[0]; i <= splitnumber[1]; i++) {
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
      splitnumber = array[8].toString().split("-")
      let pushedArray = [`${array[0]}`, "", `${array[2]}`, `${array[1]}`, "Serum", "Available", "PORCH 2", parseInt(array[5]), parseInt(array[6]), parseInt(array[7]), `${array[8]}`, 0, "Serum", 48, `${array[2]}`, 500, 500]

      splitnumber = array[8].toString().split("-")
      for (let i = splitnumber[0]; i <= splitnumber[1]; i++) {
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
      splitnumber = array[8].toString().split("-")
      let pushedArray = [`${array[0]}`, "", `${array[2]}`, `${array[1]}`, "Red Cells", "Available", "PORCH 2", parseInt(array[5]), parseInt(array[6]), parseInt(array[7]), `${array[8]}`, 0, "Red Cells", "", "LAV RCR", 1, 1]

      splitnumber = array[8].toString().split("-")
      for (let i = splitnumber[0]; i <= splitnumber[1]; i++) {
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
      splitnumber = array[8].toString().split("-")
      let pushedArray = [`${array[0]}`, "", `${array[2]}`, `${array[1]}`, "Plasma", "Available", "CHAP 2", parseInt(array[5]), parseInt(array[6]), parseInt(array[7]), `${array[8]}`, 0, "Plasma", 49, "SCP7", 500, 500]

      splitnumber = array[8].toString().split("-")
      for (let i = splitnumber[0]; i <= splitnumber[1]; i++) {
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
      splitnumber = array[8].toString().split("-")
      let pushedArray = [`${array[0]}`, "", `${array[2]}`, `${array[1]}`, "Plasma", "Available", "CHAP 2", parseInt(array[5]), parseInt(array[6]), parseInt(array[7]), `${array[8]}`, 0, "Plasma", 49, "SCP7", 500, 500]

      splitnumber = array[8].toString().split("-")
      for (let i = splitnumber[0]; i <= splitnumber[1]; i++) {
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
      splitnumber = array[8].toString().split("-")
      let pushedArray = [`${array[0]}`, "", `${array[2]}`, `${array[1]}`, "Whole Blood", "Available", "CHAP 2", parseInt(array[5]), parseInt(array[6]), parseInt(array[7]), `${array[8]}`, 0, "Whole Blood", 47, "LAV 10ml", 1, 1]

      splitnumber = array[8].toString().split("-")
      for (let i = splitnumber[0]; i <= splitnumber[1]; i++) {
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
      splitnumber = array[8].toString().split("-")
      let pushedArray = [`${array[0]}`, "", `${array[2]}`, `${array[1]}`, "Red Cells", "Available", "CHAP 2", parseInt(array[5]), parseInt(array[6]), parseInt(array[7]), `${array[8]}`, 0, "Red Cells", "", "LAV RCR", 1, 1]

      splitnumber = array[8].toString().split("-")
      for (let i = splitnumber[0]; i <= splitnumber[1]; i++) {
        let pushedArryCopy = [...pushedArray]
        pushedArryCopy[10] = parseInt(i)

        newUpdatedDB.push(pushedArryCopy)
      }
    }
  });

  postExcel.updateData(newUpdatedDB)
}