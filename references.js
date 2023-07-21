//in JS - ONLY object & arrays are Passed by Reference
//other stuff is passed by value

const basicConfig = { host: "http:/google.com" };

const extendConfig = (config) => {
  config.port = 3000; //assigning new property
  return config;
};

const extendedConfig = extendConfig(basicConfig);
console.log(basicConfig);
console.log(extendConfig(basicConfig));


//WHAT IS WRONG WITH IT?
// we modify (mutate) the Original Object by passing it at line 11
//we need to make a new object

//we Want a function to ADD, not change behavior

const basicConfig2 = { host: "http:/google.com" };

const extendConfig2 = (config2) => {
  //return Object.assign(config2, { port: 3000 });
  //will be the same, so
  return Object.assign({}, config2, { port: 3000 });
  // make new OBJ, override its properties with config2 & add new property
  //or Just - Use spread operator
  // return {...config, port: 3000 }); 
};

const extendedConfig2 = extendConfig2(basicConfig2);
console.log(basicConfig2);
console.log(extendConfig(basicConfig2));

//MAP vs Object
 
const objectus = { foo: 'few', ber: 'bar'}
console.log(objectus.foo)
//Do we even need MAPS?

const map = new Map ([
    ["fool", "fewfew"],
    ["berber", "berfew"],
])
console.log(map.get("fool"));
