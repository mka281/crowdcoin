import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x54466C6e98CC4B6E8B46e2959d724d6874f8a01f"
);

export default instance;
