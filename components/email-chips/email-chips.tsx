import React, { FC, useState, useEffect } from "react";
import Image from "next/image";
import deleteButton from "../../images/delete.svg";
interface EmailChipsProps {
  getEmails: (emails: string[]) => void;
}

const EmailChips: FC<EmailChipsProps> = ({ getEmails }) => {
  const [value, setValue] = useState<string>("");
  const [items, setItems] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getEmails(items);
  }, [getEmails, items]);

  const handleKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (["Enter", "Tab", ","].includes(evt.key)) {
      evt.preventDefault();

      const valueTemp = value.trim();

      if (valueTemp && isValid(value)) {
        setItems([...items, value]);
        setValue("");
      }
    }
  };

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
    setError(null);
  };

  const handleDelete = (item: string) => {
    setItems(items.filter((i) => i !== item));
  };

  const handlePaste = (evt: React.ClipboardEvent<HTMLInputElement>) => {
    evt.preventDefault();

    var paste = evt.clipboardData.getData("text");
    var emails = paste.match(/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/g);

    if (emails) {
      const toBeAdded = emails.filter((email) => !isInList(email));
      const allEmails = [...items, ...toBeAdded];

      setItems([...items, ...allEmails]);
    }
  };

  const isValid = (email: string) => {
    let error = null;

    if (isInList(email)) {
      error = `${email} has already been added.`;
    }

    if (!isEmail(email)) {
      error = `${email} is not a valid email address.`;
    }

    if (error) {
      setError(error);

      return false;
    }

    return true;
  };

  const isInList = (email: string) => {
    if (!items) {
      return;
    }
    return items.includes(email);
  };

  const isEmail = (email: string) => {
    return /[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/.test(email);
  };

  return (
    <>
      <div className="p-2  border min-h-[44px] rounded-lg overflow-hidden flex items-center flex-wrap">
        {items &&
          items.map((item) => (
            <div
              className="px-3 py-2 m-1 bg-bg-light rounded-lg mr-2 flex items-center flex-nowrap text-xs"
              key={item}>
              {item}
              <button
                type="button"
                className="ml-2"
                onClick={() => handleDelete(item)}>
                <Image
                  src={deleteButton.src}
                  alt="Delete"
                  width={8}
                  height={8}
                />
              </button>
            </div>
          ))}

        <input
          className={
            "block flex-1  min-w-[100px] outline-0 focus:outline-0 text-xs mx-1" +
            (error && " text-red")
          }
          value={value}
          placeholder="Add an email"
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          onPaste={handlePaste}
        />
      </div>

      {error && <p className="text-red-600 mt-2">{error}</p>}
    </>
  );
};

export default EmailChips;
