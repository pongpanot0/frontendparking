import axios from "axios";
import moment from "moment";
export const getEstamp = async (company_id) =>
  await axios({
    url: `${process.env.NEXT_PUBLIC_API_URL}/estamp/get/${company_id}`, //your url
    method: "get", // important
  });
export const createEstamp = async (estamp_total, company_id, crated_by,expire_date) =>
  await axios({
    url: `${process.env.NEXT_PUBLIC_API_URL}/estamp/created`, //your url
    method: "POST", // important
    data: {
      estamp_total: estamp_total,
      company_id: company_id,
      crated_by: crated_by,
      expire_date:expire_date,
    },
  });
