import React from "react";
import styled from "styled-components";
import { Grid, GridSection } from "./Gridlayout";
import logo from "../Assets/images/logo.svg";
import { Link } from "react-router-dom";
import GradientGearIcon from "../Assets/images/start_page/asd";

export default function FooterLAyout() {
      return (
            <>
                  <div style={{ background: "#ffffffcc", height: "50vh" }}></div>
                  <Wrapper>
                        <Grid>
                              <GridSection $col="4">
                                    <div
                                          style={{
                                                width: "100%",
                                                height: "100%",
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                borderRight: "1px solid #aaaaaa77",
                                                padding: 60,
                                          }}
                                    >
                                          <GradientGearIcon />
                                    </div>
                              </GridSection>
                              <GridSection $col="2">
                                    <div
                                          style={{
                                                padding: 20,
                                                paddingTop: 120,
                                                color: "#fff",
                                                width: "100%",
                                                height: "100%",

                                                display: "flex",
                                                flexDirection: "column",
                                                gap: 20,
                                                borderRight: "1px solid #aaaaaa77",
                                          }}
                                    >
                                          <FooterLink to={"/"}>Home</FooterLink>
                                          <FooterLink to={"/"}>Web Development</FooterLink>
                                          <FooterLink to={"/"}>Mobile App Development</FooterLink>
                                          <FooterLink to={"/"}>Desktop App Development</FooterLink>
                                          <FooterLink to={"/"}>Home Automation</FooterLink>
                                    </div>
                              </GridSection>
                              <GridSection $col="2">
                                    <div
                                          style={{
                                                padding: 20,
                                                color: "#fff",
                                                width: "100%",
                                                display: "flex",
                                                height: "100%",

                                                flexDirection: "column",
                                                gap: 20,
                                                borderRight: "1px solid #aaaaaa77",
                                          }}
                                    >
                                          <FooterLink to={"/"}>Why Choose Us</FooterLink>
                                          <FooterLink to={"/"}>Features</FooterLink>
                                    </div>
                              </GridSection>
                              <GridSection $col="2" style={{ color: "#fff" }}>
                                    <div
                                          style={{
                                                padding: 20,
                                                color: "#fff",
                                                width: "100%",
                                                display: "flex",
                                                height: "100%",

                                                flexDirection: "column",
                                                gap: 20,
                                                borderRight: "1px solid #aaaaaa77",
                                          }}
                                    >
                                          <FooterLink to={"/"}>Contact Us</FooterLink>
                                          <FooterLink to={"/"}>How To Start</FooterLink>
                                    </div>
                              </GridSection>
                              <GridSection $col="2" style={{ color: "#fff" }}>
                                    <div
                                          style={{
                                                padding: 20,
                                                color: "#fff",
                                                width: "100%",
                                                display: "flex",
                                                height: "100%",

                                                flexDirection: "column",
                                                gap: 20,
                                          }}
                                    >
                                          <FooterLink to={"/"}>About</FooterLink>
                                          <FooterLink to={"/"}>Skills</FooterLink>
                                    </div>
                              </GridSection>
                        </Grid>
                  </Wrapper>
            </>
      );
}

const Wrapper = styled.footer`
      min-height: 50vh;
      background-color: #000000aa;

      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#020024",endColorstr="#090979",GradientType=1);
      padding: 2rem;
      border-radius: 40px 40px 0 0;
`;

const FooterLink = styled(Link)`
      text-decoration: none;
      color: #f2f2f2;
      font-size: 1.7rem;
      font-weight: 800;
`;
