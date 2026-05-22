import { FiCheckSquare } from "react-icons/fi";
import { GoClock } from "react-icons/go";
import { TfiReload } from "react-icons/tfi";

const PaymentCard = ({ gigData, days, isPending }) => {
  if (isPending || !gigData) return null;

  return (
    <div className="max-w-[360px] rounded-xl border p-2 flex flex-col space-y-2">
      <span className="flex justify-between">
        <h1>{gigData.title}</h1>
        <p>${gigData.price}</p>
      </span>
      <p className="text-sm">{gigData.desc}</p>
      <span className="flex justify-between">
        <span className="flex items-center gap-1">
          <GoClock />
          <h1>{days} days</h1>
        </span>
        <span className="flex items-center gap-1">
          <TfiReload />
          <h1>{gigData.revisionNumber} Revisions</h1>
        </span>
      </span>
      <ul>
        {(gigData.Features || []).map((item, index) => (
          <li key={index} className="flex items-center gap-1 text-green-500">
            <FiCheckSquare />
            <span className="text-gray-700 text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentCard;
