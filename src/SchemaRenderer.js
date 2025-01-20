import React from "react";

const renderNode = (node) => {
  switch (node.type) {
    case "h1":
      return <h1 key={node.content}>{node.content}</h1>;
    case "image":
      return (
        <img
          key={node.props.url}
          src={node.props.url}
          alt={node.props.alt || "image"}
        />
      );
    default:
      return null;
  }
};

const SchemaRenderer = ({ schema }) => {
  console.log(schema);
  return <div>{schema.map((node) => renderNode(node))}</div>;
};

export default SchemaRenderer;
