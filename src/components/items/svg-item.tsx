import {SvgStatic} from '~/assets/svgs';

interface Props {
  name: any;
}

export const SvgItem = (props: Props) => {
  const {name} = props;

  const IconComponent = SvgStatic[name as keyof typeof SvgStatic];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent />;
};
