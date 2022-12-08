import axios from "axios";

export const postTheme = async (company_id, primary, error, user_id) =>
  await axios.post(process.env.NEXT_PUBLIC_API_URL + `/createtheme`, {
    company_id: company_id,
    paimaryButton: primary,
    errorButton: error,
    created_by: user_id,
    updated_by: user_id,
  });


export const getTheme  = async (company_id) =>
await axios.get(process.env.NEXT_PUBLIC_API_URL + `/gettheme/${company_id}`)