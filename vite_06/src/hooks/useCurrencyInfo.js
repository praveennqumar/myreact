import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setdata] = useState({});

  useEffect(() => {
    fetch()
      .then((res) => res.json())
      .then((res) => setdata(res[currency]));
    console.log(data);
  }, [currency]);
  return data;
}

export default useCurrencyInfo;
