export const capitalizePerfumeComponents = (components: string[]) => {
  if (!components || components.length < 1) return "";
  return components
    .map(
      (component) =>
        component.slice(0, 1).toUpperCase() + component.slice(1).toLowerCase()
    )
    .join(" – ");
};
