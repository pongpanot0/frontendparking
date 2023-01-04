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

export const EditSetting = async (
  id,
  payment_min,
  payment_free,
  payment_forward,
  payment_hourfist,
  payment_minfirst,
  payment_hour,
  payment_id
) =>
  await axios.post(process.env.NEXT_PUBLIC_API_URL + `/editsetting`, {
    id: id,
    payment_min: payment_min,
    payment_free: payment_free,
    payment_forward: payment_forward,
    payment_hourfist: payment_hourfist,
    payment_minfirst: payment_minfirst,
    payment_hour: payment_hour,
    payment_id: payment_id,
  });

export const Getsetting = async (id) =>
  await axios.get(process.env.NEXT_PUBLIC_API_URL + `/getsetting/${id}`);

export const Getsettingid = async (id) =>
  await axios.get(process.env.NEXT_PUBLIC_API_URL + `/getsettingid/${id}`);

export const settingCompany = async (company_id) =>
  await axios.get(
    process.env.NEXT_PUBLIC_API_URL + `/company/get/` + company_id
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

  export const editChanel = async (
    id,
    chanel_payments_detail,
    chanel_payments_name,
    chanel_payments_tax,
    chanel_id
  ) =>
    await axios.post(process.env.NEXT_PUBLIC_API_URL + "/editchanel", {
      id:id,
      chanel_payments_detail: chanel_payments_detail,
      chanel_payments_name: chanel_payments_name,
      chanel_payments_tax: chanel_payments_tax,
      chanel_id: chanel_id,
    });

export const getChanel = async () =>
  await axios.get(process.env.NEXT_PUBLIC_API_URL + "/getMasterChanel");
export const getChanelPaymentsid = async (id) =>
  await axios.get(process.env.NEXT_PUBLIC_API_URL + `/getpaymentswaysid/${id}`);

export const getSettingwaysPayments = async (id) =>
  await axios.get(process.env.NEXT_PUBLIC_API_URL + `/getpaymentsways/${id}`);

export const uploadImg = async (value) =>
  await axios.post(process.env.NEXT_PUBLIC_API_URL + "/upload", {
    value: value,
  });

export const updateCompany = async (
  company_id,
  company_name,
  company_lots,
  timeReamain
) =>
  await axios.post(
    process.env.NEXT_PUBLIC_API_URL + "/company/update/" + company_id,
    {
      company_name: company_name,
      company_lots: company_lots,
      timeReamain: timeReamain,
    }
  );

export const getImage = async (company_id) =>
  await axios.get(process.env.NEXT_PUBLIC_API_URL + "/display/" + company_id);
export const updatePic = async (company_id, company_pic) =>
  await axios.post(
    process.env.NEXT_PUBLIC_API_URL + "/company/updatePic/" + company_id,
    {
      company_pic: company_pic,
    }
  );
export const getPDF = async (company_id) =>
  await axios.get(
    process.env.NEXT_PUBLIC_API_URL + "/displayPDF/" + company_id
  );
