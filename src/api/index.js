import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let updateCountry = url;
  if (country) {
    updateCountry = `${url}/countries/${country}`;
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(updateCountry);

    const filteredData = { confirmed, recovered, deaths, lastUpdate };
    return filteredData;
  } catch (error) {}
};

export const getDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return modifiedData;
  } catch (error) {}
};

export const getCountry = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    const filteredData = countries.map((country) => country.name);
    return filteredData;
  } catch (error) {
    return error;
  }
};
