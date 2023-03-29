const subsets = function (nums) {
  const res = [];
  const recursion = (level, nums, arr = []) => {
    if (level === nums.length) {
      res.push(arr);
      return;
    }
    recursion(level + 1, nums, arr.concat(nums[level]));
    recursion(level + 1, nums, arr);
  };
  recursion(0, nums, []);
  return res;
};

console.log(subsets([1, 2, 3]));
