import ISO_6391_Languages from "iso-639-1";

import Select from "react-select";
import { Option } from "../../interface/Option";

// Props
interface LanguageSelectProps {
  language?: string;
  onChange?: (language: string) => void;
}

// Constants
export const DEFAULT_LANGUAGE = "English - English";

// Component
const LanguageSelect = ({
  language = DEFAULT_LANGUAGE,
  onChange = () => {},
}: LanguageSelectProps) => {
  // Prepare data
  const data = ISO_6391_Languages.getLanguages([
    "en",
    "de",
    "pl",
    "fr",
    "it",
    "es",
  ]).map(({ name, nativeName }) => {
    return {
      value: name + " - " + nativeName,
      label: name + " - " + nativeName,
    };
  });
  const defaultValue = { value: language, label: language };

  // Render
  return (
    <div className="input-group">
      <label>
        <span>Language</span>
        <Select
          options={data}
          defaultValue={defaultValue}
          onChange={(newValue: Option | null) => {
            if (newValue) {
              onChange(newValue.value);
            }
          }}
        />
      </label>
    </div>
  );
};

export default LanguageSelect;