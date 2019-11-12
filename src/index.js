const expBuild = ({
  upper = false,
  lower = false,
  number = false,
  symbol = false,
  length = 0
} = {}) => {
  const start = "^";
  const upperExp = upper ? "(?=.*?[A-Z])" : "";
  const lowerExp = lower ? "(?=.*?[a-z])" : "";
  const numberExp = number ? "(?=.*?[0-9])" : "";
  const symbolExp = symbol ? "(?=.*?[#?!@$%^&*-])" : "";
  const lengthExp = `.{${length},}`;
  const end = "$";
  return new RegExp(
    `${start}${upperExp}${lowerExp}${numberExp}${symbolExp}${lengthExp}${end}`
  );
};
typeof window !== "undefined"
  ? (window.expBuild = expBuild)
  : (module.defaults = expBuild);
