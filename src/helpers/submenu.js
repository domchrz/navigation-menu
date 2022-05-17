export const getSiblings = (name, children) => {
  let siblings = [];
  children.forEach(child => {
    if (!child.children?.length) return;
    if (children.some(child => child.name === name) && child.name !== name) {
      siblings = [...siblings, child];
    } else {
      siblings = [...siblings, ...getSiblings(name, child.children)];
    }
  });
  return siblings;
};

export const getNested = children => {
  let nested = [];
  children.forEach(child => {
    if (child.children?.length) {
      nested = [...nested, child];
      getNested(child.children);
    }
  });
  return nested;
};

export const getSiblingTrees = (name, children) => {
  const siblings = getSiblings(name, children);
  let siblingTrees = [];
  siblings.forEach(
    sibling => (siblingTrees = [...siblings, ...getNested(sibling.children)])
  );
  return siblingTrees;
};
