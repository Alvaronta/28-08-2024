import Container from "../components/layout/container/container";
import PcItemDeck from "../components/ui/pc-item-deck/pc-item-deck";

const components = [
  {
    thumbnail:
      "https://ik.imagekit.io/kit/products/26/18/intel-core-i9-10900k-26184d3d1bd10986083e873d9709b6bc.png?tr=dpr-1.25,cm-pad_resize,bg-FFFFFF,q-80,w-270,h-270",
    title: "Intel Core i9-10900K 10 Cores, up to 5.3 GHz Unlocked",
  },
  {
    thumbnail:
      "https://ik.imagekit.io/kit/products/48/e5/gigabyte-h470i-aorus-48e5fab6df9a6e492246b168701351ee.png?tr=dpr-1.25,cm-pad_resize,bg-FFFFFF,q-80,w-270,h-270",
    title: "Gigabyte H470I AORUS PRO AX, Mini ITX/DDR4/WIFI 6",
  },
  {
    thumbnail:
      "https://ik.imagekit.io/kit/products/1c/fe/corsair-dominator-pl-1cfee752a05608c6f79dbe9158fce2c9.png?tr=dpr-1.25,cm-pad_resize,bg-FFFFFF,q-80,w-270,h-270",
    title: "Corsair Dominator Platinum RGB 32GB (4x8GB) DDR4 3600",
  },
  {
    thumbnail:
      "https://ik.imagekit.io/kit/products/49/d0/western-digital-1tb-49d07733d19fcba1bffe15e1366086ed.png?tr=dpr-1.25,cm-pad_resize,bg-FFFFFF,q-80,w-270,h-270",
    title: "1TB WD Blue SN550 NVMe Internal SSD - Gen3 x4 PCIe 8Gb/s",
  },
  {
    thumbnail:
      "https://ik.imagekit.io/kit/products/8f/e8/samsung-mz-v7s1t0b-8fe854c1def88df6234df6e860071ea1.png?tr=dpr-1.25,cm-pad_resize,bg-FFFFFF,q-80,w-270,h-270",
    title: "SAMSUNG (MZ-V7S1T0B/AM) 970 EVO Plus 1TB - M.2 NVMe",
  },
  {
    thumbnail:
      "https://ik.imagekit.io/kit/products/ce/8c/zotac-gaming-geforce-ce8c2f813a6a078cc71964bf67c14145.png?tr=q-80,bg-FFFFFF,dpr-1.25,cm-pad_resize,w-270,h-270",
    title: "ZOTAC GeForce RTX 2070 Super Mini 8GB GDDR6 256-Bit 14Gbps",
  },
  {
    thumbnail:
      "https://ik.imagekit.io/kit/products/f1/20/cooler-master-master-f1208661423f3ce1d3d690691f956cd1.png?tr=q-80,bg-FFFFFF,dpr-1.25,cm-pad_resize,w-270,h-270",
    title: "Cooler Master MasterLiquid ML240L RGB V2, 120mm",
  },
];

const perifericos = [
  {
    thumbnail:
      "https://ik.imagekit.io/kit/products/2c/d2/shure-sm7b-cardioid-2cd2d389834174336b20d2161dc8a0ba.png?tr=dpr-1.25,cm-pad_resize,bg-FFFFFF,q-80,w-270,h-270",
    title: "Shure SM7B Cardioid Dynamic Microphone",
  },
  {
    thumbnail:
      "https://ik.imagekit.io/kit/products/ab/f2/elgato-stream-deck-abf26625bd82781a43f2e321ae0cf48d.png?tr=dpr-1.25,cm-pad_resize,bg-FFFFFF,q-80,w-270,h-270",
    title: "Elgato Stream Deck - 15 LCD Keys",
  },
  {
    thumbnail:
      "https://ik.imagekit.io/kit/products/14/92/rode-psa-1-swivel-mo-1492e985159f739082a48ec341386d63.png?tr=dpr-1.25,cm-pad_resize,bg-FFFFFF,q-80,w-270,h-270",
    title: "RODE PSA 1 Swivel Mount Studio Mic",
  },
  {
    thumbnail:
      "https://ik.imagekit.io/kit/products/fa/88/razer-blackwidow-lit-fa8812bd608a164cd16fb8491f90d353.png?tr=dpr-1.25,cm-pad_resize,bg-FFFFFF,q-80,w-270,h-270",
    title: "Razer BlackWidow Lite Mechanical Tenkeyless",
  },
  {
    thumbnail:
      "https://ik.imagekit.io/kit/products/f6/98/benq-zowie-ec2-ergon-f698e5a76fc207ba0367c1f58188fcdd.png?tr=dpr-1.25,cm-pad_resize,bg-FFFFFF,q-80,w-270,h-270",
    title: "BenQ Zowie EC2 Ergonomic Mouse",
  },
  {
    thumbnail:
      "https://ik.imagekit.io/kit/products/63/bf/steelseries-arctis-5-63bff8ee79eb9eecfff734f52390f0d6.png?tr=dpr-1.25,cm-pad_resize,bg-FFFFFF,q-80,w-270,h-270",
    title: "SteelSeries Arctis 5 - RGB Illuminated",
  },
  {
    thumbnail:
      "https://ik.imagekit.io/kit/products/4d/6a/elgato-green-screen-4d6ab072759f166138ddd2b685af7c75.png?tr=dpr-1.25,cm-pad_resize,bg-FFFFFF,q-80,w-270,h-270",
    title: "Corsair Elgato Green Screen - Collapsible.",
  },
  {
    thumbnail:
      "https://ik.imagekit.io/kit/products/33/89/sony-alpha-7c-full-f-338911b8e8f1725097a9d6e87e473fbd.png?tr=dpr-1.25,cm-pad_resize,bg-FFFFFF,q-80,w-270,h-270",
    title: "Sony Alpha 7C Full-Frame Mirrorless Camera",
  },
  {
    thumbnail:
      "https://ik.imagekit.io/kit/products/a7/21/sony-sel1635gm-fe-1-a72140b982f2e7d08d2cde38fe4eceb2.png?tr=dpr-1.25,cm-pad_resize,bg-FFFFFF,q-80,w-270,h-270",
    title: "Sony SEL1635GM FE 16-35mm F2.8 GM",
  },
  {
    thumbnail:
      "https://ik.imagekit.io/kit/products/02/20/all-new-echo-show-8-02203efb27fcf48b271c886565b849aa.png?tr=dpr-1.25,cm-pad_resize,bg-FFFFFF,q-80,w-270,h-270",
    title: "Amazon All-new Echo Show 8 - 2nd Gen.",
  },
  {
    thumbnail:
      "https://ik.imagekit.io/kit/products/d9/16/dell-p2419h-24-16-9-d91674d77d5c14b34ae5167db771dc58.png?tr=dpr-1.25,cm-pad_resize,bg-FFFFFF,q-80,w-270,h-270",
    title: 'AOM Dell P2419H 24" 16:9 IPS Monitor',
  },
  {
    thumbnail:
      "https://ik.imagekit.io/kit/products/27/a6/asus-vg27aq-tuf-gami-27a64a34b9acdf729a3df018e06ffbb8.png?tr=dpr-1.25,cm-pad_resize,bg-FFFFFF,q-80,w-270,h-270",
    title: 'ASUS VG27AQ TUF Gaming 27" 2K 165Hz',
  },
  {
    thumbnail:
      "https://ik.imagekit.io/kit/products/8b/34/loupedeck-creative-t-8b34f436f0a7efa4f184a33b9a8052a8.png?tr=dpr-1.25,cm-pad_resize,bg-FFFFFF,q-80,w-270,h-270",
    title: "Loupedeck Creative Tool - Editing Console",
  },
];

export default function PC() {
  return (
    <>
      <Container
        marginTop={"30px"}
        marginBottom={"30px"}
        bg={"#161616"}
        padding={"15px"}
      >
        <PcItemDeck title={"Componentes"} items={components} />
      </Container>

      <Container
        marginTop={"30px"}
        marginBottom={"30px"}
        bg={"#161616"}
        padding={"15px"}
      >
        <PcItemDeck title={"Periféricos"} items={perifericos} />
      </Container>
    </>
  );
}
