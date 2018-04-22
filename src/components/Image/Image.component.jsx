import React from 'react';
import { IProptypes } from "./interface";


/**
 * The props of Image Component
 * @param {string} props.alt The label of the Image Component shown when image is not rendered properly.
 * @param {Array} props.src src of image
 * @param {string} props.size The size of the image
 */

class Image extends React.Component<IProptypes, {}> {
    render() {
        const props = this.props;
      return (
<div>
    <img
        src={props.src}
        width={props.size?props.size: "70px"}
        height={props.size?props.size: "70px"}
        alt={props.alt|"altLabel"}
        style={props.style}
    />
</div>


      );
    }
}
export {Image};