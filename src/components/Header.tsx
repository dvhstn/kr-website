import klr_logo from '../assets/klr_logo.png';
import Menu from './Menu';

const Header = () => {
    return (
        <div className="header flex items-center m-5 gap-4">
            <Menu />
            <img src={klr_logo} className="logo h-20" alt="KLR Logo" />
            <div className="flex flex-col">
                <h1 className="font-serif text-3xl font-extrabold text-green-900 pt-0">Kristen Robbins</h1>
                <h4 className="font-serif text-left text-2xl font-medium text-green-900">Psychotherapy & <br /> Counselling</h4>
            </div>
        </div>
    );
};

export default Header;