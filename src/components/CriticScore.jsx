const CriticScore = ({ score }) => {
  let backgroundColor =
    score > 75 ? "bg-orange-600" : score > 60 ? "bg-yellow-300" : "";
  let textColor = score > 75 ? "text-white-600" : score > 60 ? "text-yellow-300" : "";
  return (
    <span
      className={`text-gray-50 ${backgroundColor} ${textColor} text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:${backgroundColor}  dark:${textColor}`}
    >
      {score}
    </span>
  );
};

export default CriticScore;
