function getStr() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('yangmy');
    }, 2000);
  });
}

async function helloWorld() {
  const str = await getStr();
  console.log(str);
  return str;
}
helloWorld();

export default helloWorld;
