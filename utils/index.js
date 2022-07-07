exports.getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

exports.delay = (timeout = 10) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};
