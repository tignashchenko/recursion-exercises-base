
const visitAllNodes = function(node, callback) {
  if(node.childNodes) {
    let children = node.childNodes;
    for(let i = 0; i < children.length; i++) {
      visitAllNodes(children[i], callback);
    }
  }
  callback(node);
};

const flattenTreeToArray = function(node) {
  const result = [];

 if(node.childNodes) {
    const pushElementToArray = (node) => result.push(node);
    for(let i = 0, children = node.childNodes; i < children.length; i++) {
      visitAllNodes(children[i], pushElementToArray);
    }
  }
  result.push(node);
  return result;
};

module.exports = {
  visitAllNodes: visitAllNodes,
  flattenTreeToArray: flattenTreeToArray
};
