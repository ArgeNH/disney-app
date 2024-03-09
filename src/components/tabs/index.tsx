import { CATEGORIES } from '../../constants/constants';

const Tabs = () => {
  return (
    <div className="flex justify-center items-center">
      <ul className="menu bg-brand-600/20 bg-opacity-15 border-dashed border-[0.5px] lg:menu-horizontal rounded-box">
        {CATEGORIES.map(({ id, name, Icon }) => (
          <li key={id}>
            <a className="hover:text-brand-700">
              {Icon && <Icon />}
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
