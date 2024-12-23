import HTMLView from 'react-native-htmlview';

interface Props {
  source: string;
}
export const RenderHtml = (props: Props) => {
  const {source} = props;
  // @ts-ignore
  return <HTMLView value={source} />;
};
