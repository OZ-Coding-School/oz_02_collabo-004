export const RandomColor = () => {
  const colors = [
    '#00cd52', 
    '#5200ff', 
    '#eb00ff', 
    '#00ffff', 
    '#eb6900', 
    '#61e80e', 
    '#061fff'
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};