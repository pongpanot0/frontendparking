import React from "react";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import useEffectOnce from "../../../../../Helpers/use-effect-once";
import { getshopgroup } from "../../../../../api/shop";
import jwt_decode from "jwt-decode";
const Shoptree = ({ setgetdata }) => {
  useEffectOnce(() => {
    getData();
  });
  const [getshorp, setGetshop] = React.useState([]);
  const getData = () => {
    const token = localStorage.getItem("token");
    const id = jwt_decode(token);
    getshopgroup(id.company_id)
      .then((res) => {
        setGetshop(res.data.data);
        setgetdata();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const tree = getshorp.map((res) => {
    return (
      <TreeItem nodeId={res._id} label={res.shopgroupname}>
        {res.shop?.map((res) => {
          return <TreeItem nodeId={res._id} label={`ร้าน ${res.shopname}`} />;
        })}
      </TreeItem>
    );
  });
  return (
    <div>
      <TreeView
        aria-label="multi-select"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        multiSelect
        sx={{ height: "100%", width: "100%", flexGrow: 1, overflowY: "auto" }}
      >
        {tree}
      </TreeView>
    </div>
  );
};

export default Shoptree;
