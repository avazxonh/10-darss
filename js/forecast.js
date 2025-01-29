// const KEY = '96b947a45d33d7dc1c49af3203966408'
const KEY = "83ed332dee5b56cc6c20f34d7e3fbafd";

// request get  data

const getData = async (city) => {
  const base = "https://api.openweathermap.org/data/2.5/weather";
  const query = `?q=${city}&units=metric&appid=${KEY}`;
  loader(true);
  const req = await fetch(base + query);
  const data = await req.json();
  loader(false);

  return data;
};

const result = getData("London").then((data) => console.log(data));
