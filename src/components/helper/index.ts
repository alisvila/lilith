import moment from "moment-jalaali";

function persianDate(string: string) {
  return moment(string).format("jYYYY/jM/jD");
}

function getGender(id: number) {
  switch (id) {
    case 1:
      return "مرد";
    case 0:
      return "زن";
  }
}

// function debounce(func: Function, wait: number, immediate: boolean) {
//   var timeout: ReturnType<typeof setTimeout> | null;

//   return (...args: any) => {
//     let context: any = this;

//     let later = () => {
//       timeout = null;
//       if (!immediate) func.apply(context, args);
//     };

//     let callNow = immediate && !timeout;

//     if (timeout) {
//       clearTimeout(timeout);
//     }

//     timeout = setTimeout(later, wait);

//     if (callNow) func.apply(context, args);
//   };
// }

export { getGender, persianDate };
