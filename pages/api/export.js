import axios from "axios";
import moment from "moment";
export const Getexportpark = async (company_id) =>
  await axios({
    url: `${process.env.NEXT_PUBLIC_API_URL}/exportParkExcel/${company_id}`, //your url
    method: "POST",
    responseType: "blob", // important
  });

export const GetexportparkSelect = async (
  company_id,
  parking_start_date_first,
  parking_start_date_end
) =>
  await axios({
    url: `${process.env.NEXT_PUBLIC_API_URL}/exportSelectDateParkExcel/${company_id}`, //your url
    method: "POST",
    responseType: "blob", //important
    data: {
      parking_start_date_first: moment(parking_start_date_first).format(
        "yyyy-MM-DD"
      ),
      parking_start_date_end: moment(parking_start_date_end).format(
        "yyyy-MM-DD"
      ),
    },
  });

export const GetexportparkSelectTime = async (
  company_id,
  parking_start_date_first,
  parking_start_date_end
) =>
  await axios({
    url: `${process.env.NEXT_PUBLIC_API_URL}/exportSelectTimeParkExcel/${company_id}`, //your url
    method: "POST",
    responseType: "blob", //important
    data: {
      parking_start_date_first: moment(parking_start_date_first).format(
        "yyyy-MM-DD HH:mm:ss"
      ),
      parking_start_date_end: moment(parking_start_date_end).format(
        "yyyy-MM-DD HH:mm:ss"
      ),
    },
  });
