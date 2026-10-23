import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Heading from "../components/Heading";
import ArticleCard from "../components/ArticleCard";
import News1 from "../assets/news1.png";
import News2 from "../assets/news2.png";
import News3 from "../assets/news3.png";
import Avatar1 from "../assets/avatar1.png";
import Avatar2 from "../assets/avatar2.png";
import Avatar3 from "../assets/avatar3.png";

const Article = () => {
  return (
    <section className="py-24 bg-[#F9FBFC]">
      <Container>
        <Heading className="text-center" text="Recent News & Articles" />

        <Flex className="justify-between items-stretch mt-12">
          <ArticleCard
            image={News1}
            title="Where Should I Buy Next?"
            author="Carter Rosser"
            avatar={Avatar1}
            date="24/08/2021"
            text="From romantic getaways to adventurous hikes, find your next..."
          />
          <ArticleCard
            image={News2}
            title="Malesuada Fermentum Tortor"
            author="Carter Rosser"
            avatar={Avatar2}
            date="24/08/2021"
            text="From romantic getaways to adventurous hikes, find your next..."
          />
          <ArticleCard
            image={News3}
            title="Magna Malesuada"
            author="Carter Rosser"
            avatar={Avatar3}
            date="24/08/2021"
            text="From romantic getaways to adventurous hikes, find your next..."
          />
        </Flex>
      </Container>
    </section>
  );
};

export default Article;

