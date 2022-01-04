//[7 kyu] List Filtering
let filter_list = (l) => {
    return l.filter((n) => n === parseInt(n) && n >= 0);
  };