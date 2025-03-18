import "../App.css";

const CriticScore = ({ score }) => {
  let backgroundColor =
    score > 75 ? "bg-green-600" : score > 60 ? "bg-yellow-300" : "bg-red-800";
  let textColor =
    score > 75
      ? "text-white-600 "
      : score > 60
      ? "text-yellow-300"
      : "text-red-600";
  return (
    <span
      className={`font-bold scour ${backgroundColor} ${textColor}  dark:${backgroundColor}  dark:${textColor} text-sm font-medium me-2 px-2.5 py-0.5 rounded `}
    >
      {score}
    </span>
  );
};

export default CriticScore;
