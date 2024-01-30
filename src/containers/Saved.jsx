import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavourites } from '../redux/favourites/selectors';
import { getHomes } from '../redux/homes/selectors';
import { deleteFavourite } from '../redux/favourites/operations';
import { fetchFavourites } from '../redux/favourites/operations';
import ImgFavIcon from '../assets/img/icon-fav.svg';
import {useNavigate} from "react-router"

const Saved = () => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const favourites = getFavourites(selector);
    console.log('dsdsd', favourites);
    useEffect(() => {
        dispatch(fetchFavourites());
    }, []);
    return (
        <div>
            <section class="buy">
                <div class="head">
                    <h4>Saved Houses</h4>
                    <ul class="images">
                        {favourites &&
                            favourites.map(favourite => (
                                <li class="box">
                                    <img
                                        class="fav"
                                        onClick={() => {
                                            dispatch(deleteFavourite(favourite.id));
                                        }}
                                        src={ImgFavIcon}
                                        alt=""
                                    />
                                    <img
                                        src={'https://res.cloudinary.com/dv6xqszj1/' + favourite.home.main_image}
                                        alt=""
                                    />
                                    {console.log(favourite.home.main_image)}
                                    <h3>{favourite.price}</h3>
                                    <p>
                                        {favourite.home.layout} 1,800 sqft <br />
                                        <br />
                                        {favourite.home.state}, {favourite.home.address}
                                    </p>
                                </li>
                            ))}
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Saved;
