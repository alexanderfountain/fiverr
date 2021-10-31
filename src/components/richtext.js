import * as React from "react";
import { render } from "storyblok-rich-text-react-renderer";
const Richtext = ({ blok }) => (
  <React.Fragment>{render(blok.richtext)}</React.Fragment>
);

export default Richtext;
