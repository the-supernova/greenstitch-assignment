import { ResponsiveBar } from "@nivo/bar";
import { ResponsivePie } from "@nivo/pie";

export const BarChart = ({ data }) => (
  <ResponsiveBar
    data={data}
    keys={["Spinning", "Transportation", "Carding", "Heating & Cooling"]}
    indexBy="month"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.5}
    valueScale={{ type: "linear" }}
    indexScale={{ type: "band", round: true }}
    colors={["#57CC78", "#55DBDB", "#E2FF32", "#FEC102"]}
    borderColor={{
      from: "color",
      modifiers: [["darker", 1.6]],
    }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "",
      legendPosition: "middle",
      legendOffset: 32,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "",
      legendPosition: "middle",
      legendOffset: -40,
      format: (value) => `${value}k`,
    }}
    enableLabel={false}
    valueFormat={(value) => `${value}k`}
    legends={[
      {
        dataFrom: "keys",
        anchor: "top",
        direction: "row",
        justify: false,
        translateX: 50,
        translateY: -34,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: "left-to-right",
        itemOpacity: 0.85,
        symbolSize: 20,
        symbolShape: "circle",
        effects: [
          {
            on: "hover",
            style: {
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);

export const PieChart = ({ data }) => (
  <ResponsivePie
    data={data}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    valueFormat={(value) => `${Math.round((value * 100) / data.reduce((acc, curr) => acc + curr.value, 0))}%`}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
    activeOuterRadiusOffset={8}
    borderWidth={1}
    colors={["#57CC78", "#55DBDB", "#E2FF32", "#FEC102"]}
    borderColor={{
      from: "color",
      modifiers: [["darker", 0.2]],
    }}
    enableArcLinkLabels={false}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor="#333333"
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: "color" }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{
      from: "color",
      modifiers: [["darker", 2]],
    }}
    legends={[
      {
        anchor: "bottom",
        direction: "row",
        justify: false,
        translateX: -10,
        translateY: 40,
        itemsSpacing: 15,
        itemWidth: 84,
        itemHeight: 23,
        itemTextColor: "#999",
        itemDirection: "left-to-right",
        itemOpacity: 1,
        symbolSize: 11,
        symbolShape: "circle",
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "#000",
            },
          },
        ],
      },
    ]}
  />
);
