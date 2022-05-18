export default function (context) {
  return {
    IfStatement(node) {
      if (!isBlock(node.consequent) || !isBlock(node.alternate)) {
        context.report({
          node: node,
          message: "请使用块包裹IF语句～"
        });
      }
    }
  };
}

function isBlock(node) {
  return node && "BlockStatement" === node.type;
}
