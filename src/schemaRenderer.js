import React from "react";
import ComplexHeader from "./ComplexHeader";

const renderNode = (node) => {
  switch (node.type) {
    case "header":
      return (
        <h1 key={node.content} {...node.props}>
          {node.content}
        </h1>
      );
    case "image":
      return (
        <img
          key={node.props.url}
          src={node.props.url}
          alt={node.props.alt || "image"}
        />
      );
    case "complex-header":
      return <ComplexHeader />;
    default:
      return null;
  }
};

const SchemaRenderer = ({ schema }) => {
  console.log(schema);
  return <div>{schema.map((node) => renderNode(node))}</div>;
};

export default SchemaRenderer;
