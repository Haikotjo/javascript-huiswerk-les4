// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

const tvTypes = inventory.map((tvType) => {
  return tvType.type;
});
console.log(tvTypes);

////////////////////////////////////////////////////////////////////////////////////////////////////////

const soldOutTVs = inventory.filter((soldOutTV) => {
  if((soldOutTV.originalStock - soldOutTV.sold) === 0){
    return soldOutTV;
  }
});
console.log(soldOutTVs)

////////////////////////////////////////////////////////////////////////////////////////////////////////

const ambiTvs = inventory.filter((ambiTv) => {
  if (ambiTv.options.ambiLight){
    return ambiTv;
  }
});
console.log(ambiTvs)

////////////////////////////////////////////////////////////////////////////////////////////////////////

const cheapestTvs = inventory.sort((a, b) => {
  return a.price - b.price
});
console.log(cheapestTvs)

////////////////////////////////////////////////////////////////////////////////////////////////////////


const soldTvs = inventory.map((soldTv) => {
  return soldTv.sold
  });
let sumSold =null;
for (let i = 0; i < soldTvs.length; i++) {
  sumSold += soldTvs[i]
}
console.log(sumSold)

////////////////////////////////////////////////////////////////////////////////////////////////////////

const sold = document.getElementById("sold");
sold.textContent = `Er zijn  ${sumSold}  tv's verkocht`

////////////////////////////////////////////////////////////////////////////////////////////////////////

const boughTvs = inventory.map((boughtTv) => {
  return boughtTv.originalStock
});
let sumBought =null;
for (let i = 0; i < boughTvs.length; i++) {
  sumBought += boughTvs[i]
}
console.log(sumBought)

////////////////////////////////////////////////////////////////////////////////////////////////////////

const bought = document.getElementById("bought");
bought.textContent = `Er zijn  ${sumBought}  tv's verkocht`

////////////////////////////////////////////////////////////////////////////////////////////////////////

const totalToSell = sumBought - sumSold;
const tosell = document.getElementById("tosell");
tosell.textContent = `Er zijn nog  ${totalToSell}  tv's over`;

////////////////////////////////////////////////////////////////////////////////////////////////////////

// const listTvtypes = tvTypes
// const list = document.getElementById("list");
// list.textContent = listTvtypes
// console.log(tvTypes)

////////////////////////////////////////////////////////////////////////////////////////////////////////

// function makeList() {
//
//   const tvTypes = inventory.map((tvType) => {
//     return tvType.type;
//   });
//   console.log(tvTypes);
//
// }
// console.log(makeList())

////////////////////////////////////////////////////////////////////////////////////////////////////////

function makeListTohtml() {
  const tablefield = document.getElementById("table-field");
  inventory.map((tv) =>{
    return tablefield.innerHTML += `
  <tr>
        <td  id="list"> ${ tv.type} </td>
    </tr>
  `
  } );
};
makeListTohtml()

////////////////////////////////////////////////////////////////////////////////////////////////////////



function tvString(tv) {
  return inventory[tv].name + ' ' + inventory[tv].brand + ' ' + inventory[tv].type;
}
console.log(tvString(3));

function priceToEuro(price) {
  return inventory[price].price + " €";
}
console.log(priceToEuro(1));

function screenSize(size) {
  let sizes = inventory[size].availableSizes
  let cm = []
  for (let i = 0; i < sizes.length; i++) {
    cm += sizes[i] + " inch " + "(" + Math.round(sizes[i] * 2.54) + " cm) "
  }
  return cm;
}
console.log(screenSize(0));

function makeTv(number) {
  const aTvs = document.getElementById("aTvs");
  aTvs.innerText = `${tvString(number)}`
  const aTvp = document.getElementById("aTvp");
  aTvp.innerText = `${priceToEuro(number)}`
  const aTvz = document.getElementById("aTvz");
  aTvz.innerText = `${screenSize(number)}`
}

console.log("hello")
makeTv(4)

// const completeTv = {
//   tvName : tvString(0),
//   price : priceToEuro(0),
//   size: screenSize(0)
// }
// console.log(completeTv)


