(this["webpackJsonpnft-minter"]=this["webpackJsonpnft-minter"]||[]).push([[0],{236:function(e,t,n){},237:function(e,t,n){},273:function(e,t){},297:function(e,t){},299:function(e,t){},378:function(e,t){},380:function(e,t){},389:function(e,t){},391:function(e,t){},416:function(e,t){},421:function(e,t){},423:function(e,t){},430:function(e,t){},443:function(e,t){},522:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"string","name":"tokenURI","type":"string"}],"name":"mintNFT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},523:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n.n(a),s=n(217),i=n.n(s),u=(n(236),n(237),n(16)),c=n.n(u),p=n(27),o=n(24);n(114).config();var d="d1a38ee529d101fc5a94",l="b2dae0e2cfc7efc17e5d875322a235acedb16b12c1825e7d13d3d365ac431d47",y=n(241),m=function(){var e=Object(p.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.pinata.cloud/pinning/pinFileToIPFS",(n=new FormData).append("file",t),e.abrupt("return",y.post("https://api.pinata.cloud/pinning/pinFileToIPFS",n,{maxBodyLength:"Infinity",headers:{"Content-Type":"multipart/form-data; boundary=".concat(n._boundary),pinata_api_key:d,pinata_secret_api_key:l}}).then((function(e){return{success:!0,pinataUrl:"https://gateway.pinata.cloud/ipfs/"+e.data.IpfsHash}})).catch((function(e){return console.log(e),{success:!1,message:e.message}})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(p.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.pinata.cloud/pinning/pinJSONToIPFS",e.abrupt("return",y.post("https://api.pinata.cloud/pinning/pinJSONToIPFS",t,{headers:{pinata_api_key:d,pinata_secret_api_key:l}}).then((function(e){return{success:!0,pinataUrl:"https://gateway.pinata.cloud/ipfs/"+e.data.IpfsHash}})).catch((function(e){return console.log(e),{success:!1,message:e.message}})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=n(6);n(114).config();var h=(0,n(260).createAlchemyWeb3)("https://eth-goerli.g.alchemy.com/v2/eHDJB6viYYkgOfdoo0eNje5AP34HWs1e"),j=n(522),x="0xA10A93F2ec836aF72A720b1F137Afcfe940eA11E",T=function(){var e=Object(p.a)(c.a.mark((function e(t,n,a){var r,s,i,u,p;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(t);case 2:if((r=e.sent).success){e.next=5;break}return e.abrupt("return",{success:!1,status:"\ud83d\ude22 Something went wrong while uploading your image."});case 5:return(s=new Object).name=n,s.url=r.pinataUrl,s.description=a,e.next=12,b(s);case 12:if((i=e.sent).success){e.next=15;break}return e.abrupt("return",{success:!1,status:"\ud83d\ude22 Something went wrong while uploading your tokenURI."});case 15:return u=i.pinataUrl,e.next=18,new h.eth.Contract(j,x);case 18:return window.contract=e.sent,p={to:x,from:window.ethereum.selectedAddress,data:window.contract.methods.mintNFT(window.ethereum.selectedAddress,u).encodeABI()},e.prev=20,e.next=23,window.ethereum.request({method:"eth_sendTransaction",params:[p]});case 23:return e.sent,e.abrupt("return",{success:!0,NFTname:s.name,NFTurl:s.url,NFTdescription:s.description});case 27:return e.prev=27,e.t0=e.catch(20),e.abrupt("return",{success:!1,NFTname:"None",NFTurl:"None",NFTdescription:"None"});case 30:case"end":return e.stop()}}),e,null,[[20,27]])})));return function(t,n,a){return e.apply(this,arguments)}}(),w=function(){var e=Object(p.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=14;break}return e.prev=1,e.next=4,window.ethereum.request({method:"eth_requestAccounts"});case 4:return t=e.sent,n={status:"Write a message in the text-field above.",address:t[0]},e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",{address:"",status:"\ud83d\ude25 "+e.t0.message});case 12:e.next=15;break;case 14:return e.abrupt("return",{address:"",status:Object(f.jsx)("span",{children:Object(f.jsxs)("p",{children:[" ","\ud83e\udd8a"," ",Object(f.jsx)("a",{target:"_blank",href:"https://metamask.io/download.html",children:"You must install Metamask, a virtual Ethereum wallet, in your browser."})]})})});case 15:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(p.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=17;break}return e.prev=1,e.next=4,window.ethereum.request({method:"eth_accounts"});case 4:if(!((t=e.sent).length>0)){e.next=9;break}return e.abrupt("return",{address:t[0],status:" "});case 9:return e.abrupt("return",{address:"",status:"Please Connect to Metamask"});case 10:e.next=15;break;case 12:return e.prev=12,e.t0=e.catch(1),e.abrupt("return",{address:"",status:"\ud83d\ude25 "+e.t0.message});case 15:e.next=18;break;case 17:return e.abrupt("return",{address:"",status:Object(f.jsx)("span",{children:Object(f.jsxs)("p",{children:[" ","\ud83e\udd8a"," ",Object(f.jsx)("a",{target:"_blank",href:"https://metamask.io/download.html",children:"You must install Metamask, a virtual Ethereum wallet, in your browser."})]})})});case 18:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}(),v=n(11),g=function(e){var t=Object(v.f)(),n=Object(a.useState)(""),r=Object(o.a)(n,2),s=r[0],i=r[1],u=Object(a.useState)(""),d=Object(o.a)(u,2),l=d[0],y=d[1],m=Object(a.useState)(""),b=Object(o.a)(m,2),h=b[0],j=b[1],x=Object(a.useState)(""),g=Object(o.a)(x,2),k=g[0],F=g[1],N=Object(a.useState)(""),M=Object(o.a)(N,2),I=M[0],A=M[1];Object(a.useRef)();Object(a.useEffect)(Object(p.a)(c.a.mark((function e(){var t,n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:t=e.sent,n=t.address,a=t.status,i(n),y(a),window.ethereum?window.ethereum.on("accountsChanged",(function(e){e.length>0?(i(e[0]),y(" Write a message in the text-field above.")):(i(""),y(" Connect to Metamask."))})):y(Object(f.jsxs)("p",{children:[" ","\ud83e\udd8a"," ",Object(f.jsx)("a",{target:"_blank",href:"https://metamask.io/download.html",children:"You must install Metamask, a virtual Ethereum wallet, in your browser."})]}));case 8:case"end":return e.stop()}}),e)}))),[]);var S=function(){var e=Object(p.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:t=e.sent,y(t.status),i(t.address);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(p.a)(c.a.mark((function e(){var n,a,r,s,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(I,h,k);case 2:n=e.sent,a=n.success,r=n.NFTname,s=n.NFTurl,i=n.NFTdescription,a&&t("/display",{state:{NFTname:r,NFTurl:s,NFTdescription:i}});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"Minter",children:[Object(f.jsx)("button",{id:"walletButton",onClick:S,children:s.length>0?"Connected: "+String(s).substring(0,6)+"..."+String(s).substring(38):Object(f.jsx)("span",{children:"Connect Wallet"})}),Object(f.jsx)("br",{}),Object(f.jsx)("h1",{id:"title",children:" NFT Minter "}),Object(f.jsxs)("form",{children:[Object(f.jsx)("h2",{children:"Upload Image: "}),Object(f.jsx)("input",{type:"file",onChange:function(e){return A(e.target.files[0])},required:!0}),Object(f.jsx)("h2",{children:"The Name of the NFT: "}),Object(f.jsx)("input",{type:"text",onChange:function(e){return j(e.target.value)}}),Object(f.jsx)("h2",{children:"The Description of the NFT: "}),Object(f.jsx)("input",{type:"text",onChange:function(e){return F(e.target.value)}})]}),Object(f.jsx)("button",{id:"mintButton",onClick:_,children:"Mint NFT"}),Object(f.jsx)("p",{id:"status",children:l})]})},k=function(){var e=Object(v.e)();return Object(f.jsxs)("div",{className:"Minter",children:[Object(f.jsx)("br",{}),Object(f.jsx)("h1",{id:"title",children:" Fresh Minted NFT! "}),Object(f.jsxs)("form",{children:[Object(f.jsx)("h2",{children:"NFT"}),Object(f.jsx)("img",{src:e.state.NFTurl,classname:"image",alt:""})," : ",Object(f.jsx)("h3",{children:"none!"}),Object(f.jsxs)("h2",{children:["The Name of the NFT:",e.state.NFTname," "]})," : ",Object(f.jsx)("h2",{children:"none!"}),Object(f.jsxs)("h2",{children:["The Description of the NFT: ",e.state.NFTdescription]})," : ",Object(f.jsx)("h2",{children:"none!"}),Object(f.jsx)("button",{onClick:function(){return window.open("http://afternoon-env.eba-q4ub6hff.us-east-1.elasticbeanstalk.com/","_blank")},children:"Click me back to Ai art generator!~"})]})]})},F=n(75);var N=function(){return Object(f.jsx)(F.a,{children:Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)(v.c,{children:[Object(f.jsx)(v.a,{path:"/",element:Object(f.jsx)(g,{})}),Object(f.jsx)(v.a,{path:"display",element:Object(f.jsx)(k,{})})]})})})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,527)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),s(e),i(e)}))};i.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(N,{})}),document.getElementById("root")),M()}},[[523,1,2]]]);
//# sourceMappingURL=main.f700a94c.chunk.js.map