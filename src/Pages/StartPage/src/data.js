//web section
import webSectionImage from "../../../Assets/images/start_page/web-development-svg.svg";
import webSectionFeaturesImage from "../../../Assets/images/start_page/dashboard.png";
// mobile section
import mobileSectionImage from "../../../Assets/images/start_page/mobile-development-svg.svg";
import mobileSectionFeaturesImage from "../../../Assets/images/start_page/mobile-app.png";
//sesktop section
import desktopSectionImage from "../../../Assets/images/start_page/desktop-development-svg.svg";
import desktopSectionFeaturesImage from "../../../Assets/images/start_page/desktop-app-bg.png";
//automation section
import automationSectionImage from "../../../Assets/images/start_page/home-automation-svg.svg";
import automationSectionFeaturesImage from "../../../Assets/images/start_page/automation.jpg";

export const webSection = {
      presentaion: {
            header: "Web Development",
            sub_headers: [
                  "In today's digital age, a strong web presence is crucial. Our web development team uses React to build responsive, intuitive, and engaging websites. From simple landing pages to complex web applications, we deliver solutions that not only look great but also perform flawlessly.",
            ],
            image: webSectionImage,
      },
      features: {
            image: webSectionFeaturesImage,
            data: [
                  {
                        header: "Intuitive Interface",
                        sub_header: "User-friendly design that makes it easy to navigate and understand data.",
                  },
                  {
                        header: "Mobile Accessibility",
                        sub_header: "Monitor your business from anywhere, at any time.",
                  },
                  {
                        header: "Real-Time Data Monitoring",
                        sub_header: "Immediate insights into user behavior, sales trends, and system performance.",
                  },
                  {
                        header: "Alerts and Notifications",
                        sub_header: "Stay informed and take action promptly.",
                  },
                  {
                        header: "Customizable Reports",
                        sub_header:
                              "Generate detailed reports tailored to your business requirements and Export data in various formats, including PDF, Excel, and CSV.",
                  },
            ],
      },
};

export const mobileSection = {
      presentaion: {
            header: "Mobile App Development",
            sub_headers: [
                  "Our mobile app development services leverage the power of React Native to create high-performance, cross-platform applications. We ensure seamless user experiences and functionality across both iOS and Android devices, helping you reach a broader audience with a single codebase.",
            ],
            image: mobileSectionImage,
      },
      features: {
            image: mobileSectionFeaturesImage,
            data: [
                  {
                        header: "Cross-Platform Excellence",
                        sub_header:
                              "Our React Native mobile apps offer seamless functionality on both iOS and Android platforms. With a single codebase, we ensure a consistent user experience across different devices, reducing development time and costs.",
                  },
                  {
                        header: "Native-Like Performance",
                        sub_header:
                              "Experience the speed and responsiveness of native apps. React Native utilizes native components and APIs to deliver superior performance, ensuring your app runs smoothly and efficiently, handling even the most demanding tasks.",
                  },
                  {
                        header: "Beautiful and Intuitive Design",
                        sub_header:
                              "Our apps feature rich, customizable UI components that create visually appealing and user-friendly interfaces. We prioritize design excellence to ensure that your app not only looks great but also provides an intuitive user experience.",
                  },
                  {
                        header: "Reliable and Secure",
                        sub_header:
                              "Our apps are built with security in mind, employing best practices to protect user data and ensure app integrity. You can trust that your app will be reliable and secure, providing peace of mind for both you and your users.",
                  },
            ],
      },
};

export const desktopSection = {
      presentaion: {
            header: "Desktop Development",
            sub_headers: [
                  "For businesses that require powerful desktop applications, we offer development services with Electron.js. This allows us to create cross-platform desktop apps with the efficiency of web technologies and the performance of native applications, providing your users with reliable and feature-rich software.",
            ],
            image: desktopSectionImage,
      },
      features: {
            image: desktopSectionFeaturesImage,
            data: [
                  {
                        header: "Regular Security Updates",
                        sub_header:
                              "Our applications receive frequent updates to address potential vulnerabilities and enhance security measures continuously.",
                  },
                  {
                        header: "Interactive Components",
                        sub_header:
                              "Utilizing frameworks like React, we create dynamic and engaging user interfaces that enhance user interaction and satisfaction.",
                  },
                  {
                        header: "Customizable Themes",
                        sub_header:
                              "Users can personalize their experience with a range of themes and layouts, making the application feel tailored to their preferences.",
                  },
                  {
                        header: "Attention to Detail",
                        sub_header:
                              "Every element, from icons to animations, is crafted with precision to ensure a cohesive and polished look.",
                  },
            ],
      },
};

export const automationSection = {
      presentaion: {
            header: "Home Automation",
            sub_headers: [
                  "Home automation is revolutionizing the way we interact with our living spaces. By integrating advanced technology and smart devices, we create a connected, convenient, and efficient home environment that adapts to your needs and preferences.",
                  "With advancements in wireless technology, installing and setting up a home automation system is easier than ever. Our expert team provides professional installation services, ensuring that your system is configured correctly and optimized for your home. Enjoy peace of mind knowing that your smart home is in capable hands.",
            ],
            image: automationSectionImage,
      },
      features: {
            hide_overlay: false,
            image: automationSectionFeaturesImage,
            data: [
                  {
                        header: "Seamless Integration",
                        sub_header:
                              "Modern home automation systems are designed to work together seamlessly. Whether you're using devices from different manufacturers or expanding your system over time, our solutions ensure smooth integration and interoperability.",
                  },
                  {
                        header: "Convenience and Control",
                        sub_header:
                              "Home automation allows you to control various aspects of your home with ease, using a smartphone, tablet, or voice commands. From lighting and climate control to security systems and appliances, you can manage your home environment effortlessly, no matter where you are.",
                  },
                  {
                        header: "Future-Ready Technology",
                        sub_header:
                              "Investing in home automation prepares your home for the future. As technology continues to evolve, your smart home system can be easily updated and expanded to incorporate new devices and features, ensuring that your home remains at the cutting edge of innovation.",
                  },
                  {
                        header: "Smart Appliances",
                        sub_header:
                              "Integrate your kitchen and household appliances into your smart home system for greater convenience and efficiency.",
                  },
            ],
      },
};
