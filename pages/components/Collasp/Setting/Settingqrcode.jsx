import React from "react";
import { Grid, Card, Text, Spacer } from "@nextui-org/react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DragFile from "../../../components/DragFile";
import { useDrop } from "react-dnd";
import { useState } from "react";
import PdfViwer from "./PdfViwer";

const Settingqrcode = () => {
  /*  const [basket, setBasket] = useState([]);
  console.log(basket);
  const [{ isOver }, dropRef] = useDrop({
    accept: "language",
    drop: (item) =>
      setBasket((basket) =>
        !basket.includes(item) ? [...basket, item] : basket
      ),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }); */



  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={6} direction="column">
        {" "}
        <TextField
          id="outlined-basic"
          fullWidth
          label="Outlined"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          fullWidth
          label="Outlined"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          fullWidth
          label="Outlined"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          fullWidth
          label="Outlined"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          fullWidth
          label="Outlined"
          variant="outlined"
        />
      </Grid>
      <Grid xs={6}>
      <PdfViwer/>
        {/*     <Grid xs={6}>
          <div>
            <DragFile />
          </div>
        </Grid>
        <Grid xs={6}>
          <div className="flex">
            <div className="my-8 mx-8 rounded-xl border w-fit" ref={dropRef}>
              <div className="my-4">
                <div>
                  <p className="mx-16 font-bold">Droped Items</p>
                </div>
                {basket.map((e) => (
                  <p className="border w-fit my-2 p-2 mx-16 rounded bg-indigo-400 text-white font-bold cursor-pointer">
                    {e.name}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Grid> */}
      </Grid>
      <Grid xs={12}>
        {" "}
        <Button fullWidth variant="contained">
          Accept
        </Button>
      </Grid>
    </Grid.Container>
  );
};

export default Settingqrcode;
