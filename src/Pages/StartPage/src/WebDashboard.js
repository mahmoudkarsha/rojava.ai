import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import {
      LineChart,
      Line,
      BarChart,
      Bar,
      PieChart,
      Pie,
      AreaChart,
      Area,
      ScatterChart,
      Scatter,
      Treemap,
      XAxis,
      YAxis,
      CartesianGrid,
      Tooltip,
      ResponsiveContainer,
} from "recharts";
import {
      Moon,
      Sun,
      LayoutDashboard,
      PieChart as PieChartIcon,
      BarChart as BarChartIcon,
      TrendingUp,
      ScatterChart as ScatterChartIcon,
      ChefHat,
      GitCommit,
} from "lucide-react";
import { Grid, GridSection } from "../../../Layouts/Gridlayout";
import { onSmallLaptop } from "../../../Assets/other/screenSizes";

const Dashboard = () => {
      const [darkMode, setDarkMode] = useState(false);
      const [activeChart, setActiveChart] = useState("line");

      const toggleDarkMode = () => setDarkMode(!darkMode);
      const currentTheme = darkMode ? "dark" : "light";

      // Sample data for various charts

      return (
            <ThemeProvider theme={theme}>
                  <DashboardContainer mode={currentTheme}>
                        <Sidebar mode={currentTheme}>
                              <SidebarTitle>Dashboard</SidebarTitle>
                              <NavButton active={activeChart === "line"} onClick={() => setActiveChart("line")}>
                                    <LayoutDashboard size={18} />
                                    Line Chart
                              </NavButton>
                              <NavButton active={activeChart === "bar"} onClick={() => setActiveChart("bar")}>
                                    <BarChartIcon size={18} />
                                    Bar Chart
                              </NavButton>
                              <NavButton active={activeChart === "pie"} onClick={() => setActiveChart("pie")}>
                                    <PieChartIcon size={18} />
                                    Pie Chart
                              </NavButton>
                              <NavButton active={activeChart === "radialBar"} onClick={() => setActiveChart("radialBar")}>
                                    <ChefHat size={18} />
                                    Radial Bar
                              </NavButton>
                              <NavButton active={activeChart === "area"} onClick={() => setActiveChart("area")}>
                                    <TrendingUp size={18} />
                                    Area Chart
                              </NavButton>
                              <NavButton active={activeChart === "scatter"} onClick={() => setActiveChart("scatter")}>
                                    <ScatterChartIcon size={18} />
                                    Scatter Chart
                              </NavButton>
                              <NavButton active={activeChart === "treemap"} onClick={() => setActiveChart("treemap")}>
                                    <GitCommit size={18} />
                                    Treemap
                              </NavButton>
                        </Sidebar>
                        <MainContent>
                              <Header>
                                    <Title>Analytics Dashboard</Title>
                                    <ThemeToggle onClick={toggleDarkMode}>{darkMode ? <Sun size={24} /> : <Moon size={24} />}</ThemeToggle>
                              </Header>
                              <ChartContainer mode={currentTheme}>
                                    <Grid $gap="2rem">
                                          <GridSection $col="4" style={{ height: 260 }}>
                                                <ResponsiveContainer width="100%" height="100%">
                                                      <LineChart data={lineData}>
                                                            <CartesianGrid strokeDasharray="3 3" />
                                                            <XAxis dataKey="name" />
                                                            <Tooltip />
                                                            <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={3} />
                                                            <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeWidth={3} />
                                                      </LineChart>
                                                </ResponsiveContainer>
                                          </GridSection>
                                          <GridSection $col="4" style={{ height: 260 }}>
                                                <ResponsiveContainer width="100%" height="100%">
                                                      <BarChart data={lineData}>
                                                            <CartesianGrid strokeDasharray="3 3" />
                                                            <XAxis dataKey="name" />
                                                            <Tooltip />
                                                            <Bar dataKey="pv" fill="#8884d8" />
                                                            <Bar dataKey="uv" fill="#82ca9d" />
                                                      </BarChart>
                                                </ResponsiveContainer>
                                          </GridSection>
                                          <GridSection $col="4" style={{ height: 180 }}></GridSection>
                                    </Grid>
                              </ChartContainer>
                              <ChartContainer mode={currentTheme}>
                                    <Grid $gap="2rem" style={{ marginBlock: "3rem" }}>
                                          <GridSection $col="3" style={{ height: 180 }}>
                                                <ResponsiveContainer width="100%" height="100%">
                                                      <PieChart>
                                                            <Pie
                                                                  data={lineData}
                                                                  dataKey="uv"
                                                                  nameKey="name"
                                                                  cx="50%"
                                                                  cy="50%"
                                                                  outerRadius={80}
                                                                  innerRadius={50}
                                                                  fill="#a4de6c"
                                                                  label
                                                            />
                                                            <Tooltip />
                                                      </PieChart>
                                                </ResponsiveContainer>
                                          </GridSection>
                                          <GridSection $col="3" style={{ height: 180 }}>
                                                <ResponsiveContainer width="100%" height="100%">
                                                      <PieChart>
                                                            <Pie
                                                                  data={lineData}
                                                                  dataKey="uv"
                                                                  nameKey="name"
                                                                  cx="50%"
                                                                  cy="50%"
                                                                  outerRadius={80}
                                                                  fill="#8884d8"
                                                                  label
                                                            />
                                                            <Tooltip />
                                                      </PieChart>
                                                </ResponsiveContainer>
                                          </GridSection>
                                          <GridSection $col="6" style={{ height: 180 }}>
                                                <ResponsiveContainer width="100%" height="100%">
                                                      <AreaChart data={areaData}>
                                                            <Tooltip />
                                                            <Area
                                                                  type="monotone"
                                                                  dataKey="uv"
                                                                  stackId="1"
                                                                  stroke="#8884d8"
                                                                  fill="#8884d8"
                                                            />
                                                            <Area
                                                                  type="monotone"
                                                                  dataKey="pv"
                                                                  stackId="1"
                                                                  stroke="#82ca9d"
                                                                  fill="#82ca9d"
                                                            />
                                                            <Area
                                                                  type="monotone"
                                                                  dataKey="amt"
                                                                  stackId="1"
                                                                  stroke="#ffc658"
                                                                  fill="#ffc658"
                                                            />
                                                      </AreaChart>
                                                </ResponsiveContainer>
                                          </GridSection>
                                    </Grid>
                              </ChartContainer>

                              <ChartContainer mode={currentTheme}>
                                    <Grid>
                                          <GridSection $col="6" style={{ height: 150 }}>
                                                <ResponsiveContainer width="100%" height="100%">
                                                      <Treemap
                                                            data={treemapData}
                                                            dataKey="size"
                                                            ratio={4 / 3}
                                                            stroke="#fff"
                                                            fill="#8884d8"
                                                            content={
                                                                  <CustomizedContent
                                                                        colors={["#8884d8", "#83a6ed", "#8dd1e1", "#82ca9d", "#a4de6c"]}
                                                                  />
                                                            }
                                                      />{" "}
                                                </ResponsiveContainer>
                                          </GridSection>
                                          <GridSection $col="6" style={{ height: 150 }}>
                                                <ResponsiveContainer width="100%" height="100%">
                                                      <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                                                            <YAxis type="number" dataKey="y" name="weight" unit="kg" />
                                                            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                                                            <Scatter name="A school" data={scatterData} fill="#8884d8" />
                                                      </ScatterChart>{" "}
                                                </ResponsiveContainer>
                                          </GridSection>
                                    </Grid>
                              </ChartContainer>
                        </MainContent>
                  </DashboardContainer>
            </ThemeProvider>
      );
};

// Custom content component for Treemap
const CustomizedContent = (props) => {
      const { root, depth, x, y, width, height, index, colors, name } = props;

      return (
            <g>
                  <rect
                        x={x}
                        y={y}
                        width={width}
                        height={height}
                        style={{
                              fill: depth < 2 ? colors[Math.floor((index / root.children.length) * 6)] : "none",
                              stroke: "#fff",
                              strokeWidth: 2 / (depth + 1e-10),
                              strokeOpacity: 1 / (depth + 1e-10),
                        }}
                  />
                  {depth === 1 ? (
                        <text x={x + width / 2} y={y + height / 2 + 7} textAnchor="middle" fill="#fff" fontSize={14}>
                              {name}
                        </text>
                  ) : null}
            </g>
      );
};

export default Dashboard;

const theme = {
      light: {
            background: "#ffffffee",
            text: "#333333",
            sidebar: "#f0f0f0aa",
            chart: "#f8f8f8aa",
      },
      dark: {
            background: "transparent",
            text: "#ffffff",
            sidebar: "#1A1A4B1a",
            chart: "#1A1A4B66",
      },
};

const DashboardContainer = styled.div`
      width: 100%;
      display: flex;
      aspect-ratio: 1920 / 1080;
      border-radius: 3rem;
      overflow: hidden;
      background-color: ${(props) => props.theme[props.mode].background};
      color: ${(props) => props.theme[props.mode].text};
      box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
      transition: background-color 0.3s;
      ${onSmallLaptop} {
            flex-direction: column;
      }
`;

const Sidebar = styled.div`
      width: 13%;
      background-color: ${(props) => props.theme[props.mode].sidebar};
      padding: 20px;
      ${onSmallLaptop} {
            display: flex;
            flex-direction: row;
            gap: 20px;
      }
`;

const SidebarTitle = styled.h2`
      font-size: 1.5rem;
      margin-top: 0px;
      margin-bottom: 20px;
      margin-inline-start: 10px;
`;

const NavButton = styled.button`
      display: flex;
      align-items: center;
      width: 100%;
      padding: 8px;
      margin-bottom: 1.3rem;
      background-color: ${(props) => (props.active ? "#4a90e2" : "transparent")};
      color: ${(props) => (props.active ? "white" : "inherit")};
      border: none;
      border-radius: 1.3rem;
      cursor: pointer;
      transition: background-color 0.3s;
      font-size: 1.1rem;
      &:hover {
            background-color: ${(props) => (props.active ? "#4a90e2" : "#e0e0e0")};
      }

      svg {
            margin-inline: 10px;
      }
`;

const MainContent = styled.div`
      flex: 1;
      padding: 2rem;
      overflow: scroll;
`;

const Header = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
`;

const Title = styled.h1`
      font-size: 1.6rem;
`;

const ThemeToggle = styled.button`
      background-color: transparent;
      border: none;
      cursor: pointer;
      padding: 0px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-inline: 2rem;
`;

const ChartContainer = styled.div`
      background-color: ${(props) => props.theme[props.mode].chart};
      padding: 10px;
      border-radius: 8px;
      margin-bottom: 2rem;
`;

const data = [
      { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
      { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
      { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
      { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
      { name: "May", uv: 1890, pv: 4800, amt: 2181 },
      { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
      { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
];

const lineData = [
      { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
      { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
      { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
      { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
      { name: "May", uv: 1890, pv: 4800, amt: 2181 },
      { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
      { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
];

const radialBarData = [
      { name: "18-24", uv: 31.47, pv: 2400, fill: "#8884d8" },
      { name: "25-29", uv: 26.69, pv: 4567, fill: "#83a6ed" },
      { name: "30-34", uv: 15.69, pv: 1398, fill: "#8dd1e1" },
      { name: "35-39", uv: 8.22, pv: 9800, fill: "#82ca9d" },
      { name: "40-49", uv: 8.63, pv: 3908, fill: "#a4de6c" },
      { name: "50+", uv: 2.63, pv: 4800, fill: "#d0ed57" },
];

const areaData = [
      { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
      { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
      { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
      { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
      { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
      { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
      { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

const scatterData = [
      { x: 100, y: 200, z: 200 },
      { x: 120, y: 100, z: 260 },
      { x: 170, y: 300, z: 400 },
      { x: 140, y: 250, z: 280 },
      { x: 150, y: 400, z: 500 },
      { x: 110, y: 280, z: 200 },
];

const treemapData = [
      {
            name: "axis",
            children: [
                  { name: "Axes", size: 1302 },
                  { name: "Axis", size: 24593 },
                  { name: "AxisGridLine", size: 652 },
                  { name: "AxisLabel", size: 636 },
                  { name: "CartesianAxes", size: 6703 },
            ],
      },
      {
            name: "controls",
            children: [
                  { name: "AnchorControl", size: 2138 },
                  { name: "ClickControl", size: 3824 },
                  { name: "Control", size: 1353 },
                  { name: "ControlList", size: 4665 },
                  { name: "DragControl", size: 2649 },
                  { name: "ExpandControl", size: 2832 },
                  { name: "HoverControl", size: 4896 },
                  { name: "IControl", size: 763 },
                  { name: "PanZoomControl", size: 5222 },
                  { name: "SelectionControl", size: 7862 },
                  { name: "TooltipControl", size: 8435 },
            ],
      },
      {
            name: "controls=w",
            children: [
                  { name: "AnchorControl", size: 2138 },
                  { name: "ClickControl", size: 3824 },
                  { name: "Control", size: 1353 },
                  { name: "ControlList", size: 4665 },
                  { name: "DragControl", size: 2649 },
                  { name: "ExpandControl", size: 2832 },
                  { name: "HoverControl", size: 4896 },
                  { name: "IControl", size: 763 },
                  { name: "PanZoomControl", size: 5222 },
                  { name: "SelectionControl", size: 7862 },
                  { name: "TooltipControl", size: 8435 },
            ],
      },
];
