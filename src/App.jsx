import { useState, useEffect } from "react";
import axios from 'axios';

import logo from "./assets/logo.svg";
import dashboard from "./assets/dashboard.svg";
import up from "./assets/chevron-up.svg";
import helpCenter from "./assets/help-center.svg";
import fileManager from "./assets/file-manager.svg";
import down from "./assets/chevron-down.svg";
import settings from "./assets/settings.svg";
import logout from "./assets/logout.svg";
import globe from "./assets/globe.svg";
import iconIndicator from "./assets/icon-indicator.svg";
import calendar from "./assets/calendar.svg";
import layoutGrid from "./assets/layout-grid.svg";
import avatar from "./assets/avatar.svg";
import "./App.css";

import { BarChart, PieChart } from "./components/Charts";
import StatCard from "./components/StatCard";
import { bar, pie } from '../datum';

function App() {
  const [data, setData] = useState([]);
  const [stats, setStats] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get('http://localhost:3001/datum');
      setData(res.data);
    })();

    (async () => {
      const res = await axios.get('http://localhost:3001/stats');
      setStats(res.data);
    })();

  }, [])

  return (
    <div className="flex">
      <aside className="flex flex-col gap-4 w-[20%] h-[100vh] text-[#9D9FA1] font-semibold border-r-[1px] border-[#EAECF0]">
        <img className="px-4 py-6" width="200" src={logo} />
        <div className="px-6 text-[0.75rem] mb-4">
          <p className="uppercase tracking-[0.3em] mb-8">Dashboard</p>
          <div className="flex flex-col gap-4 text-[0.875rem]">
            <div className="flex justify-between">
              <div className="flex gap-2">
                <img src={dashboard} />
                <p className="text-[#282828]">Dashboard</p>
              </div>
              <img className="self-center" src={up} />
            </div>
            <p className="text-[#282828]">Record</p>
            <p>Reports</p>
            <p>Analyse</p>
            <p>Learn</p>
          </div>
        </div>
        <div className="px-6 text-[0.75rem]">
          <p className="uppercase tracking-[0.3em] mb-8">Pages</p>
          <div className="flex flex-col gap-4 text-[0.875rem]">
            <div className="flex justify-between">
              <div className="flex gap-2">
                <img src={helpCenter} />
                <p className="shrink-0">Help Center</p>
              </div>
              <img className="self-center" src={down} />
            </div>

            <div className="flex justify-between">
              <div className="flex gap-2">
                <img src={fileManager} />
                <p className="shrink-0">File Manager</p>
              </div>
              <img className="self-center" src={down} />
            </div>
          </div>
        </div>

        <div className="flex justify-between border-t-[1px] border-[#EAECF0] p-4 mt-auto">
          <a href="">
            <img src={settings} />
          </a>
          <a href="">
            <img src={logout} />
          </a>
          <a href="">
            <img src={globe} />
          </a>
        </div>
      </aside>

      <div className="w-full flex flex-col gap-4 bg-[#F5F5F5]">
        <nav className="flex gap-6 bg-white px-4 py-2">
          <input
            type="text"
            placeholder="Search..."
            className="input w-full border-[1px] border-[#EAECF0] rounded-lg px-10 text-[0.875rem] font-normal"
          />
          <a className="self-center" href="">
            <img src={iconIndicator} />
          </a>
          <a className="self-center" href="">
            <img src={calendar} />
          </a>
          <a className="self-center" href="">
            <img src={layoutGrid} />
          </a>
          <a className="self-center" href="">
            <img src={avatar} />
          </a>
        </nav>

        <div className="flex gap-8 px-8 py-4">
          {stats.map((stat) => (
            <StatCard key={stat.title} title={stat.title} value={stat.value} percentage={stat.percent} />
          ))}
        </div>

        <div className="flex gap-4 px-8 py-4">
          <div className="bg-white h-[40vh] w-[60%] rounded-lg p-4">
            <p className="font-bold text-[#282828] text-[1.5rem]">
              Carbon Footprint
            </p>
            <BarChart data={bar} />
          </div>
          <div className="bg-white h-[40vh] w-[40%] rounded-lg p-4">
            <p className="font-bold text-[#282828] text-[1.5rem]">
              Top emissions by type
            </p>
            <PieChart data={pie} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
