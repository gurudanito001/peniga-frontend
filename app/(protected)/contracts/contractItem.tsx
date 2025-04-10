import SmallScreenContracts from "./smallScreen";
import LargeScreenContracts from "./largeScreen";

const ContractItem = () => {
  return (
    <div className="p-4">
      {/* Small Screen */}
      <div className="lg:hidden">
        <SmallScreenContracts />
      </div>
      
      {/* Large Screen */}
      <div className="hidden lg:block">
        <LargeScreenContracts />
      </div>
    </div>
  );
};

export default ContractItem;