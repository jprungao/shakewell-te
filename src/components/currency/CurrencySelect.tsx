import CurrencyData from "currency-codes/data";
import React from "react";
import Select from "react-select";

// Props
interface CurrencySelectProps {
  value: string;
  onChange: (currency: string) => void;
}

interface Currency {
  code: string;
  currency: string;
}

const Currency: Currency[] = CurrencyData;

// Constants
export const DEFAULT_CURRENCY = "USD - US Dollar";

// Component
const CurrencySelect: React.FC<CurrencySelectProps> = ({
  value = DEFAULT_CURRENCY,
  onChange = () => {},
}) => {
  // Prepare data
  const data = Currency.map(({ code, currency }) => ({
    value: `${code} - ${currency}`,
    label: `${code} - ${currency}`,
  }));
  const defaultValue = { value: value, label: value };

  // Render
  return (
    <div className="input-group">
      <label>
        <span>Currency</span>
        <Select
          options={data}
          defaultValue={defaultValue}
          onChange={(newValue) => {
            if (newValue) {
              onChange(newValue.value);
            }
          }}
        />
      </label>
    </div>
  );
};

export default CurrencySelect;