import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import Logo from "../../static/ReScriptReactNative.svg";

const features = [
  {
    title: "React Native Core & More",
    imageUrl: "home/react-native-and-more.svg",
    description: (
      <>
        ReScript React Native cover the core of React Native, and lots of
        community modules, including React Navigation and most famous libraries.
      </>
    ),
  },
  {
    title: "Zero-cost bindings",
    imageUrl: "home/rescript.svg",
    description: (
      <>
        ReScript help us to produce code that directly hit React Native modules
        without any additional indirection. The bindings don't take the risk to
        introduce unecessary bugs.
      </>
    ),
  },
  {
    title: "Safe and sound",
    imageUrl: "home/safe.svg",
    description: (
      <>
        ReScript React Native allows you to avoid most of React red screens
        during development. Your code is secured before it runs thanks to
        ReScript compiler.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/")}
            >
              Get Started
            </Link>
          </div>
          <div className={styles.logoBackground}>
            <Logo width="150%" height="150%" style={{ fill: "#fff" }} />
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
