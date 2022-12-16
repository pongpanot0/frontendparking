import axios from "axios";

export const getkios = async (id) =>
  await axios.get(process.env.NEXT_PUBLIC_API_URL + `/getkios/` + id);

export const createkios = async (
  id,
  kios_macaddress,
  kios_name,
  kios_serailNum,
  kios_ipaddress,
  kios_port,
  kios_usingfleg
) =>
  await axios.post(process.env.NEXT_PUBLIC_API_URL + `/createkios `, {
    kios_macaddress: kios_macaddress,
    kios_name: kios_name,
    company_id: id,
    kios_serailNum: kios_serailNum,
    kios_ipaddress: kios_ipaddress,
    kios_port: kios_port,
    kios_usingfleg: kios_usingfleg,
  });
