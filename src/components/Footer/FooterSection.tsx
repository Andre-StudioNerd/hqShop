import styles from "./FooterSection.module.css";
import Typography from "../Typography";

export type FooterItem = {
  label: string;
  href?: string; // O ? torna o href opcional
};

type FooterSectionProps = {
  readonly title: string;
  readonly items: FooterItem[];
};

export default function FooterSection({
  title,
  items,
  ...rest
}: FooterSectionProps) {
  return (
    <div className={styles.section} {...rest}>
      <Typography variantStyle="bodyLargeBold">{title}</Typography>
      <ul>
        {items.map((item, index) => (
          <li key={`footer-item-${index}`}>
            {item.href ? (
              <a href={item.href}>
                <Typography variantStyle="body">{item.label}</Typography>
              </a>
            ) : (
              <Typography variantStyle="body">{item.label}</Typography>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
