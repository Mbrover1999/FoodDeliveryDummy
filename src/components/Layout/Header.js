import {Fragment} from "react";
import bannerImage from '../../assets/banner.jpeg';
import HeaderCartButton from "./HeaderCartButton";
import classes from './Header.module.css'

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Cesar</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={bannerImage} alt='A table full of delicious food!' />
            </div>
        </Fragment>
    );

}

export default Header;
