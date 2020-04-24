import React, { useEffect, useState } from "react";
import { getCountry } from "../../api";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";

const CountryPicker = ({ handleCountryChange }) => {
  const [country, updateCountry] = useState([]);

  useEffect(() => {
    const fetchMyAPI = async () => {
      const countryData = await getCountry();
      console.log(countryData);

      updateCountry(countryData);
    };

    fetchMyAPI();
  }, []);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="global">global</option>
        {country.map((country, i) => (
          <option value={country} key={i}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};
export default CountryPicker;
