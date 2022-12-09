import axios from "axios";

export const getcamera = async (id) =>
  await axios.get(process.env.NEXT_PUBLIC_API_URL + `/getcamera/ ` + id);

export const createcamera = async (id, camera_ip) =>
  await axios.post(process.env.NEXT_PUBLIC_API_URL + `/createcamera `, {
    company_id: id,
    camera_ip: camera_ip,
  });
