import axios from "axios";
import moment from "moment";
export const getParkingLike = async (company_id,lcplate) =>
  await axios({
    url: `${process.env.NEXT_PUBLIC_API_URL}/ParkLike/${company_id}`, //your url
    method: "POST", // important
    data: {
      lcplate: lcplate,
    },
  });
