import React, { Component, PropTypes } from "react";
import { DragLayer } from "react-dnd";
import CardComponent from "./cardComponent";

const layerStyles = {
  position: "fixed",
  pointerEvents: "none",
  zIndex: 100,
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
};

function getItemStyles(props) {
  const { initialOffset, currentOffset } = props;
  if (!initialOffset || !currentOffset) {
    return {
      display: "none",
    };
  }

  let { x, y } = currentOffset;
  const transform = `translate(${x}px, ${y}px)`;
  return {
    transform,
    WebkitTransform: transform,
  };
}

@(DragLayer(monitor => ({
  item: monitor.getItem(),
  itemType: monitor.getItemType(),
  initialOffset: monitor.getInitialSourceClientOffset(),
  currentOffset: monitor.getSourceClientOffset(),
  isDragging: monitor.isDragging(),
})) as any)
export default class CustomDragLayer extends Component<any, {}> {
  public renderItem(type, item) {
    switch (type) {
      case "card":
        return (<CardComponent card={item}
                                           displayEmptySubCard={false}
                                           displayEmptySubCardAction={() => {}}
                                           titleChanged={(newTitle: string) => {}}
                                           remove={() => {}}  />);
      default:
        return null;
    }
  }

  render() {
    const { item, itemType, isDragging } = this.props;

    if (!isDragging) {
      return null;
    }

    return (
      <div style={layerStyles}>
        <div style={getItemStyles(this.props)}>
          {this.renderItem(itemType, item)}
        </div>
      </div>
    );
  }
}
