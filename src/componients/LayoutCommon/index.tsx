import { FC, useState, useCallback } from "react";
import Button from "@mui/material/Button";
import { Data } from "../../types";

interface Props {
  data: Data[];
}

const LayoutCommon: FC<Props> = ({ data }) => {
  const [text, setText] = useState<Data | null>(null);
  const [listText, setListText] = useState<Data[]>(data);
  const [isShow, setIsShow] = useState(true);

  const onNextText = useCallback(() => {
    if (listText.length === 0) {
      setListText(data);
    }
    const randomIndex = Math.floor(Math.random() * listText.length);
    const selectedText = listText.splice(randomIndex, 1)[0];
    setText(selectedText);
    setIsShow(true);
  }, [listText, data]);

  return (
    <div className="w-full h-screen flex justify-center items-center space-x-4">
      <div className="flex flex-col gap-16 items-center">
        <p className="font-medium text-5xl">{listText.length}</p>
        <p className="font-bold text-9xl">{text?.label}</p>
        <div>
          {isShow || (
            <span className="font-medium text-3xl mr-[10px]">{text?.name}</span>
          )}
          <Button
            size="small"
            variant="contained"
            onClick={() => setIsShow(false)}
          >
            Show
          </Button>
        </div>
        <Button size="large" variant="contained" onClick={onNextText}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default LayoutCommon;
