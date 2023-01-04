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

export const getShopnull = async (company_id) =>
  await axios.get(
    process.env.NEXT_PUBLIC_API_URL + "/getShopnull/" + company_id
  );

export const getShopdetail = async (id) =>
  await axios.get(process.env.NEXT_PUBLIC_API_URL + "/getshopdetail/" + id);

export const Editshop = async (id, shopname, shopdetail, user_id) =>
  await axios.post(process.env.NEXT_PUBLIC_API_URL + "/Editshop/" + id, {
    shopname: shopname,
    shopdetail: shopdetail,
    user_id: user_id,
  });
export const createShopgroup = async (
  company_id,
  shopgroupname,
  targetKeys2,
  estampuuid
) =>
  await axios.post(process.env.NEXT_PUBLIC_API_URL + "/shopgroup", {
    company_id: company_id,
    shopgroupname: shopgroupname,
    targetKeys: targetKeys2,
    estampuuid: estampuuid,
  });

export const getshopgroup = async (company_id) =>
  await axios.get(
    process.env.NEXT_PUBLIC_API_URL + "/getshopgroup/" + company_id
  );
