import React from "react";
import { connect } from "frontity";
import HoverLink from "../utitlity/HoverLink";
import Article from "../utitlity/Article";
import CardTitle from "../utitlity/cardTitle";
import CardContent from "../utitlity/cardContent";
import FeaturedMedia from "../featured-media";
import Tags from '../meta/tags';

/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
  const ListItem = ({ state, item, imageHeight }) => {
  
  return (
            <Article height={(parseInt(imageHeight) + 100) + "px"} className="mb-2">
                <div>
                  <HoverLink link={item.link}>
                  {state.theme.featured.showOnList && (
                    <FeaturedMedia height={imageHeight+"px"} id={item.featured_media} />
                  )}
                  </HoverLink>
                </div>
                <CardContent>
                  <HoverLink link={item.link}>
                    <CardTitle title={item.title.rendered} />
                  </HoverLink>
                  { item.tags && <Tags tags={item.tags} /> }
                </CardContent>
            </Article>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(ListItem);