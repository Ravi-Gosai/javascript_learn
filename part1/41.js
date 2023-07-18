// // object destructuring
// const band = {
  //   bandName: "led zepplin",
  //   famousSong: "stairway to heaven",
  //   year: 1968,
  //   anotherFamousSong: "kashmir",
  // };
  
  // let { bandName, famousSong, ...restProps } = band;
  // console.log(bandName);
  // console.log(restProps);
  
  
  
  
  //extra
  // // object destructuring

  const band = {
    bandName :"led zwppin",
    famousSong : "stairway o heaven",
    year : "3737",
    anotherFamousSong : "jay hoo"

  }
  console.log(band)

  // const bandName = band.bandName; // 1st method
  // const f_Song = band["famousSong"]; // 2nd method
  //aaj kam short method thi niche pramne

  // const{bandName, famousSong,} = band; //same key vada name thi j variable banse
  // niche pramane name change kari sakay
  let {bandName:var1, famousSong,...baki_vadhela} = band;

  console.log(var1);// aama upar aapde bandName nu let vadu nam var1 kariyu chhe
  console.log(famousSong);
  console.log(baki_vadhela) // new object banse



