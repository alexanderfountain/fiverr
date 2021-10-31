/** @jsx jsx */
import { jsx } from "theme-ui"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image";
import useStoryblok from "../lib/storyblok";
import { getFluidGatsbyImage } from "gatsby-storyblok-image";

const Header = ({ header, location }) => {
// let story = header;
// console.log(story)
// story = useStoryblok(story, location);
console.log(header)
// if(story.content.header){
//  const fluidProps = getFluidGatsbyImage(story.content.header[0].logo.filename, {
//    maxWidth: 400,
//  });
// }
 const fluidProps = getFluidGatsbyImage(header.content.header[0].logo.filename, {
   maxWidth: 400,
 });

  return(
    <header>
                  <div
              sx={{
                maxWidth: ["400px", "800px", "1000px"],
                padding: ["15px 5%", "15px 5%", "15px 10%"],
                // margin: "0 auto",
                // display: ["flex", "flex", "null"],
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor:"rgba(0,0,0,0.8)"
              }}
            >
      <Img fluid={fluidProps} />
    <h2>next</h2>
    </div>
  </header>
  )

}

export default function MyHeader(props) {
  return (
    <StaticQuery
      query={graphql`
      query HeadingQuery {
        allStoryblokEntry(filter: {name: {eq: "Layout"}}) {
          nodes {
            content
          }
        }
      }
      `}
      render={data => <Header data={data} {...props} />}
    />
  )
}

// class Header extends React.Component {
//   constructor(props) {
//     super(props)
//     // this.state = { value: '' };
//     this.state = {
//       menuOpen: false,
//     }
//     this.toggleMenu = this.toggleMenu.bind(this)
//   }
//   toggleMenu() {
//     this.setState(prevState => ({
//       menuOpen: !prevState.menuOpen,
//     }))
//     console.log(this.state.menuOpen)
//   }
//   render() {
//     let story = pageContext.story;
//     story = useStoryblok(story, location);
//     return (
//       <StaticQuery
//         query={graphql`
//           query HeadingQuery {
//             allStoryblokEntry(filter: {name: {eq: "Layout"}}) {
//               nodes {
//                 content
//               }
//             }
//           }
//         `}
        
//         render={data => <Header data={data} {...props} />}
//       />
//     )
//   }
// }

// export default Header
