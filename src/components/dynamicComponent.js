import SbEditable from "storyblok-react";
import Grid from "./grid";
import Section from "./section";
import Richtext from "./richtext";
import React from "react";

const Components = {
  grid: Grid,
  section: Section,
  richtext: Richtext,
};

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component];
    console.log(blok);
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
