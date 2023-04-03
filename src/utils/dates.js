 
const dateDiff = (dateString) => {
  let actualDate = new Date().getTime();
  let inputDate = new Date(dateString).getTime();
  
  return inputDate - actualDate;
}

const dates = {
  dateDiff
}

export default dates;