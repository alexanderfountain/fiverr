import * as React from "react";
import BackgroundImage from "gatsby-background-image";
import { getFluidGatsbyImage } from "gatsby-storyblok-image";
import Img from "gatsby-image";
import DynamicComponent from "../components/dynamicComponent";

function returnSection() {
  return "Test";
}
const ReturnBody = ({ blok }) => {
  console.log(blok);
  return <h3>section return body</h3>;
};
const SectionContainer = ({ blok }) => {
  if (blok.background_image) {
    const fluidProps = getFluidGatsbyImage(blok.background_image, {
      maxWidth: 1920,
    });
    const components = blok.body.map((blok_component) => {
      return (
        <DynamicComponent blok={blok_component} key={blok_component._uid} />
      );
    });
    return (
      <BackgroundImage Tag="section" fluid={fluidProps}>
        {components}
      </BackgroundImage>
    );
  }
};

const Section = ({ blok }) => {
  return <SectionContainer blok={blok}></SectionContainer>;
};

// const Page = ({ pageContext, location }) => {
//   let story = pageContext.story;
//   story = useStoryblok(story, location);

//   const components = story.content.body.map((blok) => {
//     return <DynamicComponent blok={blok} key={blok._uid} />;
//   });

export default Section;
