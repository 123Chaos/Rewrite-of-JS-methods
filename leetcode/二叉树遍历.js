const preOrder = function (root, res) {
  if (root == null) return;
  res.push(root.val);
  preOrder(root.left, res);
  preOrder(root.right, res);
};
