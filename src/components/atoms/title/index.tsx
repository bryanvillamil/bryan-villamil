import { ContentTitle } from "./styledComponents";

interface titleProps {
  title: string;
}

export const Title = (props: titleProps) => {
  const { title } = props;

  return (
    <ContentTitle>
      <h2>$ls  {title}</h2>
    </ContentTitle>
  );
};