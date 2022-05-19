import moment from "moment-jalaali";

function persianDate(string) {
  return moment(string).format("jYYYY/jM/jD");
}

function getGender(id) {
  switch (id) {
    case 1:
      return "مرد";
    case 0:
      return "زن";
  }
}

export { getGender, persianDate };
