import axios from "axios";

export const createSetting = async (
  payment_min,
  company_id,
  payment_free,
  payment_forward,
  payment_hourfist,
  payment_minfirst,
  payment_hour
) =>
  await axios.post(process.env.NEXT_PUBLIC_API_URL + "/addsetting", {
    payment_min: payment_min,
    company_id: company_id,
    payment_free: payment_free,
    payment_forward: payment_forward,
    payment_hourfist: payment_hourfist,
    payment_minfirst: payment_minfirst,
    payment_hour: payment_hour,
  });

export const Getsetting = async (id) =>
  await axios.get(process.env.NEXT_PUBLIC_API_URL + "/getsetting/" + id);

export const settingCompany = async (company_id) =>
  await axios.get(process.env.NEXT_PUBLIC_API_URL + '/company/get/' +company_id);
