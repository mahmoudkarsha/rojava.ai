import React from "react";
import { developmentsSectionStyles } from "./styles";
import { Button } from "../../../Components/Button";
import { Grid, GridSection } from "../../../Layouts/Gridlayout";
import { motion } from "framer-motion";
import { useGlobals } from "../../../Providers/GlobalsProvider";
import getFadeInProps from "../../../Assets/other/getFadeInProps";
import WebDashboard from "./WebDashboard";
const { Wrapper, SectionHeader, SectionSubHeader, SectionImage, FeatureCard, FeatureCardHeader } = developmentsSectionStyles;

export default function DevelopmentsSection({ data = {} }) {
      const { presentaion, features } = data;
      const { t } = useGlobals();
      return (
            <>
                  <Wrapper id="web-section">
                        <motion.div
                              style={{
                                    height: "100%",
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                              }}
                              {...getFadeInProps("view", "left", 0.2, 0.3)}
                        >
                              <SectionHeader>{t(presentaion.header)}</SectionHeader>
                              {presentaion.sub_headers.map((sub_header, i) => (
                                    <SectionSubHeader key={i}>{t(sub_header)}</SectionSubHeader>
                              ))}

                              <motion.div
                                    {...getFadeInProps("view", "left", 0.4, 0.3)}
                                    style={{
                                          display: "flex",
                                          gap: "2rem",
                                          flexWrap: "wrap",
                                          marginTop: 60,
                                    }}
                              >
                                    {features.data.map((f) => {
                                          return (
                                                <FeatureCard key={f.header}>
                                                      <FeatureCardHeader>{t(f.header)}</FeatureCardHeader>
                                                </FeatureCard>
                                          );
                                    })}
                              </motion.div>
                              <motion.a href={"#"} {...getFadeInProps("view", "left", 0.6, 0.3)}>
                                    <Button $big $mt="6rem">
                                          {t(`Read more`)}
                                    </Button>
                              </motion.a>
                        </motion.div>
                  </Wrapper>
                  <div style={{ borderRadius: 40, overflow: "hidden", padding: 5 }}>
                        <Grid style={{ borderRadius: 40, overflow: "hidden" }}>
                              <GridSection
                                    $col="9"
                                    style={{
                                          backgroundColor: features.hide_overlay ? "#fff" : "#1A1A4Baa",
                                          padding: "0",
                                    }}
                              >
                                    <WebDashboard />
                              </GridSection>
                              <GridSection
                                    $col="3"
                                    style={{
                                          backgroundColor: features.hide_overlay ? "#fff" : "#1A1A4Baa",
                                          padding: "2rem 2rem",
                                    }}
                              >
                                    {features.data.map((f, i) => {
                                          return (
                                                <div style={{ minHeight: "14rem" }}>
                                                      <SectionHeader
                                                            style={{ fontSize: "3rem" }}
                                                            {...getFadeInProps("view", "left", 0.2 * i, 0.3)}
                                                            key={f.header}
                                                      >
                                                            {t(f.header)}
                                                      </SectionHeader>
                                                      <SectionSubHeader
                                                            {...getFadeInProps("view", "left", 0.2 * i, 0.3)}
                                                            key={f.sub_header}
                                                            style={{
                                                                  color: features.hide_overlay ? "#444" : "#f3f3f3",
                                                                  marginTop: 0,
                                                                  marginBottom: i === features.data.length - 1 ? 0 : 40,
                                                                  fontSize: "1.6rem",
                                                            }}
                                                      >
                                                            {t(f.sub_header)}
                                                      </SectionSubHeader>
                                                </div>
                                          );
                                    })}
                              </GridSection>
                        </Grid>
                  </div>
            </>
      );
}
