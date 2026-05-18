import { Icon } from '../atoms/icons';

interface FeatureItemProps {
    icon: string;
    text: string;
}

export const FeatureItem = ({ icon, text }: FeatureItemProps) => (
    <li className="flex items-center gap-3 font-label-md text-primary">
        <Icon name={icon} filled className="text-primary" />
        {text}
    </li>
);