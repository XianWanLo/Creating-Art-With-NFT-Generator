(this["webpackJsonpnft-minter"]=this["webpackJsonpnft-minter"]||[]).push([[0],{291:function(e,t,n){},292:function(e,t,n){},328:function(e,t){},352:function(e,t){},354:function(e,t){},433:function(e,t){},435:function(e,t){},444:function(e,t){},446:function(e,t){},471:function(e,t){},476:function(e,t){},478:function(e,t){},485:function(e,t){},498:function(e,t){},577:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"string","name":"tokenURI","type":"string"}],"name":"mintNFT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},583:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(264),i=n.n(s),u=(n(291),n(292),n(26)),c=n.n(u),o=n(44),p=n(22);n(160).config();var d="d1a38ee529d101fc5a94",l="b2dae0e2cfc7efc17e5d875322a235acedb16b12c1825e7d13d3d365ac431d47",m=n(296),y=function(){var e=Object(o.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.pinata.cloud/pinning/pinFileToIPFS",(n=new FormData).append("file",t),e.abrupt("return",m.post("https://api.pinata.cloud/pinning/pinFileToIPFS",n,{maxBodyLength:"Infinity",headers:{"Content-Type":"multipart/form-data; boundary=".concat(n._boundary),pinata_api_key:d,pinata_secret_api_key:l}}).then((function(e){return{success:!0,pinataUrl:"https://gateway.pinata.cloud/ipfs/"+e.data.IpfsHash}})).catch((function(e){return console.log(e),{success:!1,message:e.message}})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(o.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.pinata.cloud/pinning/pinJSONToIPFS",e.abrupt("return",m.post("https://api.pinata.cloud/pinning/pinJSONToIPFS",t,{headers:{pinata_api_key:d,pinata_secret_api_key:l}}).then((function(e){return{success:!0,pinataUrl:"https://gateway.pinata.cloud/ipfs/"+e.data.IpfsHash}})).catch((function(e){return console.log(e),{success:!1,message:e.message}})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=n(2);n(160).config();var f=(0,n(315).createAlchemyWeb3)("https://eth-goerli.g.alchemy.com/v2/eHDJB6viYYkgOfdoo0eNje5AP34HWs1e"),j=n(577),x="0xA10A93F2ec836aF72A720b1F137Afcfe940eA11E",T=function(){var e=Object(o.a)(c.a.mark((function e(t,n,a){var r,s,i,u,o,p;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(t);case 2:if((r=e.sent).success){e.next=5;break}return e.abrupt("return",{success:!1,status:"\ud83d\ude22 Something went wrong while uploading your image."});case 5:return(s=new Object).name=n,s.url=r.pinataUrl,s.description=a,e.next=12,b(s);case 12:if((i=e.sent).success){e.next=15;break}return e.abrupt("return",{success:!1,status:"\ud83d\ude22 Something went wrong while uploading your tokenURI."});case 15:return u=i.pinataUrl,e.next=18,new f.eth.Contract(j,x);case 18:return window.contract=e.sent,o={to:x,from:window.ethereum.selectedAddress,data:window.contract.methods.mintNFT(window.ethereum.selectedAddress,u).encodeABI()},e.prev=20,e.next=23,window.ethereum.request({method:"eth_sendTransaction",params:[o]});case 23:return p=e.sent,e.abrupt("return",{success:!0,NFTname:s.name,NFTurl:s.url,NFTdescription:s.description,txHash:p});case 27:return e.prev=27,e.t0=e.catch(20),e.abrupt("return",{success:!1,NFTname:"None",NFTurl:"None",NFTdescription:"None",txHash:"None"});case 30:case"end":return e.stop()}}),e,null,[[20,27]])})));return function(t,n,a){return e.apply(this,arguments)}}(),O=function(){var e=Object(o.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=14;break}return e.prev=1,e.next=4,window.ethereum.request({method:"eth_requestAccounts"});case 4:return t=e.sent,n={status:"Write a message in the text-field above.",address:t[0]},e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",{address:"",status:"\ud83d\ude25 "+e.t0.message});case 12:e.next=15;break;case 14:return e.abrupt("return",{address:"",status:Object(h.jsx)("span",{children:Object(h.jsxs)("p",{children:[" ","\ud83e\udd8a"," ",Object(h.jsx)("a",{target:"_blank",href:"https://metamask.io/download.html",children:"You must install Metamask, a virtual Ethereum wallet, in your browser."})]})})});case 15:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(o.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=17;break}return e.prev=1,e.next=4,window.ethereum.request({method:"eth_accounts"});case 4:if(!((t=e.sent).length>0)){e.next=9;break}return e.abrupt("return",{address:t[0],status:" "});case 9:return e.abrupt("return",{address:"",status:"Please Connect to Metamask"});case 10:e.next=15;break;case 12:return e.prev=12,e.t0=e.catch(1),e.abrupt("return",{address:"",status:"\ud83d\ude25 "+e.t0.message});case 15:e.next=18;break;case 17:return e.abrupt("return",{address:"",status:Object(h.jsx)("span",{children:Object(h.jsxs)("p",{children:[" ","\ud83e\udd8a"," ",Object(h.jsx)("a",{target:"_blank",href:"https://metamask.io/download.html",children:"You must install Metamask, a virtual Ethereum wallet, in your browser."})]})})});case 18:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}(),v=n(15),g=function(e){var t=Object(v.f)(),n=Object(a.useState)(""),r=Object(p.a)(n,2),s=r[0],i=r[1],u=Object(a.useState)(""),d=Object(p.a)(u,2),l=d[0],m=d[1],y=Object(a.useState)(""),b=Object(p.a)(y,2),f=b[0],j=b[1],x=Object(a.useState)(""),g=Object(p.a)(x,2),k=g[0],F=g[1],N=Object(a.useState)(""),I=Object(p.a)(N,2),M=I[0],A=I[1];Object(a.useRef)();Object(a.useEffect)(Object(o.a)(c.a.mark((function e(){var t,n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:t=e.sent,n=t.address,a=t.status,i(n),m(a),window.ethereum?window.ethereum.on("accountsChanged",(function(e){e.length>0?(i(e[0]),m(" Write a message in the text-field above.")):(i(""),m(" Connect to Metamask."))})):m(Object(h.jsxs)("p",{children:[" ","\ud83e\udd8a"," ",Object(h.jsx)("a",{target:"_blank",href:"https://metamask.io/download.html",children:"You must install Metamask, a virtual Ethereum wallet, in your browser."})]}));case 8:case"end":return e.stop()}}),e)}))),[]);var S=function(){var e=Object(o.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:t=e.sent,m(t.status),i(t.address);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(o.a)(c.a.mark((function e(){var n,a,r,s,i,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(M,f,k);case 2:n=e.sent,a=n.success,r=n.NFTname,s=n.NFTurl,i=n.NFTdescription,u=n.txHash,a&&t("/display",{state:{NFTname:r,NFTurl:s,NFTdescription:i,txURL:"https://goerli.etherscan.io/tx/"+u}});case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"Minter",children:[Object(h.jsx)("button",{id:"walletButton",onClick:S,children:s.length>0?"Connected: "+String(s).substring(0,6)+"..."+String(s).substring(38):Object(h.jsx)("span",{children:"Connect Wallet"})}),Object(h.jsx)("br",{}),Object(h.jsx)("h1",{id:"title",children:" NFT Minter "}),Object(h.jsxs)("form",{children:[Object(h.jsx)("h2",{children:"Upload Image: "}),Object(h.jsx)("input",{type:"file",onChange:function(e){return A(e.target.files[0])},required:!0}),Object(h.jsx)("h2",{children:"The Name of the NFT: "}),Object(h.jsx)("input",{type:"text",onChange:function(e){return j(e.target.value)}}),Object(h.jsx)("h2",{children:"The Description of the NFT: "}),Object(h.jsx)("input",{type:"text",onChange:function(e){return F(e.target.value)}})]}),Object(h.jsx)("button",{id:"mintButton",onClick:_,children:"Mint NFT"}),Object(h.jsx)("p",{id:"status",children:l})]})},k=n(624),F=n(625),N=n(627),I=n(631),M=n(621),A=n(632),S=n(633),_=n(628),C=n(629),U=n(623),B=n(276),H=n.n(B),P=n(630),W=n(620),q=n(277),R=n(18),D=n(626),E=function(){var e=Object(v.e)(),t=Object(q.a)(),n=Object(R.a)("img")({margin:"auto",display:"block",maxWidth:"100%",maxHeight:"100%"});return Object(h.jsx)(D.a,{theme:t,children:Object(h.jsxs)(U.a,{container:!0,component:"main",sx:{height:"100vh"},children:[Object(h.jsx)(N.a,{}),Object(h.jsx)(U.a,{item:!0,xs:!1,sm:4,md:4,children:Object(h.jsx)(W.a,{children:Object(h.jsx)(n,{alt:"complex",src:e.state.NFTurl})})}),Object(h.jsx)(U.a,{item:!0,xs:12,sm:8,md:8,component:_.a,elevation:6,square:!0,children:Object(h.jsxs)(C.a,{sx:{my:8,mx:4,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(h.jsx)(k.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(h.jsx)(H.a,{})}),Object(h.jsx)(P.a,{component:"h1",variant:"h5",children:"NFT Information:"}),Object(h.jsxs)(C.a,{component:"form",children:[Object(h.jsxs)(I.a,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:[Object(h.jsx)(M.a,{button:!0,children:Object(h.jsx)(A.a,{primary:"The Name of the NFT",secondary:e.state.NFTname})}),Object(h.jsx)(S.a,{}),Object(h.jsx)(M.a,{button:!0,divider:!0,children:Object(h.jsx)(A.a,{primary:"The Description of the NFT",secondary:e.state.NFTdescription})})]}),Object(h.jsx)(F.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},onClick:function(){return window.open("http://afternoon-env.eba-q4ub6hff.us-east-1.elasticbeanstalk.com/","_blank")},children:"Click me back to Ai art generator!~"}),Object(h.jsx)(U.a,{container:!0,children:Object(h.jsx)(U.a,{item:!0,xs:!0,children:Object(h.jsx)("a",{href:e.state.txURL,variant:"body2",children:"See the transaction infomation at here."})})})]})]})})]})})},J=n(107);var L=function(){return Object(h.jsx)(J.a,{children:Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(v.c,{children:[Object(h.jsx)(v.a,{path:"/",element:Object(h.jsx)(g,{})}),Object(h.jsx)(v.a,{path:"display",element:Object(h.jsx)(E,{})})]})})})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,634)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),s(e),i(e)}))};i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(L,{})}),document.getElementById("root")),Y()}},[[583,1,2]]]);
//# sourceMappingURL=main.940e694f.chunk.js.map