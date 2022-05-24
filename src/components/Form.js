import React, { useState } from "react";
import { useFormik } from "formik";
import { useCity } from "../context/CityContext";

function Form() {
  const { city, setCity, forecast } = useCity();
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik(
      {
        initialValues: {
          city: "İstanbul",
        },
        onSubmit: (values) => {
          setCity(values.city);
        },
      },
      [city]
    );
  const cities = [
    "Adana",
    "Adıyaman",
    "Afyonkarahisar",
    "Ağrı",
    "Aksaray",
    "Amasya",
    "Ankara",
    "Antalya",
    "Ardahan",
    "Artvin",
    "Aydın",
    "Balıkesir",
    "Bartın",
    "Batman",
    "Bayburt",
    "Bilecik",
    "Bingöl",
    "Bitlis",
    "Bolu",
    "Burdur",
    "Bursa",
    "Çanakkale",
    "Çankırı",
    "Çorum",
    "Denizli",
    "Diyarbakır",
    "Düzce",
    "Edirne",
    "Elazığ",
    "Erzincan",
    "Erzurum",
    "Eskişehir",
    "Gaziantep",
    "Giresun",
    "Gümüşhane",
    "Hakkari",
    "Hatay",
    "Iğdır",
    "Isparta",
    "İstanbul",
    "İzmir",
    "Kahramanmaraş",
    "Karabük",
    "Karaman",
    "Kars",
    "Kastamonu",
    "Kayseri",
    "Kilis",
    "Kırıkkale",
    "Kırklareli",
    "Kırşehir",
    "Kocaeli",
    "Konya",
    "Kütahya",
    "Malatya",
    "Manisa",
    "Mardin",
    "Mersin",
    "Muğla",
    "Muş",
    "Nevşehir",
    "Niğde",
    "Ordu",
    "Osmaniye",
    "Rize",
    "Sakarya",
    "Samsun",
    "Şanlıurfa",
    "Siirt",
    "Sinop",
    "Sivas",
    "Şırnak",
    "Tekirdağ",
    "Tokat",
    "Trabzon",
    "Tunceli",
    "Uşak",
    "Van",
    "Yalova",
    "Yozgat",
    "Zonguldak",
  ];
  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-container">
          <select name="city" id="city" onChange={handleChange}>
            {cities.map((city) => {
              return (
                <option
                  value={city}
                  selected={city === "İstanbul" && "selected"}
                >
                  {city}
                </option>
              );
            })}
          </select>
          <button type="submit">Git</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
