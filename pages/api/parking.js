import axios from "axios";

export const getparking = async (id) =>
  await axios.get(process.env.NEXT_PUBLIC_API_URL + `/exportparking/ ` + id);

export const getSumdata = async (id) =>
  await axios.get(
    process.env.NEXT_PUBLIC_API_URL + `/Parksumcalculator/ ` + id
  );
  export const getCounthLogs = async (id) =>
  await axios.get(
    process.env.NEXT_PUBLIC_API_URL + `/Parkcountlogs/ ` + id
  );
