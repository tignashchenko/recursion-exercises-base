
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
  // Hint: Use visitAllNodes()
  // Your code here
};

module.exports = {
  visitAllNodes: visitAllNodes,
  flattenTreeToArray: flattenTreeToArray
};
