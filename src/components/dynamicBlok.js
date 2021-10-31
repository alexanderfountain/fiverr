import SbEditable from "storyblok-react";
import Teaser from "./Teaser";
import Grid from "./grid";
import Section from "./section";
import React from "react";

const Components = {
  teaser: Teaser,
  grid: Grid,
  section: Section,
};

const DynamicComponent = ({ blok }) => {
  console.log(blok);
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component];
    return (
      <SbEditable content={blok}>
        <Component blok={blok} />
      </SbEditable>
    );
  }
  return (
    <p>
      The component <strong>{blok.component}</strong> has not been created yet.
    </p>
  );
};

export default DynamicComponent;
