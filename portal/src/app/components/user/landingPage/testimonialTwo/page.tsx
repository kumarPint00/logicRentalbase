"use client";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const TestimonialTwo = () => {
  return (
    <section className="testimonialTwo">
      <Carousel
        showThumbs={false}
        swipeable={true}
        showIndicators={false}
        showStatus={false}
        autoPlay={true}
        infiniteLoop
        interval={3000}
        showArrows={true}
        transitionTime={1000}
      >
        <div className="carousel-item">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </div>
        <div className="carousel-item">
          <h1>slide 2</h1>
        </div>
        <div className="carousel-item">
          <h1>slide 3</h1>
        </div>
        <div className="carousel-item">
          <h1>slide 4</h1>
        </div>
      </Carousel>
    </section>
  );
};

export default TestimonialTwo;
