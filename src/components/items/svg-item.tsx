import {SvgStatic} from '~/assets/svgs';

interface Props {
  name: any;
  width?: number;
  height?: number;
}

export const SvgItem = (props: Props) => {
  const {name, width = 24, height = 24} = props;

  const IconComponent = SvgStatic[name as keyof typeof SvgStatic];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent width={width} height={height} />;
};
