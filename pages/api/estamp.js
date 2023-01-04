import axios from "axios";
import moment from "moment";
export const getEstamp = async (company_id) =>
  await axios({
    url: `${process.env.NEXT_PUBLIC_API_URL}/estamp/get/${company_id}`, //your url
    method: "get", // important
  });

export const getEstampid = async (id) =>
  await axios({
    url: `${process.env.NEXT_PUBLIC_API_URL}/getEstampid/${id}`, //your url
    method: "get", // important
  });

export const createEstamp = async (
  estamp_name,
  estamp_total,
  company_id,
  crated_by,
  expire_date
) =>
  await axios({
    url: `${process.env.NEXT_PUBLIC_API_URL}/estamp/created`, //your url
    method: "POST", // important
    data: {
      estamp_name: estamp_name,
      estamp_total: estamp_total,
      company_id: company_id,
      crated_by: crated_by,
      expire_date: expire_date,
    },
  });

export const editEstamp = async (
  realid,
  id,
  estamp_name,
  estamp_total,
  expire_date
) =>
  await axios({
    url: `${process.env.NEXT_PUBLIC_API_URL}/editEstamp/${id}`, //your url
    method: "POST", // important
    data: {
      estamp_id: realid,
      estamp_name: estamp_name,
      estamp_total: estamp_total,
      expire_date: expire_date,
    },
  });

export const deleteestamp = async (id) =>
  await axios({
    url: `${process.env.NEXT_PUBLIC_API_URL}/deleteestamp`, //your url
    method: "POST", // important
    data: {
      id: id,
    },
  });
