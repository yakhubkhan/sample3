import FolderTree, { testData } from "react-folder-tree";

const Basictree = () => {
  const onTreeStateChange = (state) => console.log("tree state: ", state);

  return <FolderTree data={testData} onChange={onTreeStateChange} />;
};

export default Basictree;
