export default function useState(input: any = undefined) {
  let value: any = input;
  const setValue = (newValue: any) => {
    console.log(newValue, "filanbisar new");
    value = newValue;
  };

  console.log(value, "filanbisar 2");
  return [value, setValue];
}
