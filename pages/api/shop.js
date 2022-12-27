import axios from "axios";

export const createShop = async (shopname, shopdetail, user_id, company_id) =>
  await axios.post(process.env.NEXT_PUBLIC_API_URL + "/addshop", {
    shopname: shopname,
    shopdetail: shopdetail,
    user_id: user_id,
    company_id: company_id,
  });
export const getShop = async (company_id) =>
  await axios.get(process.env.NEXT_PUBLIC_API_URL + "/getshop/" + company_id);

export const getShopdetail = async (id) =>
  await axios.get(process.env.NEXT_PUBLIC_API_URL + "/getshopdetail/" + id);

  
export const Editshop = async (id, shopname, shopdetail, user_id) =>
  await axios.post(process.env.NEXT_PUBLIC_API_URL + "/Editshop/" + id, {
    shopname: shopname,
    shopdetail: shopdetail,
    user_id: user_id,
  });
