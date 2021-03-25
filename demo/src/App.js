import React, { useState } from "react";
import "./style.css";
import Accordion from "./Accordion";

function App() {
  const accordionData = [
    {
      title: "Section 1",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolor quos magni beatae voluptatem aliquid mollitia fuga. Ipsam obcaecati a aspernatur soluta cupiditate, tenetur sunt ratione nostrum laborum eaque qui debitis animi nam reprehenderit iure. Fugit perferendis nobis commodi laudantium?`,
    },
    {
      title: "Section 2",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus libero qui maiores, minus nisi, vitae pariatur non dolores commodi veritatis, reiciendis deleniti sit a ea earum saepe ab sint recusandae.`,
    },
    {
      title: "Section 3",
      content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas consequatur mollitia molestiae facilis ipsa reiciendis asperiores! Ullam labore temporibus suscipit modi, sint distinctio deserunt. Beatae, incidunt. Asperiores provident cum recusandae quisquam nulla placeat consequuntur, repudiandae quam nisi consequatur deserunt? Quasi doloremque voluptas quisquam voluptatem non laudantium asperiores officia?`,
    },
  ];

  return (
    <React.Fragment>
      <h1>React Accordion Demo</h1>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </React.Fragment>
  );
}

export default App;
