import { useEffect } from "react";

interface Props {
  title: string;
}

const PageTitle = ({ title }: Props) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return null;
};

export default PageTitle;
