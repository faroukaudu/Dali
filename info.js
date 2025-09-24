const myModule = require('./index.js');
const app = myModule.main;
// 0-state 1-address 2-structure 3-size 4-mapiframe 5-img1 6-img2 7-img3 8-img4

// FOR BIG BOARD
const bigBoardInfo = {one:["Adamawa","YOLA, Mohammed Mustapha Way by Gate 4 Ultra Modern Market", "PORTRAIT", "7M X 3.9M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63009.60716210091!2d12.425935800467446!3d9.235313503478906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10fc6b286fd7b635%3A0xd9ef668469028f23!2sMohammed%20mustapha!5e0!3m2!1sen!2sng!4v1719811326100!5m2!1sen!2sng", 
    "big/1a.png","big/1b.png","big/2a.png","big/2b.png"
],
two: ["BAUCHI","BAUCHI, Murtala Mohammed Way Beefore Abubakar Tafawa Balewa Stadium ftt Wunti Market (Close & Far Range)", "UNIPOLE", "4.4M X 12.4M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7850.730553601027!2d9.82371067770996!3d10.312623699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1054d76ff4ccecc1%3A0x375f4a13611425d4!2sWunti%20market!5e0!3m2!1sen!2sng!4v1719705373900!5m2!1sen!2sng", 
    "big/3a.png","big/3b.png","big/4a.png","big/4b.png"
],
three:["Benue","MAKURDI, Ankpa Road by Dominic Oneya Road Junction ftf Ultra Modern Market (Close & Far Range)", "PORTRAIT", "7.4M X 4.8M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.8587139857027!2d8.559988373293315!3d7.698307608401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105a7fcdd6575d8d%3A0x50d38fb677a1ccc6!2sUltra%20Modern%20International%20Market!5e0!3m2!1sen!2sng!4v1719705689733!5m2!1sen!2sng", 
    "big/5a.jpg","big/5b.jpg","big/6a.png","big/6b.png"
],

four:["Benue","MAKURDI, Atiku Abubakar Road Before Federal Medical Centre (Close & Far Range)", "PORTRAIT", "7.4M X 4.8M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.461687390484!2d8.513081273989286!3d7.740753492277819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105080584b2adba7%3A0x7fa317457fa43737!2sFederal%20Medical%20Centre!5e0!3m2!1sen!2sng!4v1719705893373!5m2!1sen!2sng", 
    "big/7a.jpg","big/7b.jpg","big/8a.jpg","big/8b.jpg"
],

five:["Borno","MAIDUGURI, Baga Road Before Fish Market ftf Fish Market (Close & Far Range)", "PORTRAIT", "11.9M X 8.9M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.520598053874!2d13.121667374055683!3d11.868793238354346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1104998ba1669491%3A0xf6e4d2536b944031!2sBaga%20road%20market!5e0!3m2!1sen!2sng!4v1719706138495!5m2!1sen!2sng", 
    "big/9a.png","big/9b.png","big/10a.png","big/10b.png"
],

six:["Borno","MAIDUGURI, Kano Road by Cross Mai-Doki Roundabout ftf Monday Market (Close & Far Range)", "PORTRAIT", "7.4M X 4.8M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62472.33025474281!2d13.083042212030248!3d11.86879024522995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11049f40d1555555%3A0x7a7c8937052c24f8!2sMonday%20Market!5e0!3m2!1sen!2sng!4v1719706300482!5m2!1sen!2sng", 
    "big/10ba.png","big/10bb.png","big/11a.png","big/11b.png"
],

seven:["Borno","MAIDUGURI, Kano Road by Madoyi Filling Station(Close & Far Range)", "PORTRAIT", "11.9M X 8.9M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3905.435334057167!2d13.142287574054453!3d11.804753688413548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11049fa125f49e5f%3A0x2ce9f7525c4395bc!2sKano%20Rd%2C%20Maiduguri%20600282%2C%20Borno!5e0!3m2!1sen!2sng!4v1719706485772!5m2!1sen!2sng", 
    "big/12a.jpg","big/12b.jpg","big/13a.jpg","big/13b.jpg"
],
eight:["Borno","MAIDUGURI, Kano Road by Bulunkutu Area ftt Monday Market (Close & Far Range)", "PORTRAIT", "9.8M X 4.8M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31241.656604591186!2d13.129714095794121!3d11.820765807497377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11049f40d1555555%3A0x7a7c8937052c24f8!2sMonday%20Market!5e0!3m2!1sen!2sng!4v1719706759162!5m2!1sen!2sng", 
    "big/14a.png","big/14b.png","big/15a.jpg","big/15b.jpg"
],
nine:["Borno","MAIDUGURI, Maiduguri/Damaturu Expressway Opposite State University ftt Damaturu  (Close & Far Range)", "PORTRAIT", "11.9M X 8.9M",
    "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15625.24556798375!2d11.978510227029599!3d11.743099223524469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sMAIDUGURI%2C%20Maiduguri%2FDamaturu%20State%20University%20ftt%20Damaturu%20!5e0!3m2!1sen!2sng!4v1719706960068!5m2!1sen!2sng", 
    "big/16a.png","big/16b.png","big/17a.png","big/17b.png"
],
ten:["Kano","KANO, Ashton Road by Airport Gate ftf Aminu Kano International Airport   (Close & Far Range)", "UNIPOLE", "4.7M X 14.6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26249.21210915303!2d8.508110556225596!3d12.045672804353526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae8724520e9031%3A0xd76a58b670139cda!2sMallam%20Aminu%20Kano%20International%20Airport%20(KAN)!5e0!3m2!1sen!2sng!4v1719707131063!5m2!1sen!2sng", 
    "big/18a.jpg","big/18b.png","big/19a.jpg","big/19b.jpg"
],

eleven:["Kano","KANO, Ashton Road by Airport Gate ftf Aminu Kano International Airport   (Close & Far Range)", "Gantry", "4M X 24.7M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26249.21210915303!2d8.508110556225596!3d12.045672804353526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae8724520e9031%3A0xd76a58b670139cda!2sMallam%20Aminu%20Kano%20International%20Airport%20(KAN)!5e0!3m2!1sen!2sng!4v1719707131063!5m2!1sen!2sng", 
    "big/20a.jpg","big/20b.jpg","big/21a.jpg","big/21b.jpg"
],
twelve:["Kano","KANO, France Road by Sabo Gari Market    (Close & Far Range)", "Gantry", "4M X 19.8M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.4240022567424!2d8.532091174058477!3d12.014303988219963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae8123c1a19a49%3A0x1433a0103943233!2sFrance%20Road%2C%20Kano%20700211%2C%20Kano!5e0!3m2!1sen!2sng!4v1719707334667!5m2!1sen!2sng", 
    "big/22a.jpg","big/22b.jpg","big/23a.jpg","big/23b.jpg"
],
thirteen:["Kano","KANO, KANO, France Road by Sabo Gari Police Post (Close & Far Range)", "Wall Drape", "4M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.4240022567424!2d8.532091174058477!3d12.014303988219963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae8123c1a19a49%3A0x1433a0103943233!2sFrance%20Road%2C%20Kano%20700211%2C%20Kano!5e0!3m2!1sen!2sng!4v1719707334667!5m2!1sen!2sng", 
    "big/24a.jpg","big/24b.jpg","big/24a.jpg","big/24b.jpg"
],
fourteen:["Kano","KANO, Kofar Ruwa Roundabout by Kofar Ruwa Market  (Close & Far Range)", "ROUNDABOUT PANEL", "2.IM X 19.9M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7804.538898763207!2d8.492119587540454!3d12.024961802840389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae80b763ea2ab7%3A0x9846e2b0fbf3c1bb!2sKofar%20Ruwa%20Market!5e0!3m2!1sen!2sng!4v1719708025556!5m2!1sen!2sng", 
    "big/25a.png","big/25b.png","big/26a.png","big/26b.png"
],
fifteen:["Kano","KANO, Ashton Road by Airport Gate ftf Aminu Kano International Airport   (Close & Far Range)", "96 SHEET", "2.9M X 11.6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26249.21210915303!2d8.508110556225596!3d12.045672804353526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae8724520e9031%3A0xd76a58b670139cda!2sMallam%20Aminu%20Kano%20International%20Airport%20(KAN)!5e0!3m2!1sen!2sng!4v1719707131063!5m2!1sen!2sng", 
    "big/27a.jpg","big/27b.jpg","big/28a.jpg","big/28b.jpg"
],
sixteen:["Kano","KANO, Audu Bako Way by Railway Crossing (Close & Far Range)", "PORTRAIT", "7.4M X 4.8M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62436.31470423899!2d8.456069190025762!3d12.024946663744618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae811006f2a0c3%3A0x7d5300b9b72a52b7!2sKano!5e0!3m2!1sen!2sng!4v1719708349392!5m2!1sen!2sng", 
    "big/29a.jpg","big/29b.jpg","big/30a.jpg","big/30b.jpg"
],
seventeen:["Kano","KANO, BUK Road by Kofar Famfo Junction  (Close & Far Range)", "PORTRAIT", "7.4M X 4.8M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.9409399049264!2d8.482568474057791!3d11.978588588252908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae80786cb35f4b%3A0x834397f0afccec3a!2sKofar%20Famfo!5e0!3m2!1sen!2sng!4v1719708500608!5m2!1sen!2sng", 
    "big/31a.png","big/31b.png","big/32a.png","big/32b.png"
],
eighteen:["Kano","Ibrahim Taiwo Road, Opp Singer Market    (Close & Far Range)", "PORTRAIT", "6.9M X 3.9M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.613987883333!2d8.53148377405825!3d12.001189988232065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae8104985d7a31%3A0x4031fbc692beba8!2sIbrahim%20Taiwo%20Rd%2C%20Kano!5e0!3m2!1sen!2sng!4v1719708655485!5m2!1sen!2sng", 
    "big/33a.png","big/33b.png","big/34a.png","big/34b.png"
],
nineteen:["Kano","Hadejia Road by Ahmadu Bello Way Roundabout ftt Yankaba Market    (Close & Far Range)", "PORTRAIT", "7.4M X 4.8M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62439.66521246573!2d8.515888554907233!3d12.01050392029002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae83e79076a817%3A0x5a7ced73f898f96e!2sYankaba%20Market%2C%20Kano!5e0!3m2!1sen!2sng!4v1719708829072!5m2!1sen!2sng", 
    "big/35a.jpg","big/35b.jpg","big/35a.jpg","big/35b.jpg"
],
twenty:["Kano","Hadejia Road Opposite She-She Department Store ftf Yankaba Market     (Close & Far Range)", "PORTRAIT", "7.4M X 4.8M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62439.66521246573!2d8.515888554907233!3d12.01050392029002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae83e79076a817%3A0x5a7ced73f898f96e!2sYankaba%20Market%2C%20Kano!5e0!3m2!1sen!2sng!4v1719708829072!5m2!1sen!2sng", 
    "big/36a.jpg","big/36b.jpg","big/37a.png","big/37b.png"
],
twentyone:["Kano","Maiduguri Road Before NNPC Mega Station ftf Mariri Park (Close & Far Range)", "UNIPOLE", "4.9M X 14.9M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.157949831215!2d8.589585974057453!3d11.96356398826677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae823e2ea8b7cd%3A0x5fc239aa5bf8d6a7!2sNNPC%20Limited%20Mega%20Station%20Hotoro%2C%20Kano!5e0!3m2!1sen!2sng!4v1719709154286!5m2!1sen!2sng", 
    "big/38a.jpg","big/38b.jpg","big/39a.png","big/39b.png"
],
twentytwo:["Kano","Igbo Road by Main Market  (Close & Far Range)", "EYE CATCHER", "2.9M X 12M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.236177786664!2d8.53519307008686!3d12.027254962146527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae813202d5682f%3A0xbe54fc89f5ad9ad4!2sIbo%20Road%2C%20Sabon%20Gari%2C%20Kano%20700211%2C%20Kano!5e0!3m2!1sen!2sng!4v1719709314184!5m2!1sen!2sng", 
    "big/41a.jpg","big/41b.jpg","big/42a.png","big/42b.png"
],
twentythree:["Kano","Zaria Road by Kano Lines Premises  (Close & Far Range)", "UNIPOLE", "4.7M X 14.6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.236177786664!2d8.53519307008686!3d12.027254962146527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae813202d5682f%3A0xbe54fc89f5ad9ad4!2sIbo%20Road%2C%20Sabon%20Gari%2C%20Kano%20700211%2C%20Kano!5e0!3m2!1sen!2sng!4v1719709314184!5m2!1sen!2sng", 
    "big/45a.png","big/45b.png","big/46a.png","big/46b.png"
],
twentyfour:["Kano","Zaria Road by Federal Government College ftf Zoo Road Shoprite  (Close & Far Range)", "UNIPOLE", "4.7M X 14.6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.9801265743386!2d8.531788424057735!3d11.975876888255385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae81ae66f402b7%3A0x9f8772c8dc265a14!2sShoprite!5e0!3m2!1sen!2sng!4v1719709696151!5m2!1sen!2sng", 
    "big/48a.png","big/48b.png","big/49a.jpg","big/49b.jpg"
],
twentyfive:["Kano","Zaria Road Before Ungwa-Uku Motor Park   (Close & Far Range)", "UNIPOLE", "4.7M X 14.6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7806.448159807748!2d8.549401077709959!3d11.958981800000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae81cc1260a2f5%3A0xfb5f1d5875c11c24!2sUnguwa%20Uku%20Motor%20Park!5e0!3m2!1sen!2sng!4v1719709795583!5m2!1sen!2sng", 
    "big/50a.jpg","big/50b.jpg","big/51a.jpg","big/51b.jpg"
],
twentysix:["Kano","Zaria Road by Sa'adatu Rimi College of Education ftt Yan-Lemu Market (Close & Far Range)", "UNIPOLE", "4.7M X 14.6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.7692924455355!2d8.54736907405668!3d11.921137588305976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ac2a4002a3dca3%3A0x791f861ca13fbd70!2sSa&#39;adatu%20Rimi%20UNIVERSITY%20Of%20Education%2C%20Kano!5e0!3m2!1sen!2sng!4v1719709968119!5m2!1sen!2sng", 
    "big/52a.png","big/52b.png","big/53a.png","big/53b.png"
],
twentyseven:["Kano","Zaria Road by Flyover ftf Kura Market (Close & Far Range)", "BRIDGE PANEL", "2.8M X 29.8M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.4514928452745!2d8.532180274058494!3d12.012407288221729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae8123cb5f0a0b%3A0x856be80c54944e6d!2sYan%20kura%20Market%207hubent%20WhatsApp%20Marketing%20Kano!5e0!3m2!1sen!2sng!4v1719710065361!5m2!1sen!2sng", 
    "big/54a.png","big/54b.png","big/54a.png","big/54b.png"
],
twentyeight:["Kano","Kano Road by Law School Junction ftt Kura Market (Close & Far Range)", "PORTRAIT", "11.9M X 8.9M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.4514928452745!2d8.532180274058494!3d12.012407288221729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae8123cb5f0a0b%3A0x856be80c54944e6d!2sYan%20kura%20Market%207hubent%20WhatsApp%20Marketing%20Kano!5e0!3m2!1sen!2sng!4v1719710065361!5m2!1sen!2sng", 
    "big/55a.jpg","big/55b.jpg","big/56a.png","big/56b.png"
],
twentynine:["Kano","Aminu Kano Way by Gidan Mallam Junction  (Close & Far Range)", "ROOFTOP", "3.6M X 11M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31219.92712457693!2d8.477977896031383!3d12.00968854632799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae80919a7c262f%3A0xa513135b8d80c2a6!2sAminu%20Kano%20Way%2C%20Kano!5e0!3m2!1sen!2sng!4v1719710288368!5m2!1sen!2sng", 
    "big/57a.png","big/57b.png", "big/57a.png","big/57b.png"
],
thirty:["Kano","IBB Way by Kofar Mazugal Junction ftf Abattoir Market (Close & Far Range)", "ROOFTOP", "3.6M X 11M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15609.679349789643!2d8.507591732750457!3d12.014591311512751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae80dcc7e48e47%3A0x41fcfbab20ba7e2b!2sKofar%20Mazugal%2C%20Kano!5e0!3m2!1sen!2sng!4v1719710429755!5m2!1sen!2sng", 
    "big/57a.png","big/57b.png","big/58a.png","big/58b.png"
],
thirtyone:["Kano","IBB Way by Kofar Mazugal Junction ftf Abattoir Market (Close & Far Range)", "ROOFTOP", "3.6M X 11M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15609.679349789643!2d8.507591732750457!3d12.014591311512751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae80dcc7e48e47%3A0x41fcfbab20ba7e2b!2sKofar%20Mazugal%2C%20Kano!5e0!3m2!1sen!2sng!4v1719710429755!5m2!1sen!2sng", 
    "big/58a.png","big/58b.png","big/58a.png","big/58b.png"
],
thirtytwo:["Kano","Murtala Mohammed Way by Abubakar Rimi Market (Close & Far Range)", "ROOFTOP", "4.1M X 12.7M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.4745450017986!2d8.533433374058436!3d12.010816588223168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae81225001eb4b%3A0xad122b55f603cea2!2sMuhammad%20Abubakar%20Rimi%20Market!5e0!3m2!1sen!2sng!4v1719710676840!5m2!1sen!2sng", 
    "big/59a.jpg","big/59b.jpg","big/60a.jpg","big/60b.jpg"
],
thirtythree:["Kano","Murtala Mohammed Way by Bata Building ftt Singer Market (Close & Far Range)", "ROOFTOP", "3.6M X 11M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.506923197313!2d8.532406988854985!3d12.008582000000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae81aae52561df%3A0xb996a21048f77903!2sSinger%20Market%20Gidan%20Dan%20Mafara!5e0!3m2!1sen!2sng!4v1719710763368!5m2!1sen!2sng", 
    "big/61a.png","big/61b.png","big/62a.png","big/62b.png"
],
thirtyfour:["Kano","Igbo Road by Sariki Yaki Road Junction ftf Sabo Gari Market (Close & Far Range)", "ROOFTOP", "3.6M X 11M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249815.37172986552!2d8.36760721590271!3d11.949198882329625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ac2ec83f2852bf%3A0x48440feb2c4bec07!2sSarkin%20Yaki%20Ventures!5e0!3m2!1sen!2sng!4v1719710984837!5m2!1sen!2sng", 
    "big/63a.png","big/63b.png","big/63a.png","big/63b.png"
],
thirtyfive:["Kano","Civic Centre Road by Beirut Road Junction ftf GSM Market (Close & Far Range)", "EYE CATCHER", "2M X 11M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249815.37172986552!2d8.36760721590271!3d11.949198882329625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ac2ec83f2852bf%3A0x48440feb2c4bec07!2sSarkin%20Yaki%20Ventures!5e0!3m2!1sen!2sng!4v1719710984837!5m2!1sen!2sng", 
    "big/64a.png","big/64b.png","big/64a.png","big/64b.png"
],
thirtysix:["Kano","Ibrahim Taiwo Road by Beirut Road Junction  (Close & Far Range)", "EYE CATCHER", "2M X 11M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.599975570511!2d8.532040174058276!3d12.00215768823118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae811b96e694bb%3A0x184da91883f55b7a!2sBeirut%20Rd%2C%20Kano%20700211%2C%20Kano!5e0!3m2!1sen!2sng!4v1719711213763!5m2!1sen!2sng", 
    "big/65a.png","big/65b.png","big/66a.png","big/66b.png"
],
thirtyseven:["KATSINA","KATSINA-FUNTUA, Sokoto Road by Govt Day Secondary School   (Close & Far Range)", "PORTRAIT", "11.9M X 8.9M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248806.53606826178!2d7.331444545144662!3d12.997280795680192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11b0232805d2d86d%3A0xe8baf0903507ac8f!2sGovernment%20Day%20Secondary%20School!5e0!3m2!1sen!2sng!4v1719711451378!5m2!1sen!2sng", 
    "big/67a.png","big/67b.png","big/68a.png","big/68b.png"
],
thirtyeight:["KATSINA","IBB Way by PDP Secretariat  (Close & Far Range)", "PORTRAIT", "11.9M X 8.9M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7776.348045722731!2d7.6284815876169!3d12.960713799414421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11b024a3bbd127fb%3A0x5a80ee3db22f781c!2sPDP%20headquater%20Katsina!5e0!3m2!1sen!2sng!4v1719711567108!5m2!1sen!2sng", 
    "big/69a.jpg","big/69b.jpg","big/70a.png","big/70b.png"
],
thirtynine:["KATSINA","Kano Road Opposite Federal Secretariat   (Close & Far Range)", "PORTRAIT", "7.4M X 4.8M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15552.689141496341!2d7.621528783060421!3d12.960825047654113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11b02495ec3b3ead%3A0x6f98860136400bf9!2sFederal%20Secretariat!5e0!3m2!1sen!2sng!4v1719711686866!5m2!1sen!2sng", 
    "big/71a.png","big/71b.png","big/72a.jpg","big/72b.jpg"
],
fourty:["NIGER","MINNA, Suleja Road Before Army Barrack ftt Tungoro Market    (Close & Far Range)", "PORTRAIT", "11.9M X 8.9M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.4250358693553!2d6.5668750740151145!3d9.55857999052543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104c737f8de95ddf%3A0x81ecf96780eb94c2!2sArmy%20Barrack%20Minna!5e0!3m2!1sen!2sng!4v1719711891279!5m2!1sen!2sng", 
    "big/73a.png","big/73b.png","big/74a.jpg","big/74b.jpg"
],
fourtyone:["PLATEAU","JOS, Bukuru Road by Grand Cereal Junction ftt Bukuru Market    (Close & Far Range)", "UNIPOLE", "14.4M X 12.4M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.3469794574353!2d8.890440774020645!3d9.905031790195578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105373baebb7e977%3A0x922ae9bb60ea6c75!2sGrand%20Cereals%20Limited!5e0!3m2!1sen!2sng!4v1719711998451!5m2!1sen!2sng", 
    "big/75a.png","big/75b.png","big/76a.png","big/76b.png"
],
fourtytwo:["PLATEAU","JOS, Farin Gada Road by Unijos Hostel ftt Farin Gada Market     (Close & Far Range)", "LAND SCAPE", "7.4M X 4.8M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.6641855635485!2d8.868965974021533!3d9.96187249014158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1053728285555555%3A0x6246bbdd9cbc490f!2sUNIJOS%20HOSTELS!5e0!3m2!1sen!2sng!4v1719712143957!5m2!1sen!2sng", 
    "big/77a.png","big/77b.png","big/78a.png","big/78b.png"
],
fourtythree:["PLATEAU","JOS, Rwang Paw Township Stadium ftt Terminus Market      (Close & Far Range)", "PORTRAIT", "6.9M X 3.9M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7860.150077628859!2d8.87524617770997!3d9.9277087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1053729083d77a57%3A0xdc0aa72aab71ea4!2sRwang%20Pam%20Township%20Stadium!5e0!3m2!1sen!2sng!4v1719712279522!5m2!1sen!2sng", 
    "big/79a.jpg","big/79b.jpg","big/80a.png","big/80b.png"
],
fourtyfour:["PLATEAU","JOS, Yakubu Gowon Way by Mararaba Roundabout      (Close & Far Range)", "LAND SCAPE", "7.4M X 4.8M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31440.600374690763!2d8.859796332741453!3d9.927708031815307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105373830f5d8e4b%3A0x817c3942468c498c!2sJos%20Terminus%20Roundabout!5e0!3m2!1sen!2sng!4v1719712402268!5m2!1sen!2sng", 
    "big/81a.jpg","big/81b.jpg","big/81a.jpg","big/81b.jpg"
],
fourtyfive:["SOKOTO","SOKOTO, Airport Road Before Airport Junction      (Close & Far Range)", "PORTRAIT", "11.9M X 8.9M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8127710109256!2d5.195433674076952!3d12.919752087390883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11b7d069a1095061%3A0x15b9dc5a65a8c779!2sSokoto%20International%20Airport!5e0!3m2!1sen!2sng!4v1719712563804!5m2!1sen!2sng", 
    "big/82a.jpg","big/82b.jpg","big/83a.jpg","big/83b.jpg"
],
fourtysix:["SOKOTO","SOKOTO, Gusau Road Opposite NEPA Sub-Station (Close & Far Range)", "PORTRAIT", "11.9M X 8.9M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d295863.09050217585!2d5.01576610510355!3d13.013556750407954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11b7c33e70539007%3A0xc4632521a40baa4d!2sOando%20-%20Gusau%20Road%20Service%20Station!5e0!3m2!1sen!2sng!4v1719712653092!5m2!1sen!2sng", 
    "big/84a.jpg","big/84b.jpg","big/85a.png","big/85b.png"
],
fourtyseven:["SOKOTO","SOKOTO, Western Bye pass Road Before Dandima Road Flyover ftt Central Market  (Close & Far Range)", "PORTRAIT", "7.4M X 4.8M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.871026204082!2d5.215146074079596!3d13.043880487278168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11b7dcb088bd88ab%3A0x4db5d67ff4b91c!2sSokoto%20Bye%20Pass%2C%20Sokoto!5e0!3m2!1sen!2sng!4v1719712784836!5m2!1sen!2sng", 
    "big/86a.png","big/86b.png","big/87a.png","big/87b.png"
],
fourtyeight:["SOKOTO","SOKOTO, Maiduguri Road by Usman Dan-Fodio Teaching Hospital Roundabout  (Close & Far Range)", "PORTRAIT", "11.9M X 8.9M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.0911185311033!2d5.261956674083352!3d13.219595687119012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11b7ef293fffffff%3A0xc7aaac1e539b173f!2sUsman%20Danfodio%20Teaching%20Hospital%20Comprehensive%20Health%20Centre!5e0!3m2!1sen!2sng!4v1719713044372!5m2!1sen!2sng", 
    "big/88a.jpg","big/88b.jpg","big/89a.jpg","big/89b.jpg"
],
fourtynine:["SOKOTO", "Kano Road by Ali Akilu Road Roundabout  (Close & Far Range)", "PORTRAIT", "7.4M X 4.8M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31095.599084077137!2d5.249248897388982!3d13.03886193606993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11b7c3940e2688e7%3A0x78924b13d1aea1c6!2sAli%20Akilu%20Rd%2C%20Kware%2C%20Sokoto!5e0!3m2!1sen!2sng!4v1719713247588!5m2!1sen!2sng", 
    "big/90a.jpg","big/90b.jpg","big/91a.jpg","big/91b.jpg"
],
fifty:["SOKOTO", "SOKOTO-IIIELA, Ikorodu-Lagos Road ftt IIIela Town ftt Central Market (Close & Far Range)", "PORTRAIT", "78.8M X 5.8M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62180.00808255148!2d5.22771281846373!3d13.083304008340914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11b7c257d3d5044d%3A0x5d56d416db2582df!2sTotalEnergies%20Illela%20Road%202%20Service%20Station%20Sokoto!5e0!3m2!1sen!2sng!4v1719713389028!5m2!1sen!2sng", 
    "big/92a.jpg","big/92b.jpg","big/92a.jpg","big/92b.jpg"
],
fiftyone:["TARABA", "JALINGO, Hammaurwa Way by Old Taraba State Transport Co-operation ftt Vegetable Market (Close & Far Range)", "LAND SCAPE", "7.4M X 4.8M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126112.16826782121!2d11.270699800804358!3d8.971661311573273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10f92a0b981f9447%3A0x652ba919985b5313!2sTSTC%20Office!5e0!3m2!1sen!2sng!4v1719713593126!5m2!1sen!2sng", 
    "big/93a.jpg","big/93b.jpg","big/94a.jpg","big/94b.jpg"
],

fiftytwo:["Kano", "MARKET GATE;Sabon Gari Market by France road facing inside the market","GATE","1.5M x 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.4115315702225!2d8.539896299999999!3d12.015164299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae813ff6be46d7%3A0x473eea1c5d3e42e1!2sSabon%20Gari%20Market!5e0!3m2!1sen!2sng!4v1752112562014!5m2!1sen!2sng",
    "big/93a.jpg","big/95.jpg","big/95a.jpg","big/95a.jpg", 
],

fiftythree:["KADUNA", "Kaduna, Kachia Road by Kalapazine Barracks(Close & Far Range)","LAND SCAPE", "7.4M X 4.8M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125552.11111912975!2d7.276800043359381!3d10.460918899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104d35925ce1e44b%3A0xea1ad5638bd3f2da!2sKalapanzi%20Barrack%20Nigerian%20Army!5e0!3m2!1sen!2sng!4v1752113718838!5m2!1sen!2sng",
    "big/96a.png","big/96b.png", 
],
fiftyfour:["KADUNA","Ahmadu Bello Way by Bamaiyi OR Letco Building (Close & Far Range)","ROOF-TOP", "4.1M X 12.7M" ,
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15691.361079074466!2d7.412540993340421!3d10.513244164881952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104d355c4c3867a3%3A0x410402e61f4ca195!2sLetco%20Building%2C%20Ahmadu%20Bello%20Way%2C%20Kakuri%2C%20Kaduna%20800283%2C%20Kaduna!5e0!3m2!1sen!2sng!4v1752114359300!5m2!1sen!2sng",
    "big/97a.png","big/97b.png", 
],
fiftyfive:["KADUNA","Ahmadu Bello Way by AJ Suleiman Building (Close & Far Range)","ROOF-TOP", "4.1M X 14.4M" ,
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.856980793099!2d7.427944473790676!3d10.511928864019266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b9db0cecc4f%3A0x14e12b8375503232!2sA%20J%20Suleiman%20%26%20Sons%20Nig%20Ltd!5e0!3m2!1sen!2sng!4v1752114482540!5m2!1sen!2sng",
    "big/98a.png","big/98b.png", 
],
fiftysix:["KADUNA","Nnmadi Azikiwe Bye Pass by Askiloye Junction (Close & Far Range)","ROOF-TOP", "3.6M X 11M" ,
   "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105535.85318565664!2d7.297666926646749!3d10.579202695053132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11b2cbe9b63d9fa1%3A0x912cab3eb3f2b697!2sNnamdi%20Azikiwe%20Way%2C%20Industrial%20Area!5e0!3m2!1sen!2sng!4v1752114688492!5m2!1sen!2sng",
    "big/99a.jpg","big/99b.jpg", 
],

fiftyseven:["KANO","Katsina Road by Kofar Ruwa Junction ftt Kofar Ruwa Market ","UNIPOLE", "3.6M X 11M" ,
   "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.2439280322915!2d8.494778310010876!3d12.026720834841262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae80b164c5a273%3A0xa1b3c29ea4080e80!2sKofar%20Ruwa%20Mkt%2C%20Kofar%20Danwawu%2C%20Kano%20700252%2C%20Kano!5e0!3m2!1sen!2sng!4v1758711329717!5m2!1sen!2sng",
    "big/100a.jpg","big/100b.jpg", 
],

fiftyeight:["KANO","Along France Road by Galadima Road Junction(Close & Far Range)","ROOF-TOP", "4.2M X 12.8M" ,
   "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.511918944471!2d7.438411709991724!3d10.5390552634851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11b2b5f9697deddd%3A0xd3d098f0cd98d3b0!2sWestern%20Union!5e0!3m2!1sen!2sng!4v1758712601388!5m2!1sen!2sng",
    "big/101a.jpg","big/101b.jpg", 
],

fiftynine:["KANO","France road by Kano Pillars Stadium (Close And Far Range).","EYE CATCHER", "3M X 15M" ,
   "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.511918944471!2d7.438411709991724!3d10.5390552634851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11b2b5f9697deddd%3A0xd3d098f0cd98d3b0!2sWestern%20Union!5e0!3m2!1sen!2sng!4v1758712601388!5m2!1sen!2sng",
    "big/102a.jpg","big/102b.jpg","big/102C.png","big/102d.png", 
],
sixty:["KADUNA","Kachia  Road by  Queen Amina College ftt/ftf Railway Market(Close & Far Range)","EYE CATHER", "3M X 15M" ,
   "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.136047312719!2d7.413963739960009!3d10.489939837813514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104d35750ec587cd%3A0xbf3eb22ca9f1a061!2sQueen%20Amina%20College!5e0!3m2!1sen!2sng!4v1758715071885!5m2!1sen!2sng",
    "big/103a.jpg","big/103b.jpg", 
],
}
// -_-__--____-__-_-_______________------------------------______________________----------------------------_______________________---------------------_________________________
// FOR SMALL BOARDS
const smallBoardInfo = {one:["Abuja","Suleja,Abuja Expressway by Madalla Market (Close & Far Range)", "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.453460421996!2d7.214492774008316!3d9.113449690951294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e79bff3d3f1a7%3A0xb169dc8d9488655e!2sMadalla%20Market!5e0!3m2!1sen!2sng!4v1719769466679!5m2!1sen!2sng", 
    "super/1a.jpg","super/1b.jpg"
],
two:["Abuja","Kuja Market Road by Total Filling Station (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.453460421996!2d7.214492774008316!3d9.113449690951294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e79bff3d3f1a7%3A0xb169dc8d9488655e!2sMadalla%20Market!5e0!3m2!1sen!2sng!4v1719769466679!5m2!1sen!2sng", 
    "super/2a.jpg","super/2b.jpg"
],
three:["Abuja","Madalla,Suleja Road by Old Barrack  (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.453460421996!2d7.214492774008316!3d9.113449690951294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e79bff3d3f1a7%3A0xb169dc8d9488655e!2sMadalla%20Market!5e0!3m2!1sen!2sng!4v1719769466679!5m2!1sen!2sng", 
    "super/3a.png","super/3b.png"
],
four:["Abuja","SULEJA, Gwagwalada Market Road by Zenith Bank   (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126094.78652400234!2d7.065487445959119!3d9.021543223236892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e8975b8921609%3A0xf356e885d04402d9!2sBack%20Of%20Gwagwalada%20Market!5e0!3m2!1sen!2sng!4v1719770146913!5m2!1sen!2sng", 
    "super/4a.png","super/4b.png"
],
five:["Yola","Barrack Road by Jamutu Junction    (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63008.781040810456!2d12.412155313764686!3d9.239932407046773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10fc15cf79152283%3A0x532236e4d96d0fff!2sJambutu%20motor%20park%20Yola!5e0!3m2!1sen!2sng!4v1719770244145!5m2!1sen!2sng", 
    "super/5a.jpg","super/5b.jpg"
],
six:["Yola","Galadima Aminu Way by State Polytechnic     (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251948.87246030572!2d12.098457219636247!3d9.359693110242832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10fc6b39cfc939d9%3A0x43683d8bbc6d13ed!2sAdamawa%20State%20Polytechnic%20Yola!5e0!3m2!1sen!2sng!4v1719770328849!5m2!1sen!2sng", 
    "super/6a.jpg","super/6b.jpg"
],
seven:["Yola","Yola Road by Murtala Mohammed College      (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.935489183361!2d12.443623488854984!3d9.250062199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10fc6b4f959f938f%3A0xc50ffed8e5c33d18!2sGeneral%20Murtala%20Mohammed%20College!5e0!3m2!1sen!2sng!4v1719772112781!5m2!1sen!2sng", 
    "super/7a.jpg","super/7b.jpg"
],
eight:["Yola","Galadima Aminu Way by State Polytechnic       (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251948.87246030572!2d12.098457219636247!3d9.359693110242832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10fc6b39cfc939d9%3A0x43683d8bbc6d13ed!2sAdamawa%20State%20Polytechnic%20Yola!5e0!3m2!1sen!2sng!4v1719770328849!5m2!1sen!2sng", 
    "super/8a.jpg","super/8b.jpg"
],
nine:["Yola","Gimba Road Hospital Road Junction (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.7090435954774!2d12.44846237401063!3d9.270270490800996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10fc6b25354028bd%3A0xd8bc3de48abc26d0!2sGimba%20Road%20%26%20Hospital%20Road%2C%20Jimeta%2C%20640101%2C%20Adamawa!5e0!3m2!1sen!2sng!4v1719772415764!5m2!1sen!2sng", 
    "super/9a.jpg","super/9b.jpg"
],
ten:["Yola"," Lamido Aliyu Mustapha Way by Murtala Mohammed College  (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.7090435954774!2d12.44846237401063!3d9.270270490800996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10fc6b25354028bd%3A0xd8bc3de48abc26d0!2sGimba%20Road%20%26%20Hospital%20Road%2C%20Jimeta%2C%20640101%2C%20Adamawa!5e0!3m2!1sen!2sng!4v1719772415764!5m2!1sen!2sng", 
    "super/10a.png","super/10b.png"
],
eleven:["BAUCHI","Ahmadu Bello Way by CBN Roundabout  (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62808.30850773653!2d9.775327954897255!3d10.30026244401606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1054d76ea102cdd3%3A0x5d9db8211237c69f!2sCentral%20Bank%20Of%20Nigeria%20CBN!5e0!3m2!1sen!2sng!4v1719773506670!5m2!1sen!2sng", 
    "super/11a.jpg","super/11b.jpg"
],

twelve:["BAUCHI","Ahmadu Bello Way by CBN  (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62808.30850773653!2d9.775327954897255!3d10.30026244401606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1054d76ea102cdd3%3A0x5d9db8211237c69f!2sCentral%20Bank%20Of%20Nigeria%20CBN!5e0!3m2!1sen!2sng!4v1719773506670!5m2!1sen!2sng", 
    "super/12a.jpg","super/12b.jpg"
],
thirteen:["BAUCHI","Ahmadu Bello Way by Bauchi Club   (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62808.30850773653!2d9.775327954897255!3d10.30026244401606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1054d76ea102cdd3%3A0x5d9db8211237c69f!2sCentral%20Bank%20Of%20Nigeria%20CBN!5e0!3m2!1sen!2sng!4v1719773506670!5m2!1sen!2sng", 
    "super/13a.jpg","super/13b.jpg"
],
fourteen:["BAUCHI","Ahmadu Bello Way by Bauchi Club ftf Wunti Market    (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62808.30850773653!2d9.775327954897255!3d10.30026244401606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1054d76ea102cdd3%3A0x5d9db8211237c69f!2sCentral%20Bank%20Of%20Nigeria%20CBN!5e0!3m2!1sen!2sng!4v1719773506670!5m2!1sen!2sng", 
    "super/14a.jpg","super/14b.jpg"
],
fifteen:["BAUCHI","Murtala Mohammed Way Before Abubakar Tafawa Belawa Stadium (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62808.30954606522!2d9.775327868452234!3d10.30025723206072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1054d7b1c3c4c21f%3A0xeb02b3402a6c18!2sAbubakar%20Tafawa%20Balewa%20Stadium!5e0!3m2!1sen!2sng!4v1719780579668!5m2!1sen!2sng", 
    "super/15a.jpg","super/15b.jpg"
],
sixteen:["BAUCHI","Ahmadu Bello Way Before Abubakar Tafawa Belawa Stadium    (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62808.30954606522!2d9.775327868452234!3d10.30025723206072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1054d7b1c3c4c21f%3A0xeb02b3402a6c18!2sAbubakar%20Tafawa%20Balewa%20Stadium!5e0!3m2!1sen!2sng!4v1719780579668!5m2!1sen!2sng", 
    "super/16a.jpg","super/16b.jpg"
],
// Start mapping from here
seventeen:["BENUE","MAKURDI, Ankpa Road Opposite Bank of Industry    (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.576663546139!2d8.553344273989136!3d7.72848529228976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10508196ef175721%3A0xbc3c8568e0d3bf23!2sBenue%20State%20University%2C%20Makurdi!5e0!3m2!1sen!2sng!4v1719781082414!5m2!1sen!2sng", 
    "super/17a.png","super/17b.png"
],
eighteen:["BENUE","MAKURDI, Gboko Road by Beune State University     (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.576663546139!2d8.553344273989136!3d7.72848529228976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10508196ef175721%3A0xbc3c8568e0d3bf23!2sBenue%20State%20University%2C%20Makurdi!5e0!3m2!1sen!2sng!4v1719781082414!5m2!1sen!2sng", 
    "super/18a.png","super/18b.png"
],
nineteen:["BENUE","MAKURDI, Wadata Market      (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62808.30954606522!2d9.775327868452234!3d10.30025723206072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1054d7b1c3c4c21f%3A0xeb02b3402a6c18!2sAbubakar%20Tafawa%20Balewa%20Stadium!5e0!3m2!1sen!2sng!4v1719780579668!5m2!1sen!2sng", 
    "super/19a.jpg","super/19b.jpg"
],
twenty:["BORNO","MAIDUGURI, Baga Road Opposite Maimalari Barrack   (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62469.429517560995!2d13.096653762354212!3d11.88144216552731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1104a1adc76f53b9%3A0x724ae4bd6d829bb7!2sArmy%20Barracks!5e0!3m2!1sen!2sng!4v1719781291991!5m2!1sen!2sng", 
    "super/20a.png","super/20b.png"
],
twentyone:["BORNO","MAIDUGURI, Kano Road by Tasha Journey   (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31240.864172273934!2d13.114010845802772!3d11.827707707086383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11049ee509e2f4c5%3A0xdea2b50680105e1!2sTashan%20Kano!5e0!3m2!1sen!2sng!4v1719781344070!5m2!1sen!2sng", 
    "super/21a.png","super/20b.png"
],
twentytwo:["BORNO","MAIDUGURI, Kano  Road by Tashar Journey   (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31240.864172273934!2d13.114010845802772!3d11.827707707086383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11049ee509e2f4c5%3A0xdea2b50680105e1!2sTashan%20Kano!5e0!3m2!1sen!2sng!4v1719781344070!5m2!1sen!2sng", 
    "super/22a.jpg","super/22b.jpg"
],
twentythree:["BORNO","MAIDUGURI, Kano Road by Ramat Polytechnic    (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31241.64762339271!2d13.117923995794206!3d11.82084450749271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11049fa2c9610afb%3A0xc69f1f2e6e8a71e6!2sRamat%20polytechnic%20Maiduguri!5e0!3m2!1sen!2sng!4v1719781533030!5m2!1sen!2sng", 
    "super/23a.jpg","super/23b.jpg"
],
twentyfour:["BORNO","MAIDUGURI, Lagos Street Opposite Lagos House     (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62479.43341245146!2d13.104464612134075!3d11.837752675868447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11049f6323e2e367%3A0xc626fb8f7898cf76!2sLagos%20Street!5e0!3m2!1sen!2sng!4v1719781628535!5m2!1sen!2sng", 
    "super/24a.png","super/24b.png"
],
twentyfive:["BORNO","MAIDUGURI, Shehu Laminu Way Opposite Polaris Bank    (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.9395316529954!2d13.146162374055042!3d11.839506588381408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11049f38f8115975%3A0x2b4cb082b63317a0!2sPolaris%20Bank%20Limited%20-%20Maiduguri!5e0!3m2!1sen!2sng!4v1719781830279!5m2!1sen!2sng", 
    "super/25a.png","super/25b.png"
],

twentysix:["JIGAWA","DUTSE, Kigawa Road by Central Motor Park   (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3906.321396547722!2d9.377427274053185!3d11.74239328847127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11abe56a13a59ab7%3A0xf3d8e0b48cd3ffd4!2sDutse%20New%20Motor%20Park!5e0!3m2!1sen!2sng!4v1719781725575!5m2!1sen!2sng", 
    "super/26a.png","super/26b.png"
],
twentyseven:["JIGAWA","DUTSE, Kigawa Road by General Hospital    (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3895.5572091160907!2d10.054742774067794!3d12.479181687792774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11a9af5848727b4f%3A0x8beb118835348a4!2sJigawa%20State%20Specialist%20Hospital!5e0!3m2!1sen!2sng!4v1719781982423!5m2!1sen!2sng", 
    "super/27a.png","super/27b.png"
],
twentyeight:["JIGAWA","DUTSE, Bank Road by FCMB ftf Govt Roundabout    (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7813.665098088818!2d9.342359487515635!3d11.706269804018797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11abf0488eb9cf11%3A0x62a4ccf473891fd5!2sFCMB%20-%20Dutse!5e0!3m2!1sen!2sng!4v1719782047135!5m2!1sen!2sng", 
    "super/28a.png","super/28b.png"
],
twentynine:["JIGAWA","DUTSE, Gajambe Road Opposite B.A Bello Filling Station ftt Central Market (Yelwawa) ftf Pharmacy    (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125013.79659767656!2d9.286433544250537!3d11.716981167174476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11abf1cc09ae1399%3A0xdc69c377de1381ba!2sGajambe%20Plaza!5e0!3m2!1sen!2sng!4v1719782131601!5m2!1sen!2sng", 
    "super/29a.jpg","super/29b.jpg"
],

thirty:["JIGAWA","DUTSE, Gajambe Road Opposite B.A Bello Filling Station ftt Central Market (Yelwawa) ftf Pharmacy    (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125013.79659767656!2d9.286433544250537!3d11.716981167174476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11abf1cc09ae1399%3A0xdc69c377de1381ba!2sGajambe%20Plaza!5e0!3m2!1sen!2sng!4v1719782131601!5m2!1sen!2sng", 
     "super/30a.jpg","super/30b.jpg"
],
thirtyone:["JIGAWA","DUTSE, Kiyawa Road Opposite CBN     (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125020.97876264184!2d9.25954109392972!3d11.701099232246703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11abf037f9be49bb%3A0x5b814d6b840dbeff!2sCentral%20bank%20of%20Nigeria!5e0!3m2!1sen!2sng!4v1719782221328!5m2!1sen!2sng", 
    "super/31a.png","super/31b.png"
],

thirtytwo:["GOMBE","Bauchi Road Opposite NNPC Depot (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.625790532651!2d11.11230057402701!3d10.291704889829084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10ffdb00730172e9%3A0x4d8091243c0fb79c!2sNNPC%20Depot!5e0!3m2!1sen!2sng!4v1719782466527!5m2!1sen!2sng", 
    "super/32a.jpg","super/32b.jpg"
],

thirtythree:["GOMBE","Bauchi Road Opposite NNPC Depot (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.625790532651!2d11.11230057402701!3d10.291704889829084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10ffdb00730172e9%3A0x4d8091243c0fb79c!2sNNPC%20Depot!5e0!3m2!1sen!2sng!4v1719782466527!5m2!1sen!2sng", 
    "super/33a.png","super/33b.png"
],
thirtyfour:["GOMBE","Biu Road After Divisional Police Head Quarters (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.063148365334!2d11.715345569916698!3d10.416559466971794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10ffd1bd56aaf32d%3A0xe5cdad07445e824b!2sGombe%20-%20Biu%20Rd!5e0!3m2!1sen!2sng!4v1719782599383!5m2!1sen!2sng", 
    "super/34a.jpg","super/34b.jpg"
],
thirtyfive:["GOMBE","Bye Pass Road by Pantami Market  (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.8380559375587!2d11.16503167402678!3d10.274629189845284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10ffd0714daf7d9b%3A0x3ff6cfad28977da1!2sPantami%20Market!5e0!3m2!1sen!2sng!4v1719782843320!5m2!1sen!2sng", 
    "super/35a.png","super/35b.png"
],
thirtysix:["GOMBE","Dukku Road Opposite NNPC Mega Filling Station   (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.407583622397!2d11.144964274027306!3d10.309229389812527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10ffd896f4715a2b%3A0xcaafa0ece4a053a4!2sDukku%20Road%2C%20Gombe!5e0!3m2!1sen!2sng!4v1719782956057!5m2!1sen!2sng", 
    "super/36a.png","super/36b.png"
],
thirtyseven:["GOMBE","PZ Road Before Market    (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62806.52186003496!2d11.106339104674522!3d10.30922677147186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10ffd1b354d2924f%3A0xcafd7b0ae76781a7!2sPZ%20Gombe%20Deport!5e0!3m2!1sen!2sng!4v1719783075668!5m2!1sen!2sng", 
    "super/37a.png","super/37b.png"
],
thirtyeight:["KOGI","LOKOJA, Along Lagos/Benin Road by Ibillo Junction (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.2709459205803!2d7.551941873982781!3d7.209900292795739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10453b31a0aa7d2f%3A0x9430ab6f885c3831!2sJunction!5e0!3m2!1sen!2sng!4v1719783156410!5m2!1sen!2sng", 
    "super/38a.png","super/38b.png"
],
thirtynine:["KOGI","LOKOJA, Ankpa Market Road  (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1012716.7807711832!2d6.633450999400317!3d7.473542916847152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1045772a67dd8efd%3A0xbf32e86506e9e7fb!2sMarket!5e0!3m2!1sen!2sng!4v1719783237722!5m2!1sen!2sng", 
    "super/39a.png","super/39b.png"
],
fourty:["KOGI","LOKOJA, Ankpa Market Road  (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1012716.7807711832!2d6.633450999400317!3d7.473542916847152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1045772a67dd8efd%3A0xbf32e86506e9e7fb!2sMarket!5e0!3m2!1sen!2sng!4v1719783237722!5m2!1sen!2sng", 
    "super/40a.png","super/40b.png"
],
fourtyone:["KOGI","Ayingba Market Road Roundabout   (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1012716.7807711832!2d6.633450999400317!3d7.473542916847152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1045772a67dd8efd%3A0xbf32e86506e9e7fb!2sMarket!5e0!3m2!1sen!2sng!4v1719783237722!5m2!1sen!2sng", 
    "super/41a.png","super/41b.png"
],
fourtytwo:["KANO","Audu Bako Way by Central Hotel Roundabout    (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3902.7299517828046!2d8.54227987405808!3d11.993178488239446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1skano%20central%20hotel!5e0!3m2!1sen!2sng!4v1719783462346!5m2!1sen!2sng", 
    "super/42a.jpg","super/42b.jpg"
],
fourtythree:["KANO","Airport Road by Immigration Office     (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62441.70218804504!2d8.509205012964314!3d12.001714937095134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae81bcd6154801%3A0x8f4b1eb55a9d7d23!2sKano%20Immigration%20office!5e0!3m2!1sen!2sng!4v1719783556185!5m2!1sen!2sng", 
    "super/43a.jpg","super/43b.jpg"
],
fourtyfour:["KANO","Bello Road by Singer Market Junction     (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.5246705573404!2d8.534057574058355!3d12.007356988226373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae8118ffca3f5b%3A0x586c83af684c9940!2sE%20Bello%20Rd%2C%20Fagge%2C%20Kano%20700211%2C%20Kano!5e0!3m2!1sen!2sng!4v1719783651706!5m2!1sen!2sng", 
    "super/44a.jpg","super/44b.png"
],
fourtyfive:["KANO","Bello Road by Singer Market Junction ftt Market      (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.5246705573404!2d8.534057574058355!3d12.007356988226373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae8118ffca3f5b%3A0x586c83af684c9940!2sE%20Bello%20Rd%2C%20Fagge%2C%20Kano%20700211%2C%20Kano!5e0!3m2!1sen!2sng!4v1719783651706!5m2!1sen!2sng", 
    "super/45a.jpg","super/45b.png"
],
fourtysix:["KANO","BUK Road by Sharada Junction    (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.8725847335177!2d8.503885274057891!3d11.983317288248548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae805e21b129f9%3A0x804dd12bc19838b1!2sBUK%20Road%2C%20Kano!5e0!3m2!1sen!2sng!4v1719783777539!5m2!1sen!2sng", 
    "super/46a.jpg","super/46b.jpg"
],
fourtyseven:["KANO","Gwrazo Road Before BUK New Campus     (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.967562416434!2d8.454648474057763!3d11.976746388254622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae7fd4f3464119%3A0x9e7d73fa2320360f!2sGwarzo%20Rd%2C%20Kano!5e0!3m2!1sen!2sng!4v1719783832498!5m2!1sen!2sng", 
    "super/47a.jpg","super/47b.jpg"
],
fourtyeight:["KANO","BUK Road by Matrix Filling Station     (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.967562416434!2d8.454648474057763!3d11.976746388254622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae7fd4f3464119%3A0x9e7d73fa2320360f!2sGwarzo%20Rd%2C%20Kano!5e0!3m2!1sen!2sng!4v1719783832498!5m2!1sen!2sng", 
    "super/48a.jpg","super/48b.jpg"
],
fourtynine:["KANO","Civic Centre Road by Bank Road Roundabout      (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4032811.0337400655!2d3.3420033490711223!3d9.2181554764871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae81bcc8bd4d49%3A0x5c22fd3b9b41f0c2!2sCivic%20Centre%20Ultra-Modern%20Market!5e0!3m2!1sen!2sng!4v1719783962738!5m2!1sen!2sng", 
    "super/49a.png","super/49b.png"
],
fifty:["KANO","Independent Road by Dakata Bus Stop     (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.3354154235376!2d8.558671974058662!3d12.020413988214324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae815001b0229f%3A0x52351033597173b!2sIndependence%20Rd%2C%20Kano%20700213%2C%20Kano!5e0!3m2!1sen!2sng!4v1719784068594!5m2!1sen!2sng", 
    "super/50a.jpg","super/50b.jpg"
],
fiftyone:["KANO","France Road Ibadan Road Junction   (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.424002256743!2d8.53209117405849!3d12.014303988219954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae8123c1a19a49%3A0x1433a0103943233!2sFrance%20Road%2C%20Kano%20700211%2C%20Kano!5e0!3m2!1sen!2sng!4v1719784156386!5m2!1sen!2sng", 
    "super/51a.jpg","super/51b.jpg"
],
fiftytwo:["KANO","Igbo Road by Emir Road Junction  (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.3772350985596!2d8.533643474058527!3d12.017529988216955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae81245a2381fb%3A0x3131a970be79b5a8!2sEmir%20Rd%2C%20Sabon%20Gari%2C%20Kano%20700211%2C%20Kano!5e0!3m2!1sen!2sng!4v1719784224830!5m2!1sen!2sng", 
    "super/51a.jpg","super/52b.png"
],
fiftythree:["KANO","Igbo Road by Emir Road Junction  (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.3772350985596!2d8.533643474058527!3d12.017529988216955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae81245a2381fb%3A0x3131a970be79b5a8!2sEmir%20Rd%2C%20Sabon%20Gari%2C%20Kano%20700211%2C%20Kano!5e0!3m2!1sen!2sng!4v1719784224830!5m2!1sen!2sng", 
    "super/53a.jpg","super/53b.jpg"
],
fiftyfour:["KANO","Murtala Mohammed Way by Formerly Daula Hotel Roundabout   (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.2306289125427!2d8.510804270086956!3d12.027637362145459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae80da4220a73d%3A0xac8a6107da457617!2sMurtala%20Mohammed%20Rd%2C%20Kano!5e0!3m2!1sen!2sng!4v1719784346987!5m2!1sen!2sng", 
    "super/54a.jpg","super/54b.jpg"
],
fiftyfive:["KANO","Murtala Mohammed Way by Immigration Office   (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.2306289125427!2d8.510804270086956!3d12.027637362145459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae80da4220a73d%3A0xac8a6107da457617!2sMurtala%20Mohammed%20Rd%2C%20Kano!5e0!3m2!1sen!2sng!4v1719784346987!5m2!1sen!2sng", 
    "super/55a.png","super/55b.png"
],
fiftysix:["KANO","Igbo Road by Emir Road Junction   (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.3772350985596!2d8.533643474058527!3d12.017529988216955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae81245a2381fb%3A0x3131a970be79b5a8!2sEmir%20Rd%2C%20Sabon%20Gari%2C%20Kano%20700211%2C%20Kano!5e0!3m2!1sen!2sng!4v1719784224830!5m2!1sen!2sng", 
    "super/56a.jpg","super/56b.jpg"
],
fiftyseven:["KANO","Igbo Road by Emir Road Junction   (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.3772350985596!2d8.533643474058527!3d12.017529988216955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae81245a2381fb%3A0x3131a970be79b5a8!2sEmir%20Rd%2C%20Sabon%20Gari%2C%20Kano%20700211%2C%20Kano!5e0!3m2!1sen!2sng!4v1719784224830!5m2!1sen!2sng", 
    "super/57a.jpg","super/57b.jpg"
],
fiftyeight:["KANO","Igbo Road by Emir Road Junction   (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.3772350985596!2d8.533643474058527!3d12.017529988216955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae81245a2381fb%3A0x3131a970be79b5a8!2sEmir%20Rd%2C%20Sabon%20Gari%2C%20Kano%20700211%2C%20Kano!5e0!3m2!1sen!2sng!4v1719784224830!5m2!1sen!2sng", 
    "super/58a.png","super/58b.png"
],
fiftynine:["KANO","Hadejia Road by Dakata Junction    (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.512448020486!2d8.54451137008474!3d12.00820066220297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae811606bac383%3A0x9f14a72a5bd4a5ec!2sHadejia%20Rd%2C%20Kano!5e0!3m2!1sen!2sng!4v1719784654659!5m2!1sen!2sng", 
    "super/59a.jpg","super/59b.jpg"
],
sixty:["KANO","Hadejia Road Opposite AA Rano Filling Station    (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.512448020486!2d8.54451137008474!3d12.00820066220297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae811606bac383%3A0x9f14a72a5bd4a5ec!2sHadejia%20Rd%2C%20Kano!5e0!3m2!1sen!2sng!4v1719784654659!5m2!1sen!2sng", 
    "super/60a.jpg","super/60b.jpg"
],
sixtyone:["KANO","Hadejia Road Opposite AG Store and Supermarket    (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.512448020486!2d8.54451137008474!3d12.00820066220297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae811606bac383%3A0x9f14a72a5bd4a5ec!2sHadejia%20Rd%2C%20Kano!5e0!3m2!1sen!2sng!4v1719784654659!5m2!1sen!2sng", 
    "super/61a.png","super/61b.png"
],
sixtytwo:["KANO","Gwarzo Road Before BUK New Campus     (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.967562416434!2d8.454648474057763!3d11.976746388254622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae7fd4f3464119%3A0x9e7d73fa2320360f!2sGwarzo%20Rd%2C%20Kano!5e0!3m2!1sen!2sng!4v1719783832498!5m2!1sen!2sng", 
    "super/62a.jpg","super/62b.jpg"
],
sixtythree:["KANO","Murtala Mohammed Way by Coca-Cola Flyover  (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62457.05463283425!2d8.436400912626501!3d11.935268252796428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11add4d1c1b08557%3A0x9997dddc98691f12!2sCoca%20Cola%20(Nigerian%20Bottling%20Company)%2C%20Kano!5e0!3m2!1sen!2sng!4v1719791046029!5m2!1sen!2sng", 
    "super/63a.jpg","super/63b.jpg"
],
sixtyfour:["KANO","Katsina Road by Dawanu Market  (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124872.3569307732!2d8.420404100568202!3d12.025533575076814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae7dd10057a91b%3A0x18045ef4f8a264df!2sAgric%20allied%20dawanau%20market!5e0!3m2!1sen!2sng!4v1719791125158!5m2!1sen!2sng", 
    "super/64a.jpg","super/64b.jpg"
],
sixtyfive:["KANO","Lamido Road by Giginyu Junction   (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.675795579095!2d8.56098347405816!3d11.996920588235968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae817ad66e8681%3A0x34ff076101f3ae98!2sLamido%20Rd%2C%20Giginyu%2C%20Kano%20700213%2C%20Kano!5e0!3m2!1sen!2sng!4v1719791183461!5m2!1sen!2sng", 
    "super/65a.jpg","super/65b.jpg"
],
sixtysix:["KANO","Lamido Cresent by Giginyu Junction    (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.7554806555117!2d8.56065897405806!3d11.991414088241065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae8179685674d1%3A0x1815a9e9a659ff76!2sLamido%20Cresent%2C%20Giginyu%2C%20Kano%20700213%2C%20Kano!5e0!3m2!1sen!2sng!4v1719791243408!5m2!1sen!2sng", 
    "super/66a.jpg","super/66b.png"
],
sixtyseven:["KANO","Sharada Road by Hisba Office    (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.7554806555117!2d8.56065897405806!3d11.991414088241065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae8179685674d1%3A0x1815a9e9a659ff76!2sLamido%20Cresent%2C%20Giginyu%2C%20Kano%20700213%2C%20Kano!5e0!3m2!1sen!2sng!4v1719791243408!5m2!1sen!2sng", 
    "super/67a.jpg","super/67b.jpg"
],
sixtyeight:["KANO","Sharada Road by Hisba Office (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.7554806555117!2d8.56065897405806!3d11.991414088241065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae8179685674d1%3A0x1815a9e9a659ff76!2sLamido%20Cresent%2C%20Giginyu%2C%20Kano%20700213%2C%20Kano!5e0!3m2!1sen!2sng!4v1719791243408!5m2!1sen!2sng", 
    "super/68a.jpg","super/68b.jpg"
],
sixtynine:["KANO","Maiduguri Road by Coner Sabo Junction (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.161759109549!2d8.58649067405745!3d11.963300088266967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae8189fb1fa741%3A0x3caa5c1b2e80ce2!2sMaiduguri%20Road%2C%20Kano!5e0!3m2!1sen!2sng!4v1719792501407!5m2!1sen!2sng", 
    "super/69a.jpg","super/69b.jpg"
],
seventy:["KANO","Maiduguri Road by Chicken Republic  (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.161759109549!2d8.58649067405745!3d11.963300088266967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae8189fb1fa741%3A0x3caa5c1b2e80ce2!2sMaiduguri%20Road%2C%20Kano!5e0!3m2!1sen!2sng!4v1719792501407!5m2!1sen!2sng", 
    "super/70a.jpg","super/70b.jpg"
],
seventyone:["KANO","KANO,Maiduguri Road by Coner Maggi Junction   (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.161759109549!2d8.58649067405745!3d11.963300088266967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae8189fb1fa741%3A0x3caa5c1b2e80ce2!2sMaiduguri%20Road%2C%20Kano!5e0!3m2!1sen!2sng!4v1719792501407!5m2!1sen!2sng", 
    "super/71a.jpg","super/71b.jpg"
],
seventytwo:["KANO","Murtala Mohammed Way by Coca-Cola Flyover    (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.161759109549!2d8.58649067405745!3d11.963300088266967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae8189fb1fa741%3A0x3caa5c1b2e80ce2!2sMaiduguri%20Road%2C%20Kano!5e0!3m2!1sen!2sng!4v1719792501407!5m2!1sen!2sng", 
    "super/72a.jpg","super/72b.jpg"
],
seventythree:["KANO"," Sharada Road by Hisba Office     (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.161759109549!2d8.58649067405745!3d11.963300088266967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae8189fb1fa741%3A0x3caa5c1b2e80ce2!2sMaiduguri%20Road%2C%20Kano!5e0!3m2!1sen!2sng!4v1719792501407!5m2!1sen!2sng", 
    "super/73a.jpg","super/73b.jpg"
],
seventyfour:["KANO","Murtala Mohammed Way by Daula Hotel Roundabout      (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.161759109549!2d8.58649067405745!3d11.963300088266967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae8189fb1fa741%3A0x3caa5c1b2e80ce2!2sMaiduguri%20Road%2C%20Kano!5e0!3m2!1sen!2sng!4v1719792501407!5m2!1sen!2sng", 
    "super/74a.jpg","super/74b.jpg"
],
seventyfive:["KANO"," Murtala Mohammed  Way by Formerly CFAO      (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.161759109549!2d8.58649067405745!3d11.963300088266967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae8189fb1fa741%3A0x3caa5c1b2e80ce2!2sMaiduguri%20Road%2C%20Kano!5e0!3m2!1sen!2sng!4v1719792501407!5m2!1sen!2sng", 
    "super/75a.jpg","super/75b.jpg"
],
seventysix:["KANO"," Wudil Road Before Govt House       (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.161759109549!2d8.58649067405745!3d11.963300088266967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae8189fb1fa741%3A0x3caa5c1b2e80ce2!2sMaiduguri%20Road%2C%20Kano!5e0!3m2!1sen!2sng!4v1719792501407!5m2!1sen!2sng", 
    "super/76a.jpg","super/76b.jpg"
],
seventyseven:["KANO","Igbo Road by Emir Road Junction (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.161759109549!2d8.58649067405745!3d11.963300088266967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae8189fb1fa741%3A0x3caa5c1b2e80ce2!2sMaiduguri%20Road%2C%20Kano!5e0!3m2!1sen!2sng!4v1719792501407!5m2!1sen!2sng", 
    "super/76a.jpg","super/76b.jpg"
],
seventyeight:["KANO","Hadejia Road Opposite AG Store and Super Market  (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.161759109549!2d8.58649067405745!3d11.963300088266967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae8189fb1fa741%3A0x3caa5c1b2e80ce2!2sMaiduguri%20Road%2C%20Kano!5e0!3m2!1sen!2sng!4v1719792501407!5m2!1sen!2sng", 
    "super/78a.jpg","super/78b.jpg"
],
seventynine:["KANO","Katsina Road by Kofar  Ruwa Junction   (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.161759109549!2d8.58649067405745!3d11.963300088266967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae8189fb1fa741%3A0x3caa5c1b2e80ce2!2sMaiduguri%20Road%2C%20Kano!5e0!3m2!1sen!2sng!4v1719792501407!5m2!1sen!2sng", 
    "super/79a.jpg","super/79b.jpg"
],
eighty:["KANO","Lamido Cresent Road by Giginyu Junction  (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.161759109549!2d8.58649067405745!3d11.963300088266967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae8189fb1fa741%3A0x3caa5c1b2e80ce2!2sMaiduguri%20Road%2C%20Kano!5e0!3m2!1sen!2sng!4v1719792501407!5m2!1sen!2sng", 
    "super/80a.jpg","super/80b.jpg"
],
eightyone:["KANO","Lamido Cresent Road by Giginyu Junction  (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.161759109549!2d8.58649067405745!3d11.963300088266967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae8189fb1fa741%3A0x3caa5c1b2e80ce2!2sMaiduguri%20Road%2C%20Kano!5e0!3m2!1sen!2sng!4v1719792501407!5m2!1sen!2sng", 
    "super/81a.jpg","super/81b.jpg"
],
eightytwo:["KANO","Tudu Wada Road by Gwagwarawa Police Station   (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.161759109549!2d8.58649067405745!3d11.963300088266967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae8189fb1fa741%3A0x3caa5c1b2e80ce2!2sMaiduguri%20Road%2C%20Kano!5e0!3m2!1sen!2sng!4v1719792501407!5m2!1sen!2sng", 
    "super/82a.jpg","super/82b.jpg"
],
eightythree:["KANO","Zoo Road by Shoprite    (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.161759109549!2d8.58649067405745!3d11.963300088266967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae8189fb1fa741%3A0x3caa5c1b2e80ce2!2sMaiduguri%20Road%2C%20Kano!5e0!3m2!1sen!2sng!4v1719792501407!5m2!1sen!2sng", 
    "super/83a.jpg","super/83b.jpg"
],
eightyfour:["KANO","Zungeru Road by Treasured Life Church (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.161759109549!2d8.58649067405745!3d11.963300088266967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae8189fb1fa741%3A0x3caa5c1b2e80ce2!2sMaiduguri%20Road%2C%20Kano!5e0!3m2!1sen!2sng!4v1719792501407!5m2!1sen!2sng", 
    "super/84a.jpg","super/84b.jpg"
],
eightyfive:["KATSINA","IBB Way by Investment House (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.161759109549!2d8.58649067405745!3d11.963300088266967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae8189fb1fa741%3A0x3caa5c1b2e80ce2!2sMaiduguri%20Road%2C%20Kano!5e0!3m2!1sen!2sng!4v1719792501407!5m2!1sen!2sng", 
    "super/85a.jpg","super/85b.jpg"
],
eightysix:["KATSINA","Kano Road Opposite Federal Secretariat  (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.161759109549!2d8.58649067405745!3d11.963300088266967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae8189fb1fa741%3A0x3caa5c1b2e80ce2!2sMaiduguri%20Road%2C%20Kano!5e0!3m2!1sen!2sng!4v1719792501407!5m2!1sen!2sng", 
    "super/86a.jpg","super/86b.jpg"
],
eightyseven:["KATSINA","Nagogo Road Before Nitel Office   (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.161759109549!2d8.58649067405745!3d11.963300088266967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae8189fb1fa741%3A0x3caa5c1b2e80ce2!2sMaiduguri%20Road%2C%20Kano!5e0!3m2!1sen!2sng!4v1719792501407!5m2!1sen!2sng", 
    "super/87a.jpg","super/87b.jpg"
],
eightyeight:["KATSINA","Jibiya Road by Turai Filling Station  (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.161759109549!2d8.58649067405745!3d11.963300088266967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae8189fb1fa741%3A0x3caa5c1b2e80ce2!2sMaiduguri%20Road%2C%20Kano!5e0!3m2!1sen!2sng!4v1719792501407!5m2!1sen!2sng", 
    "super/88a.jpg","super/88b.jpg"
],
eightynine:["KATSINA","Hassan Usman by Yahaya ma-dawaki Junction   (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7771.874399206809!2d7.209497637629055!3d13.103164948897538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11b0679e6a60a3a9%3A0x41422ad882337dea!2sJibia%20820105%2C%20Katsina!5e0!3m2!1sen!2sng!4v1719793590753!5m2!1sen!2sng", 
    "super/89a.jpg","super/89b.jpg"
],
ninety:["KATSINA","Hassan Usman by Yahaya ma-dawaki Junction   (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7771.874399206809!2d7.209497637629055!3d13.103164948897538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11b0679e6a60a3a9%3A0x41422ad882337dea!2sJibia%20820105%2C%20Katsina!5e0!3m2!1sen!2sng!4v1719793590753!5m2!1sen!2sng", 
    "super/90a.jpg","super/90b.jpg"
],
ninetyone:["KATSINA","Hassan Osman Before CBN Junction ftt CBN   (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7771.874399206809!2d7.209497637629055!3d13.103164948897538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11b0679e6a60a3a9%3A0x41422ad882337dea!2sJibia%20820105%2C%20Katsina!5e0!3m2!1sen!2sng!4v1719793590753!5m2!1sen!2sng", 
    "super/91a.jpg","super/91b.jpg"
],

ninetytwo:["KATSINA","Kano Road Before NNPC Mega Station   (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7771.874399206809!2d7.209497637629055!3d13.103164948897538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11b0679e6a60a3a9%3A0x41422ad882337dea!2sJibia%20820105%2C%20Katsina!5e0!3m2!1sen!2sng!4v1719793590753!5m2!1sen!2sng", 
    "super/92a.jpg","super/92b.jpg"
],
ninetythree:["KATSINA","Nagogo Road by Nitel Junction    (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7771.874399206809!2d7.209497637629055!3d13.103164948897538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11b0679e6a60a3a9%3A0x41422ad882337dea!2sJibia%20820105%2C%20Katsina!5e0!3m2!1sen!2sng!4v1719793590753!5m2!1sen!2sng", 
    "super/93a.jpg","super/93b.jpg"
],
ninetyfour:["KATSINA","Kano Road by Federal Secretariat    (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7771.874399206809!2d7.209497637629055!3d13.103164948897538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11b0679e6a60a3a9%3A0x41422ad882337dea!2sJibia%20820105%2C%20Katsina!5e0!3m2!1sen!2sng!4v1719793590753!5m2!1sen!2sng", 
    "super/94a.jpg","super/94b.jpg"
],
ninetyfive:["KATSINA","Daura Road by Airport Fence  (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7771.874399206809!2d7.209497637629055!3d13.103164948897538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11b0679e6a60a3a9%3A0x41422ad882337dea!2sJibia%20820105%2C%20Katsina!5e0!3m2!1sen!2sng!4v1719793590753!5m2!1sen!2sng", 
    "super/95a.jpg","super/95b.jpg"
],
ninetysix:["KATSINA","IBB Way by Investment  (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7771.874399206809!2d7.209497637629055!3d13.103164948897538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11b0679e6a60a3a9%3A0x41422ad882337dea!2sJibia%20820105%2C%20Katsina!5e0!3m2!1sen!2sng!4v1719793590753!5m2!1sen!2sng", 
    "super/96a.jpg","super/96b.jpg"
],
ninetyseven:["KATSINA","IBB Way by Investment House ftt Central Market  (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7771.874399206809!2d7.209497637629055!3d13.103164948897538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11b0679e6a60a3a9%3A0x41422ad882337dea!2sJibia%20820105%2C%20Katsina!5e0!3m2!1sen!2sng!4v1719793590753!5m2!1sen!2sng", 
    "super/97a.jpg","super/97b.jpg"
],
ninetyeight:["KATSINA","Daura Road by Airport Fence  (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7771.874399206809!2d7.209497637629055!3d13.103164948897538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11b0679e6a60a3a9%3A0x41422ad882337dea!2sJibia%20820105%2C%20Katsina!5e0!3m2!1sen!2sng!4v1719793590753!5m2!1sen!2sng", 
    "super/98a.jpg","super/98b.jpg"
],
ninetynine:["KATSINA","Zaria Road by Govt. Day Sec. Sch. Roundabout ftf Zaria.  (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7771.874399206809!2d7.209497637629055!3d13.103164948897538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11b0679e6a60a3a9%3A0x41422ad882337dea!2sJibia%20820105%2C%20Katsina!5e0!3m2!1sen!2sng!4v1719793590753!5m2!1sen!2sng", 
    "super/99a.jpg","super/99b.jpg"
],
hundred:["KEBBI","Ahmadu Bello Way by Total Filling Station  (Close & Far Range)" , "48 SUPER", "3M X 6M",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7771.874399206809!2d7.209497637629055!3d13.103164948897538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11b0679e6a60a3a9%3A0x41422ad882337dea!2sJibia%20820105%2C%20Katsina!5e0!3m2!1sen!2sng!4v1719793590753!5m2!1sen!2sng", 
    "super/100a.jpg","super/100b.jpg"
],
}



{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63009.60716210091!2d12.425935800467446!3d9.235313503478906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10fc6b286fd7b635%3A0xd9ef668469028f23!2sMohammed%20mustapha!5e0!3m2!1sen!2sng!4v1719811326100!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
 */}




app.get("/super",(req,res)=>{
    res.render("boards/super",{info:smallBoardInfo.two});
})









// SKIP 78

app.get("/super/:id",(req,res)=>{
    var boardId = req.params.id;
    if(boardId === "1"){
        res.render("boards/super",{info:smallBoardInfo.one});
    }else if(req.params.id==="2"){
        res.render("boards/super",{info:smallBoardInfo.two});
    }else if(req.params.id==="3"){
        res.render("boards/super",{info:smallBoardInfo.three});
    }else if(req.params.id==="4"){
        res.render("boards/super",{info:smallBoardInfo.four});
    }else if(req.params.id==="5"){
        res.render("boards/super",{info:smallBoardInfo.five});
    }else if(req.params.id==="6"){
        res.render("boards/super",{info:smallBoardInfo.six});
    }else if(req.params.id==="7"){
        res.render("boards/super",{info:smallBoardInfo.seven});
    }else if(req.params.id==="8"){
        res.render("boards/super",{info:smallBoardInfo.eight});
    }else if(req.params.id==="9"){
        res.render("boards/super",{info:smallBoardInfo.nine});
    }else if(req.params.id==="10"){
        res.render("boards/super",{info:smallBoardInfo.ten});
    }else if(req.params.id==="11"){
        res.render("boards/super",{info:smallBoardInfo.eleven});
    }else if(req.params.id==="12"){
        res.render("boards/super",{info:smallBoardInfo.twelve});
    }else if(req.params.id==="13"){
        res.render("boards/super",{info:smallBoardInfo.thirteen});
    }else if(req.params.id==="14"){
        res.render("boards/super",{info:smallBoardInfo.fourteen});
    }else if(req.params.id==="15"){
        res.render("boards/super",{info:smallBoardInfo.fifteen});
    }else if(req.params.id==="16"){
        res.render("boards/super",{info:smallBoardInfo.sixteen});
    }else if(req.params.id==="17"){
        res.render("boards/super",{info:smallBoardInfo.seventeen});
    }else if(req.params.id==="18"){
        res.render("boards/super",{info:smallBoardInfo.eighteen});
    }else if(req.params.id==="19"){
        res.render("boards/super",{info:smallBoardInfo.nineteen});
    }else if(req.params.id==="20"){
        res.render("boards/super",{info:smallBoardInfo.twenty});
    }else if(req.params.id==="21"){
        res.render("boards/super",{info:smallBoardInfo.twentyone});
    }else if(req.params.id==="22"){
        res.render("boards/super",{info:smallBoardInfo.twentytwo});
    }else if(req.params.id==="23"){
        res.render("boards/super",{info:smallBoardInfo.twentythree});
    }else if(req.params.id==="24"){
        res.render("boards/super",{info:smallBoardInfo.twentyfour});
    }else if(req.params.id==="25"){
        res.render("boards/super",{info:smallBoardInfo.twentyfive});
    }else if(req.params.id==="26"){
        res.render("boards/super",{info:smallBoardInfo.thirtysix});
    }else if(req.params.id==="27"){
        res.render("boards/super",{info:smallBoardInfo.twentyseven});
    }else if(req.params.id==="28"){
        res.render("boards/super",{info:smallBoardInfo.twentyeight});
    }else if(req.params.id==="29"){
        res.render("boards/super",{info:smallBoardInfo.twentynine});
    }else if(req.params.id==="30"){
        res.render("boards/super",{info:smallBoardInfo.thirty});
    }else if(req.params.id==="31"){
        res.render("boards/super",{info:smallBoardInfo.thirtyone});
    }else if(req.params.id==="32"){
        res.render("boards/super",{info:smallBoardInfo.thirtytwo});
    }else if(req.params.id==="33"){
        res.render("boards/super",{info:smallBoardInfo.thirtythree});
    }else if(req.params.id==="34"){
        res.render("boards/super",{info:smallBoardInfo.thirtyfour});
    }else if(req.params.id==="35"){
        res.render("boards/super",{info:smallBoardInfo.thirtyfive});
    }else if(req.params.id==="36"){
        res.render("boards/super",{info:smallBoardInfo.thirtysix});
    }else if(req.params.id==="37"){
        res.render("boards/super",{info:smallBoardInfo.thirtyseven});
    }else if(req.params.id==="38"){
        res.render("boards/super",{info:smallBoardInfo.thirtyeight});
    }else if(req.params.id==="39"){
        res.render("boards/super",{info:smallBoardInfo.thirtynine});
    }else if(req.params.id==="40"){
        res.render("boards/super",{info:smallBoardInfo.fourty});
    }else if(req.params.id==="41"){
        res.render("boards/super",{info:smallBoardInfo.fourtyone});
    }else if(req.params.id==="42"){
        res.render("boards/super",{info:smallBoardInfo.fourtytwo});
    }else if(req.params.id==="43"){
        res.render("boards/super",{info:smallBoardInfo.fourtythree});
    }else if(req.params.id==="44"){
        res.render("boards/super",{info:smallBoardInfo.fourtyfour});
    }else if(req.params.id==="45"){
        res.render("boards/super",{info:smallBoardInfo.fourtyfive});
    }else if(req.params.id==="46"){
        res.render("boards/super",{info:smallBoardInfo.fourtysix});
    }else if(req.params.id==="47"){
        res.render("boards/super",{info:smallBoardInfo.fourtyseven});
    }else if(req.params.id==="48"){
        res.render("boards/super",{info:smallBoardInfo.fourtyeight});
    }else if(req.params.id==="49"){
        res.render("boards/super",{info:smallBoardInfo.fourtynine});
    }else if(req.params.id==="50"){
        res.render("boards/super",{info:smallBoardInfo.fifty});
    }else if(req.params.id==="51"){
        res.render("boards/super",{info:smallBoardInfo.fiftyone});
    }else if(req.params.id==="52"){
        res.render("boards/super",{info:smallBoardInfo.fiftytwo});
    }else if(req.params.id==="53"){
        res.render("boards/super",{info:smallBoardInfo.fiftythree});
    }else if(req.params.id==="54"){
        res.render("boards/super",{info:smallBoardInfo.fiftyfour});
    }else if(req.params.id==="55"){
        res.render("boards/super",{info:smallBoardInfo.fiftyfive});
    }else if(req.params.id==="56"){
        res.render("boards/super",{info:smallBoardInfo.fiftysix});
    }else if(req.params.id==="57"){
        res.render("boards/super",{info:smallBoardInfo.fiftyseven});
    }else if(req.params.id==="58"){
        res.render("boards/super",{info:smallBoardInfo.fiftyeight});
    }else if(req.params.id==="59"){
        res.render("boards/super",{info:smallBoardInfo.fiftynine});
    }else if(req.params.id==="60"){
        res.render("boards/super",{info:smallBoardInfo.sixty});
    }else if(req.params.id==="61"){
        res.render("boards/super",{info:smallBoardInfo.sixtyone});
    }else if(req.params.id==="62"){
        res.render("boards/super",{info:smallBoardInfo.sixtytwo});
    }else if(req.params.id==="63"){
        res.render("boards/super",{info:smallBoardInfo.sixtythree});
    }else if(req.params.id==="64"){
        res.render("boards/super",{info:smallBoardInfo.sixtyfour});
    }else if(req.params.id==="65"){
        res.render("boards/super",{info:smallBoardInfo.sixtyfive});
    }else if(req.params.id==="66"){
        res.render("boards/super",{info:smallBoardInfo.sixtysix});
    }else if(req.params.id==="67"){
        res.render("boards/super",{info:smallBoardInfo.sixtyseven});
    }else if(req.params.id==="68"){
        res.render("boards/super",{info:smallBoardInfo.sixtyeight});
    }else if(req.params.id==="69"){
        res.render("boards/super",{info:smallBoardInfo.sixtynine});
    }else if(req.params.id==="70"){
        res.render("boards/super",{info:smallBoardInfo.seventy});
    }else if(req.params.id==="71"){
        res.render("boards/super",{info:smallBoardInfo.seventyone});
    }else if(req.params.id==="72"){
        res.render("boards/super",{info:smallBoardInfo.seventytwo});
    }else if(req.params.id==="73"){
        res.render("boards/super",{info:smallBoardInfo.seventythree});
    }else if(req.params.id==="74"){
        res.render("boards/super",{info:smallBoardInfo.seventyfour});
    }else if(req.params.id==="75"){
        res.render("boards/super",{info:smallBoardInfo.seventyfive});
    }else if(req.params.id==="76"){
        res.render("boards/super",{info:smallBoardInfo.seventysix});
    }else if(req.params.id==="77"){
        res.render("boards/super",{info:smallBoardInfo.seventyseven});
    }else if(req.params.id==="78"){
        res.render("boards/super",{info:smallBoardInfo.seventyeight});
    }else if(req.params.id==="79"){
        res.render("boards/super",{info:smallBoardInfo.seventynine});
    }else if(req.params.id==="80"){
        res.render("boards/super",{info:smallBoardInfo.eighty});
    }else if(req.params.id==="81"){
        res.render("boards/super",{info:smallBoardInfo.eightyone});
    }else if(req.params.id==="82"){
        res.render("boards/super",{info:smallBoardInfo.eightytwo});
    }else if(req.params.id==="83"){
        res.render("boards/super",{info:smallBoardInfo.eightythree});
    }else if(req.params.id==="84"){
        res.render("boards/super",{info:smallBoardInfo.eightyfour});
    }else if(req.params.id==="85"){
        res.render("boards/super",{info:smallBoardInfo.eightyfive});
    }else if(req.params.id==="86"){
        res.render("boards/super",{info:smallBoardInfo.eightysix});
    }else if(req.params.id==="87"){
        res.render("boards/super",{info:smallBoardInfo.eightyseven});
    }else if(req.params.id==="88"){
        res.render("boards/super",{info:smallBoardInfo.eightyeight});
    }else if(req.params.id==="89"){
        res.render("boards/super",{info:smallBoardInfo.eightynine});
    }else if(req.params.id==="90"){
        res.render("boards/super",{info:smallBoardInfo.ninety});
    }else if(req.params.id==="91"){
        res.render("boards/super",{info:smallBoardInfo.ninetyone});
    }else if(req.params.id==="92"){
        res.render("boards/super",{info:smallBoardInfo.ninetytwo});
    }else if(req.params.id==="93"){
        res.render("boards/super",{info:smallBoardInfo.ninetythree});
    }else if(req.params.id==="94"){
        res.render("boards/super",{info:smallBoardInfo.ninetyfour});
    }else if(req.params.id==="95"){
        res.render("boards/super",{info:smallBoardInfo.ninetyfive});
    }else if(req.params.id==="96"){
        res.render("boards/super",{info:smallBoardInfo.ninetysix});
    }else if(req.params.id==="97"){
        res.render("boards/super",{info:smallBoardInfo.ninetyseven});
    }else if(req.params.id==="98"){
        res.render("boards/super",{info:smallBoardInfo.ninetyeight});
    }else if(req.params.id==="99"){
        res.render("boards/super",{info:smallBoardInfo.ninetynine});
    }else if(req.params.id==="100"){
        res.render("boards/super",{info:smallBoardInfo.hundred});
    }
    
    
});




// RUN STRICT TO RENDER EACH SITE
app.get("/boards/:id",(req,res)=>{
    var boardId = req.params.id;
    if(req.params.id === "1"){
        res.render("boards/index",{info:bigBoardInfo.one});
    }else if(req.params.id==="2"){
        res.render("boards/index",{info:bigBoardInfo.two});
    }else if(req.params.id==="3"){
        res.render("boards/index",{info:bigBoardInfo.three});
    }else if(req.params.id==="4"){
        res.render("boards/index",{info:bigBoardInfo.four});
    }else if(req.params.id==="5"){
        res.render("boards/index",{info:bigBoardInfo.five});
    }else if(req.params.id==="6"){
        res.render("boards/index",{info:bigBoardInfo.six});
    }else if(req.params.id==="7"){
        res.render("boards/index",{info:bigBoardInfo.seven});
    }else if(req.params.id==="8"){
        res.render("boards/index",{info:bigBoardInfo.eight});
    }else if(req.params.id==="9"){
        res.render("boards/index",{info:bigBoardInfo.nine});
    }else if(req.params.id==="10"){
        res.render("boards/index",{info:bigBoardInfo.ten});
    }else if(req.params.id==="11"){
        res.render("boards/index",{info:bigBoardInfo.eleven});
    }else if(req.params.id==="12"){
        res.render("boards/index",{info:bigBoardInfo.twelve});
    }else if(req.params.id==="13"){
        res.render("boards/index",{info:bigBoardInfo.thirteen});
    }else if(req.params.id==="14"){
        res.render("boards/index",{info:bigBoardInfo.fourteen});
    }else if(req.params.id==="15"){
        res.render("boards/index",{info:bigBoardInfo.fifteen});
    }else if(req.params.id==="16"){
        res.render("boards/index",{info:bigBoardInfo.sixteen});
    }else if(req.params.id==="17"){
        res.render("boards/index",{info:bigBoardInfo.seventeen});
    }else if(req.params.id==="18"){
        res.render("boards/index",{info:bigBoardInfo.eighteen});
    }else if(req.params.id==="19"){
        res.render("boards/index",{info:bigBoardInfo.nineteen});
    }else if(req.params.id==="20"){
        res.render("boards/index",{info:bigBoardInfo.twenty});
    }else if(req.params.id==="21"){
        res.render("boards/index",{info:bigBoardInfo.twentyone});
    }else if(req.params.id==="22"){
        res.render("boards/index",{info:bigBoardInfo.twentytwo});
    }else if(req.params.id==="23"){
        res.render("boards/index",{info:bigBoardInfo.twentythree});
    }else if(req.params.id==="24"){
        res.render("boards/index",{info:bigBoardInfo.twentyfour});
    }else if(req.params.id==="25"){
        res.render("boards/index",{info:bigBoardInfo.twentyfive});
    }else if(req.params.id==="26"){
        res.render("boards/index",{info:bigBoardInfo.twentysix});
    }else if(req.params.id==="27"){
        res.render("boards/index",{info:bigBoardInfo.twentyseven});
    }else if(req.params.id==="28"){
        res.render("boards/index",{info:bigBoardInfo.twentyeight});
    }else if(req.params.id==="29"){
        res.render("boards/index",{info:bigBoardInfo.twentynine});
    }else if(req.params.id==="30"){
        res.render("boards/index",{info:bigBoardInfo.thirty});
    }else if(req.params.id==="31"){
        res.render("boards/index",{info:bigBoardInfo.thirtyone});
    }else if(req.params.id==="32"){
        res.render("boards/index",{info:bigBoardInfo.thirtytwo});
    }else if(req.params.id==="33"){
        res.render("boards/index",{info:bigBoardInfo.thirtythree});
    }else if(req.params.id==="34"){
        res.render("boards/index",{info:bigBoardInfo.thirtyfour});
    }else if(req.params.id==="35"){
        res.render("boards/index",{info:bigBoardInfo.thirtyfive});
    }else if(req.params.id==="36"){
        res.render("boards/index",{info:bigBoardInfo.thirtysix});
    }else if(req.params.id==="37"){
        res.render("boards/index",{info:bigBoardInfo.thirtyseven});
    }else if(req.params.id==="38"){
        res.render("boards/index",{info:bigBoardInfo.thirtyeight});
    }else if(req.params.id==="39"){
        res.render("boards/index",{info:bigBoardInfo.thirtynine});
    }else if(req.params.id==="40"){
        res.render("boards/index",{info:bigBoardInfo.fourty});
    }else if(req.params.id==="41"){
        res.render("boards/index",{info:bigBoardInfo.fourtyone});
    }else if(req.params.id==="42"){
        res.render("boards/index",{info:bigBoardInfo.fourtytwo});
    }else if(req.params.id==="43"){
        res.render("boards/index",{info:bigBoardInfo.fourtythree});
    }else if(req.params.id==="44"){
        res.render("boards/index",{info:bigBoardInfo.fourtyfour});
    }else if(req.params.id==="45"){
        res.render("boards/index",{info:bigBoardInfo.fourtyfive});
    }else if(req.params.id==="46"){
        res.render("boards/index",{info:bigBoardInfo.fourtysix});
    }else if(req.params.id==="47"){
        res.render("boards/index",{info:bigBoardInfo.fourtyseven});
    }else if(req.params.id==="48"){
        res.render("boards/index",{info:bigBoardInfo.fourtyeight});
    }else if(req.params.id==="49"){
        res.render("boards/index",{info:bigBoardInfo.fourtynine});
    }else if(req.params.id==="50"){
        res.render("boards/index",{info:bigBoardInfo.fifty});
    }else if(req.params.id==="51"){
        res.render("boards/index",{info:bigBoardInfo.fiftyone});
    }else if(req.params.id==="52"){
        res.render("boards/index",{info:bigBoardInfo.fiftytwo});
    }else if(req.params.id==="53"){
        res.render("boards/index",{info:bigBoardInfo.fiftythree});
    }else if(req.params.id==="54"){
        res.render("boards/index",{info:bigBoardInfo.fiftyfour});
    }else if(req.params.id==="55"){
        res.render("boards/index",{info:bigBoardInfo.fiftyfive});
    }else if(req.params.id==="56"){
        res.render("boards/index",{info:bigBoardInfo.fiftysix});
    }else if(req.params.id==="57"){
        res.render("boards/index",{info:bigBoardInfo.fiftyseven});
    }else if(req.params.id==="58"){
        res.render("boards/index",{info:bigBoardInfo.fiftyeight});
    }else if(req.params.id==="59"){
        res.render("boards/index",{info:bigBoardInfo.fiftynine});
    }else if(req.params.id==="60"){
        res.render("boards/index",{info:bigBoardInfo.sixty});
    }

    
});

