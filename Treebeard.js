import React, { PureComponent } from "react";
import { Treebeard } from "react-treebeard";

const data = {
  name: "root",
  toggled: true,
  children: [
    {
      name: "parent",
      children: [{ name: "child1" }, { name: "child2" }],
    },
    {
      name: "loading parent",
      loading: true,
      children: [],
    },
    {
      name: "parent",
      children: [
        {
          name: "nested parent",
          children: [{ name: "nested child 1" }, { name: "nested child 2" }],
        },
      ],
    },
  ],
};

class TreeExample extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { data };
    this.onToggle = this.onToggle.bind(this);
    this.setContent = props.content.bind(this);
  }

  onToggle(node, toggled) {
    const { cursor, data } = this.state;
    if (cursor) {
      this.setState(() => ({ cursor, active: false }));
    }
    node.active = true;
    if (node.children) {
      node.toggled = toggled;
    }
    if (!node.children) {
      this.props.content(node.name);
    }
    this.setState(() => ({ cursor: node, data: Object.assign({}, data) }));
  }

  render() {
    const { data } = this.state;
    return <Treebeard data={data} onToggle={this.onToggle} />;
  }
}

export default TreeExample;
