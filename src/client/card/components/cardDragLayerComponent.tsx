import * as React from "react";
import { DragLayer } from "react-dnd";
import CardComponent from "./cardComponent";

const layerStyles = {
  position: "fixed",
  pointerEvents: "none",
  zIndex: 500100,
  left: 0,
  top: 0,
};

function getItemStyles(props: any) {
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
    opacity: 0.8,
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
export default class CustomDragLayer extends React.Component<any, {}> {
  public renderItem(type: any, item: any) {
    switch (type) {
      case "card":
        return (<CardComponent card={item.card}
                                isDragLayer={true}
                                hoveringAction={(h) => {}}
                                           displayEmptySubCard={false}
                                           displayEmptySubCardAction={() => {}}
                                           titleChanged={(newTitle: string) => {}}
                                           remove={() => {}}  />);
      default:
        return null;
    }
  }

  public render() {
    const { item, itemType, isDragging } = this.props;
    if (!isDragging) {
      return <div />;
    }

    return (
      <div style={layerStyles}>
        <div style={getItemStyles(this.props)}>
          <div style={{transform: "rotate(7deg)", background: "white"}}>
            {this.renderItem(itemType, item)}
          </div>
        </div>
      </div>
    );
  }
}
