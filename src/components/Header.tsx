import klr_logo from '../assets/klr_logo.png'

const Header = () => {
    return (
        <div className="header flex items-center gap-7">
            <img src={klr_logo} className="logo scale-250" alt="KLR Logo" />
            <div className="flex flex-col">
                <h1 className="font-serif text-3xl font-extrabold text-green-900 pt-0">Kristen Robbins</h1>
                <h4 className="font-serif text-left text-2xl font-medium text-green-900">Psychotherapy & <br></br> Counselling</h4>
            </div>
        </div>
    )
}

export default Header