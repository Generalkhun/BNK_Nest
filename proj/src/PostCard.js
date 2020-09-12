import React from "react";
import { Feed } from "semantic-ui-react";
import "./index.css";
import { Label } from "semantic-ui-react";

  function PostCard(props){

    return(
        <div>
            <Feed.Event
          image={{src:'https://rlv.zcache.ca/swallow_silhouette_postcard-r66d3c357e5f048fb97386aab3f35e8f9_vgbaq_8byvr_307.jpg'}}
          date={props.date}
          summary={
            <p>
              <b>{props.title}</b>
            </p>
          }
          extraText={
            <p>
              {props.content.substring(0,30) + "..."}
            </p>
          }
        />
         
        <div style={{ paddingLeft: 50 }}>
        <Label as="a" color="red" tag>
            {props.tagsDistrict.replace('สำนักงานเขต','')}
          </Label>
          {props.tagsWorkPlan&&
          <Label as="a" color="orange" tag>
            {props.tagsWorkPlan}
          </Label>}
          {props.tagsNonDistrict&&
          <Label as="a" color="green" tag>
            {props.tagsNonDistrict}
          </Label>
          }
        </div>
        </div>
    )

  }

  export  default PostCard


