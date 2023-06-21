function getStr() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('yangmy');
    }, 2000);
  });
}

const logFun = () => {
  console.log('chuze');
};

async function helloWorld() {
  let str = await getStr();
  console.log(str);
  return str;
}
helloWorld();

export default helloWorld;
