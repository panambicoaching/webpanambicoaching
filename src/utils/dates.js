 
const dateDiff = (dateString) => {
  let actualDate = new Date().getTime();
  let inputDate = new Date(dateString).getTime();
  
  return inputDate - actualDate;
}

const dateOrderAsc = (dateStringA, dateStringB) => {
  let dateA = new Date(dateStringA).getTime();
  let dateB = new Date(dateStringB).getTime();
  
  return dateA > dateB;
}

const dates = {
  dateDiff,
  dateOrderAsc
}

export default dates;