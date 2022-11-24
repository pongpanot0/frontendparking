import axios from "axios";

export const getPromtpay = async (company_id, id) =>
  await axios.get(
    process.env.NEXT_PUBLIC_API_URL + `/parkcalculate/${company_id}/` + id
  );
