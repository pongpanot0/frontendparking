import React from "react";
import { Grid, Card, Text, Radio, Button } from "@nextui-org/react";
import Image from "next/image";
import promPay from "../../../Img/promtpay.png";
import Bank from "../../../Img/bank.png";
import truewallet from "../../../Img/truewallet.png";
import Link from "next/link";
import { useRouter } from "next/router";

const Paymentways = () => {
  const router = useRouter();
  const [click, setClick] = React.useState(1);
  const { pay } = router.query;
  const { payid } = router.query;
  const onChangpage = (e) => {
    router.push(`/${pay}/${payid}/${click}`);
  };
  const onClick = (e) => {
    setClick(e);
  };
 
  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={12} sm={12}>
        <Radio.Group
          label="เลือกช่องทางการชำระเงิน"
          defaultValue="1"
          onChange={(e) => onClick(e)}
        >
          <Radio value="1" title="ชำระผ่าน Promtpay">
            <Image
              ObjectFit="contain"
              src={promPay}
              title="ชำระผ่าน Promtpay"
              width={500}
              height={150}
            />
          </Radio>
          <Radio value="2" description="ชำระผ่านธนาคาร">
            <Image src={Bank} width={500} height={150} />
          </Radio>
          <Radio value="3" description="ชำระผ่าน TrueWallet">
            <Image src={truewallet} width={500} height={150} />
          </Radio>
        </Radio.Group>
      </Grid>
      <Grid xs={12} sm={12}>
        <Button onPress={(e) => onChangpage(e)}>เข้าสู่หน้าการชำระเงิน</Button>
      </Grid>
    </Grid.Container>
  );
};

export default Paymentways;
