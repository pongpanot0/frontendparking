import axios from "axios";
export const deleteShop = async (id) =>
  await axios.post(process.env.NEXT_PUBLIC_API_URL + `/deleteShop/` + id);
