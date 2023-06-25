import React, { useState, useEffect } from "react";
import logo from "./img/logo.svg";
import icon from "./img/icon.svg";
import { Switch, useColorMode } from "@chakra-ui/react";

interface advicement {
  slip: {
    id: number;
    advice: string;
  };
}

const AdvicePage = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const [data, setData] = useState<advicement>();

  const fetchData = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Switch className=" color" colorScheme="green" onChange={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Switch>

      {data && (
        <div>
          <div className="main">
            <h2 className="header">{"ADVICE # " + data?.slip.id}</h2>
            <p className="paragraph">{data.slip.advice}</p>

            <img className="logo" src={logo} alt="no img" />

            <button className="icon" onClick={fetchData}>
              <img src={icon} alt="no img" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvicePage;
