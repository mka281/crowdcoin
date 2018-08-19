import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xea9b178E140E784782E7eaBe8cA75c997E94D882"
);

export default instance;
