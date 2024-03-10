import { CATEGORIES, CategoryType } from '../../constants/constants';

interface TabsProps {
  setSelectCategory: React.Dispatch<React.SetStateAction<CategoryType | null>>;
}

const Tabs = ({ setSelectCategory }: TabsProps) => {
  return (
    <div className="flex justify-center items-center">
      <ul className="menu bg-brand-600/20 bg-opacity-15 border-dashed border-[0.5px] lg:menu-horizontal rounded-box">
        {CATEGORIES.map(({ id, name, Icon }) => (
          <li key={id}>
            <button
              className=" text-lg text-word-100 hover:text-brand-700"
              onClick={() => setSelectCategory({ id, name })}
            >
              {Icon && <Icon />}
              {name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
