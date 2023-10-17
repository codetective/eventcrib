function makeGatewayURL(imgCID: string, imgName: string) {
  return `https://${imgCID}.ipfs.w3s.link/${imgName}`;
}

export default makeGatewayURL;
