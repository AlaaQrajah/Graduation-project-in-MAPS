import "../App.css";

const CriticScore = ({ score }) => {
  let backgroundColor =
    score > 75 ? "bg-orange-600" : score > 60 ? "bg-yellow-300" : "bg-red-800";
  let textColor =
    score > 75
      ? "text-white-600"
      : score > 60
      ? "text-yellow-300"
      : "text-red-600";
  return (
    <span
      className={`scour ${backgroundColor} ${textColor}  dark:${backgroundColor}  dark:${textColor}`}
    >
      {score}
    </span>
  );
};

export default CriticScore;
