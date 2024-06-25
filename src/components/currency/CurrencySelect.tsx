import CurrencyData from "currency-codes/data";
import React from "react";
import Select from "react-select";
import { Option } from "../../interface/Option";

// Props
interface CurrencySelectProps {
  value?: string;
  onChange?: (currency: string) => void;
}

interface Currency {
  code: string;
  currency: string;
}


const Currency: Currency[] = CurrencyData
// Constants
export const DEFAULT_CURRENCY = "USD - US Dollar";

// Component
const CurrencySelect: React.FC<CurrencySelectProps> = ({
  value = DEFAULT_CURRENCY,
  onChange = () => {},
}) => {
  // Prepare data
  const data = Currency.map(({ code, currency }) => {
    return {
      value: code + " - " + currency,
      label: code + " - " + currency,
    };
  });
  const defaultValue = { value: value, label: value };

  // Render
  return (
    <div>
      <label>
        Currency
        <Select
          options={data}
          defaultValue={defaultValue}
          onChange={(newValue: Option | null) => {
            if(newValue) {
              onChange(newValue.value);
            }
          }}
        />
      </label>
    </div>
  );
};

export default CurrencySelect;
