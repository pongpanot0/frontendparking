import axios from "axios";

export const getkios = async (id) =>
  await axios.get(process.env.NEXT_PUBLIC_API_URL + `/getkios/ ` + id);

export const createkios = async (id,kios_macaddress, kios_name) =>
  await axios.post(process.env.NEXT_PUBLIC_API_URL + `/createkios `, {
    kios_macaddress: kios_macaddress,
    kios_name: kios_name,
    company_id:id
  });
