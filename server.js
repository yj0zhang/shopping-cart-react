const express = require("express");

const app = express();

const data = [
  {
    id: 1,
    name: "华为Mate60",
    price: 6999,
    image:
      "https://img2.baidu.com/it/u=1606763208,1206677899&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=1111",
    intro:
      "HUAWEI Mate 60 搭载超光变主摄,物理光圈十档可调, 配合潜望式长焦摄像头和超广角摄像头,万千世界,纵览精彩",
    max_order: 5,
    hot: false,
    high: true,
  },
  {
    id: 2,
    name: "小米15pro",
    price: 5999,
    image:
      "https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomi-15-pro_199288/images/4.jpg",
    intro:
      "承袭徕卡专业光学设计，搭载全新 Summilux 高速镜头，融合大模型计算摄影平台，全焦段突破移动影像边界，万千复杂瞬间，万般真实动人。",
    max_order: 1,
    hot: true,
    high: true,
  },
  {
    id: 3,
    name: "红米k80pro",
    price: 3999,
    image:
      "https://cdn.cnbj1.fds.api.mi-img.com/product-images/redmi-k80-pro_736022/images/34673.png",
    intro: "REDMI新一代旗舰",
    max_order: 1,
    hot: true,
    high: true,
  },
  {
    id: 4,
    name: "荣耀X60",
    price: 1999,
    image:
      "https://hshop.honorfile.com/pimages//display_auto/10001070010501/800_800_c_web3F221E1E3A4C52DB5E43844585EAC39B2E6069A08677FDFD.jpg",
    intro: "荣耀X60 十面防摔耐磨，6000mAh青海湖电池...",
    max_order: 1,
    hot: true,
    high: false,
  },
  {
    id: 5,
    name: "一加Ace5",
    price: 1999,
    image:
      "https://msecfs.opposhop.cn/commons-media-picture/GOODS/20250318/394ad5e8134af94bb10e7c42afde30d1-236838813.jpg?_w_=1440&_h_=1440&x-oss-process=image%2Fresize%2Cm_mfit%2Climit_1%2Cw_1440%2Ch_1440",
    intro: "一加Ace5 性能凶猛，快人一代",
    max_order: 5,
    hot: false,
    high: false,
  },
];

app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST");
  next();
});

app.get("/products", (req, res) => {
  res.json(data);
});

app.get("/detail/:id", (req, res) => {
  const { id } = req.params;
  const detail = data.find((item) => item.id == id);
  console.log(id, detail);
  res.json(detail);
});

app.listen(3000);
