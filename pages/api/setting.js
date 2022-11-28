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
  await axios.get(
    process.env.NEXT_PUBLIC_API_URL + "/company/get/" + company_id
  );

export const createChanel = async (
  company_id,
  chanel_payments_detail,
  chanel_payments_name,
  chanel_payments_tax,
  chanel_id
) =>
  await axios.post(process.env.NEXT_PUBLIC_API_URL + "/chanel", {
    company_id: company_id,
    chanel_payments_detail: chanel_payments_detail,
    chanel_payments_name: chanel_payments_name,
    chanel_payments_tax: chanel_payments_tax,
    chanel_id: chanel_id,
  });

  
export const getChanel = async () =>
await axios.get(
  process.env.NEXT_PUBLIC_API_URL + "/getMasterChanel");


  export const getSettingwaysPayments = async (id) =>
  await axios.get(
    process.env.NEXT_PUBLIC_API_URL + "/getpaymentsways/" + id);