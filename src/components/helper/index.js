import moment from 'moment-jalaali'

function persianDate(string) {
  return moment(string).format("jYYYY/jM/jD");
}

export {
    persianDate
}