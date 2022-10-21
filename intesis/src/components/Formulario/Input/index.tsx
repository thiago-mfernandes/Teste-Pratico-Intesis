

interface InputProps {
  content: string;
  type: string;
  isChecked?: boolean;
  placeholder?: string;
}

export function CustomInput({content, type, isChecked, placeholder}: InputProps) {
  return (
    <label>
      {content}
      <input 
        type={type}
        checked={isChecked}
        placeholder={placeholder}
      />
    </label>
  );
}