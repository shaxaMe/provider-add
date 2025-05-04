import { useState, useEffect } from "react";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { Switch } from "antd";
function Nav() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
  }, []);

  const toggleDarkMode = (value:boolean) => {
    const newMode = value;
    setDarkMode(value)
    localStorage.setItem("darkMode", newMode.toString());
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav>
        <Switch
          checkedChildren={<MoonOutlined />}
          unCheckedChildren={<SunOutlined />}
          value={darkMode}
          onChange={toggleDarkMode}
          
        />
        <div className="">
           <h1 className="text-violet-500">Hi</h1>
        </div>
    </nav>
  );
}

export default Nav;
