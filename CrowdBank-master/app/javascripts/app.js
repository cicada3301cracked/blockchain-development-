



import { default as Web3} from 'web3';
import { default as contract } from 'truffle-contract'


















































































window.addEventListener('load', function() {
  
  if (typeof web3 !== 'undefined') {
    console.warn("Using web3 detected from external source. If you find that your accounts don't appear or you have 0 MetaCoin, ensure you've configured that source properly. If using MetaMask, see the following link. Feel free to delete this warning. :) http:
    
    window.web3 = new Web3(web3.currentProvider);
  } else {
    console.warn("No web3 detected. Falling back to http:
    
    window.web3 = new Web3(new Web3.providers.HttpProvider("http:
  }

  
});
