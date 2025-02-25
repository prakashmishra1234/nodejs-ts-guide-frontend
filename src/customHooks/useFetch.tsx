import React from "react";
import ApiMethods from "../model/enum/ApiMethods";
import ApiClient from "../utility/ApiClient";

const useFetch = () => {
  const [loading, setLoading] = React.useState(false);
  const fetchData = async (
    url: string,
    method: ApiMethods,
    requestBody?: any
  ) => {
    setLoading(true);
    try {
      const res: any = await ApiClient({
        method: ApiMethods[method],
        url: url,
        data: requestBody,
      });
      setLoading(false);
      return { ...res.data, status: res.status };
    } catch (error: any) {
      setLoading(false);
      return { ...error.response.data, status: error.status };
    }
  };
  return { loading, fetchData };
};

export default useFetch;
