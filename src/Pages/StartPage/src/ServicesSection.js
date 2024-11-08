import React from "react";
import { servicesSectionStyles } from "./styles";
import { Button } from "../../../Components/Button";
import { motion } from "framer-motion";
import { useGlobals } from "../../../Providers/GlobalsProvider";
import { ResponsiveContainer, Treemap } from "recharts";
import LazyLoad from "../../../Components/LazyLoading";

const { Wrapper, SectionHeader, SectionSubHeader } = servicesSectionStyles;
export default function ServicesSection() {
      const { t } = useGlobals();
      return (
            <Wrapper>
                  <SectionHeader initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { delay: 0.1 } }}>
                        {t(`Our Services`)}
                  </SectionHeader>
                  <SectionSubHeader initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { delay: 0.2 } }}>
                        {t(
                              `we specialize in crafting tailored digital solutions to propel your business forward. Whether you need a sleek mobile app, a dynamic website, or robust desktop software, our team of experts is here to bring your vision to life`
                        )}
                  </SectionSubHeader>
                  <motion.a
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1, transition: { delay: 0.3 } }}
                        href="#web-section"
                  >
                        <Button $big>Explore Now</Button>
                  </motion.a>
                  <LazyLoad
                        threshold={0.3}
                        style={{ marginTop: "4rem", height: 300, opacity: 1, width: "100%", borderRadius: 40, overflow: "hidden" }}
                  >
                        {true && (
                              <ResponsiveContainer width="100%" height="100%">
                                    <Treemap
                                          data={treemapData}
                                          dataKey="size"
                                          ratio={4 / 3}
                                          stroke="#fff"
                                          fill="#8884d8"
                                          content={<CustomizedContent colors={["#8884d8", "#83a6ed", "#8dd1e1", "#82ca9d", "#a4de6c"]} />}
                                    />
                              </ResponsiveContainer>
                        )}
                  </LazyLoad>
            </Wrapper>
      );
}

const treemapData = [
      {
            //
            name: "",
            children: [
                  { name: "artificial intelligence", size: 40000 },
                  { name: "Deep Learning systems", size: 40000 },
            ],
      },
      {
            name: "",
            children: [{ name: "Web Development", size: 50000 }],
      },
      {
            name: "Mobile Development",
            children: [{ name: "Mobile Development", size: 30000 }],
      },
      {
            name: "Desktop Development",
            children: [{ name: "Desktop Development", size: 30000 }],
      },
      {
            name: "System  Administration",
            children: [{ name: "System  Administration", size: 30000 }],
      },
      {
            name: "Home Automation",
            children: [{ name: "Home Automation", size: 30000 }],
      },
];

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
                  {true ? (
                        <text x={x + width / 2} y={y + height / 2 + 7} textAnchor="middle" fill="#fff" fontSize={14}>
                              {name}
                        </text>
                  ) : null}
            </g>
      );
};
