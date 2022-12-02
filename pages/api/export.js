import axios from "axios";

export const Getexportpark = async (company_id) =>
  await axios({
    url: `${process.env.NEXT_PUBLIC_API_URL}/exportParkExcel/${company_id}`, //your url
    method: "POST",
    responseType: "blob", // important
  });
