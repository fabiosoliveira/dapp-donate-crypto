import Web3 from "web3";
import ABI from "./ABI.json";

const CONTRACT_ADDRESS = "0x22904fDB51860c0d96E2731bDE03559cddf91A93";

export async function doLogin() {
  if (!window.ethereum) throw new Error("No MetaMask found!");

  const web3 = new Web3(window.ethereum);
  const accounts = await web3.eth.requestAccounts();

  if (!accounts || !accounts.length)
    throw new Error("Wallet not found/allowed.");

  localStorage.setItem("wallet", accounts[0]);

  return accounts[0];
}

function getContract() {
  const web3 = new Web3(window.ethereum);
  const from = localStorage.getItem("wallet");
  return new web3.eth.Contract(ABI, CONTRACT_ADDRESS, { from });
}

export function addCampaign({ title, description, videoUrl, imageUrl }) {
  const contract = getContract();
  return contract.methods
    .addCampaign(title, description, videoUrl, imageUrl)
    .send();
}

export function getLastCampaignId() {
  const contract = getContract();
  return contract.methods.nextId().call();
}

export function getCampaign(id) {
  const contract = getContract();
  return contract.methods.campaigns(id).call();
}

export function donate(id, donation) {
  const contract = getContract();
  return contract.methods
    .donate(id)
    .send({ value: Web3.utils.toWei(donation, "ether") });
}
